export function normalizeTitle(value) {
  return value.normalize("NFC").toLocaleLowerCase("az-AZ").trim();
}
export function filterFilms(films, { query = "", genre = "" } = {}) {
  const needle = normalizeTitle(query);
  return films.filter(film =>
    (!genre || film.genres.includes(genre)) &&
    normalizeTitle(film.title).includes(needle)
  );
}
export function getClassics(films) {
  return films.filter(film => film.year < 1991);
}
export function pickRecommendation(films, genre = "", random = Math.random) {
  const pool = films.filter(film => !genre || film.genres.includes(genre));
  return pool.length ? pool[Math.floor(random() * pool.length)] : null;
}

