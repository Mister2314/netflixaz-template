# Film data müqaviləsi

src/data/films.js named export: films. Hazırda [] olması qəsdəndir.

Hər element:
- id: sabit unikal string, ASCII slug.
- title: Azərbaycan adı, string.
- year: yoxlanmış integer.
- genres: boş olmayan string array, janr adları bütün dataset-də ardıcıl.
- description: öz sözlərinlə iki cümlə, string.
- sources: [{ label, url, checkedAt }], https URL, ISO tarix. Tarixi faktiki yoxlama vaxtı yaz.
- poster: { src, kind, rights, sourceUrl, attribution }.
  - src: layihə kökündən assets/posters/... yolu.
  - kind: licensed və ya original-neutral.
  - rights: konkret lisenziya və ya orijinal yaradılma izahı.
  - sourceUrl: hüquqlu materialın mənbəyi, orijinalda null ola bilər.
  - attribution: lazım olan müəllif/atribusiya, orijinalda null ola bilər.
- trailer: null və ya { url, channel, verifiedAt }.
- backdrop: null və ya poster ilə eyni hüquq məlumatını saxlayan obyekt.

ID dəyişsə localStorage seçimləri itə bilər. Janr select-i dataset-dən çıxar.
Klassik: year < 1991.
Müəllif hüququ məlum olmayan asset-i licensed yazma.
Mənbə URL-nin mövcudluğu doğruluğu sübut etmir, səhifənin məzmununu oxu.
İki cümləni sadəcə nöqtə sayaraq avtomatik doğrulamaq etibarlı deyil, redaktə ilə yoxla.

