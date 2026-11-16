import { createServer } from "node:http";
import { readFile, realpath } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = await realpath(fileURLToPath(new URL("../", import.meta.url)));
const port = Number(process.env.PORT || 5173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".woff2": "font/woff2" };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    if (relative.split("/").some(part => part.startsWith("."))) throw new Error("Forbidden");
    const target = await realpath(path.resolve(root, relative));
    const boundary = path.relative(root, target);
    if (boundary.startsWith("..") || path.isAbsolute(boundary)) throw new Error("Forbidden");
    const allowed = relative === "index.html" || relative.startsWith("src/") || relative.startsWith("assets/");
    if (!allowed) throw new Error("Forbidden");
    const bytes = await readFile(target);
    res.writeHead(200, { "Content-Type": types[path.extname(target)] || "application/octet-stream", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
    res.end(bytes);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Tapılmadı");
  }
}).listen(port, "127.0.0.1", () => console.log("Lokal skelet: http://127.0.0.1:" + port));

