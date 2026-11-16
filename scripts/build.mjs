import { cp, mkdir, rm } from "node:fs/promises";
const root = new URL("../", import.meta.url);
await rm(new URL("dist/", root), { recursive: true, force: true });
await mkdir(new URL("dist/", root), { recursive: true });
for (const name of ["index.html", "src"]) {
  await cp(new URL(name, root), new URL("dist/" + name, root), { recursive: true });
}
for (const name of ["identity", "fonts", "posters"]) {
  await cp(new URL("assets/" + name, root), new URL("dist/assets/" + name, root), { recursive: true });
}
console.log("Build hazırdır: dist/");

