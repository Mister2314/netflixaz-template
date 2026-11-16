import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { films } from "../src/data/films.js";
const root = new URL("../", import.meta.url);
for (const file of ["index.html", "src/main.js", "src/styles/main.css", "src/styles/tokens.css", "AGENTS.md", "DESIGN.md", "PLAN.md", "PROGRESS.md", "docs/REQUIREMENTS.md", "docs/DATA_MODEL.md", "docs/QA_CHECKLIST.md"]) await access(new URL(file, root));
const ids = new Set();
for (const film of films) {
  assert.equal(typeof film.id, "string");
  assert.ok(film.id.length && !ids.has(film.id), "Film ID-si boş və ya təkrardır");
  ids.add(film.id);
  assert.ok(typeof film.title === "string" && film.title.trim());
  assert.ok(Number.isInteger(film.year) && film.year > 1800);
  assert.ok(Array.isArray(film.genres) && film.genres.length > 0 && film.genres.every(g => typeof g === "string" && g.trim()));
  assert.ok(typeof film.description === "string" && film.description.trim());
  assert.ok(Array.isArray(film.sources) && film.sources.length > 0);
  for (const source of film.sources) assert.equal(new URL(source.url).protocol, "https:");
  assert.ok(film.poster && ["licensed", "original-neutral"].includes(film.poster.kind));
  assert.ok(film.poster.rights && film.poster.src);
  await access(new URL(film.poster.src.replace(/^\.\//, ""), root));
  if (film.trailer) {
    const url = new URL(film.trailer.url);
    assert.ok(["www.youtube.com", "youtube.com", "youtu.be"].includes(url.hostname));
    assert.equal(url.protocol, "https:");
    assert.ok(film.trailer.verifiedAt && film.trailer.channel);
  }
}
const html = await readFile(new URL("index.html", root), "utf8");
assert.ok(html.includes('lang="az"'));
if (process.argv.includes("--release")) {
  assert.ok(films.length >= 30, "Yayım üçün ən azı 30 yoxlanmış film lazımdır");
  assert.ok(films.some(film => film.year < 1991), "Klassik filmlər yoxdur");
  const progress = await readFile(new URL("PROGRESS.md", root), "utf8");
  assert.ok(progress.includes("RELEASE_READY: true"), "Əl ilə QA və yayım hazırlığı bitməyib");
}
console.log("Struktur və mövcud məlumat sxemi yoxlandı. Film sayı: " + films.length);
console.log("Bu yoxlama mənbə doğruluğunu, vizual QA-nı və UI funksiyalarını təsdiqləmir.");

