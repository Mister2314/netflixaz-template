# Layihə qaydaları

## Yenilənmiş scope
İstifadəçi tam implementasiyaya başlamağa icazə verib. Əvvəlki yalnız-struktur dayanma qaydası artıq qüvvədə deyil. Cari status PROGRESS.md-dədir.

## Əvvəlki scope (tarixçə)

İstifadəçi yalnız Desktopda başlanğıc strukturu və davam sənədləri istədi. Bu mərhələ tamamlananda dayan. Film araşdırmasını, tam implementasiyanı və deploy-u yeni davam göstərişindən əvvəl başlatma.

## Hər yeni sessiyada oxu

1. PROGRESS.md: real status, son yoxlama, növbəti addım.
2. docs/REQUIREMENTS.md: dəyişməyən tapşırıq şərtləri.
3. DESIGN.md: qəbul edilmiş vizual istiqamət.
4. PLAN.md: mərhələ və asılılıqlar.
5. docs/DATA_MODEL.md, docs/CONTENT_SOURCES.md, docs/QA_CHECKLIST.md.
6. docs/design-references/: istifadəçinin bəyəndiyi beş tam mətn.

## Məhsul

- Ad: Netflix Azərbaycan. Mövzunu dəyişmə.
- Qeyri-rəsmi tədris layihəsi, Netflix ilə əlaqəsi yoxdur.
- Film izləmə xidməti və Netflix mövcudluğu iddiası yoxdur.
- UI Azərbaycan dilindədir. İstifadəçiyə cavablar da Azərbaycan dilində olsun.
- Hesab, backend, AI API və cihazlararası sinxronlaşma əlavə etmə.

## Dürüst məzmun

- 30 real film, hər birinin məlumatını etibarlı kino mənbəsində açıb yoxla.
- ID, ad, il, janr, öz sözlərinlə iki cümləlik təsvir və mənbə.
- İnternetdə poster tapmaq istifadə hüququ deyil. Hüquq yoxdursa neytral orijinal üzlük hazırla və belə etiketlə.
- Treyler yalnız düzgün filmə aid olduğu yoxlanmış YouTube linki. Tapılmayanda null. Tam filmi treyler kimi göstərmə.
- Uydurma film, mənbə, link, reytinq, mükafat və populyarlıq sıralaması yoxdur.

## Texniki sərhədlər

- Hazır baza: buildless HTML, CSS, ES modules; Node scripts. Xarici asılılıq yoxdur.
- Sadə kataloq üçün framework keçidi tələb olunmur. Kitabxana yalnız konkret ehtiyac və performans səbəbi ilə.
- Sistem şriftləri hazır skelet üçündür. Son şriftlərin Azərbaycan hərfləri və lisenziyasını yoxla.
- UI üçün vahid state və təhlükəsiz DOM yazılması. Mətnləri textContent ilə yaz.
- Tövsiyə yalnız janrdan asılıdır, axtarışdan asılı deyil.
- Axtarış və janr hər üç bölməyə birlikdə tətbiq olunur.
- localStorage xətası, pozulmuş JSON, təkrar və naməlum ID-lər idarə olunmalıdır.
- Modal: native dialog və ya bərabər əlçatan həll, Esc, bağlama, fokusun geri qayıtması, arxa scroll kilidi.
- 390 və 1440 px-də QA, reduced motion, klaviatura və fokus.
- İstifadəçinin başqa layihələrinə toxunma. Secret və credential yazma.
- Hazırkı user scope lokal-only-dir. Hosting ID-si, repo remote-u və production URL uydurma.

## Sessiya və kəsilmə protokolu

- İşə başlamazdan əvvəl PROGRESS.md-də aktiv tapşırıq, növbəti konkret addım və varsa bloklayıcını yenilə.
- Hər bitmiş mənalı mərhələdən sonra checkbox, fayllar, yoxlama və nəticəni yaz.
- Uzun işdə checkpoint yaz, yalnız final cavaba güvənmə.
- Yarımçıq işdə tam hansı funksiya, fayl və addım qaldığını yaz.
- Bütün modulları yenidən yazmaq əvəzinə mövcud statusu yoxla.
- Check keçdi deyəndə konkret əmri və məhdudiyyətini yaz.
- Kodun mövcudluğu işlədiyini sübut etmir. Vizual, funksional və yayımlanmış versiya yoxlamalarını ayrıca saxla.


## Latest media instruction
Do not generate film illustrations or synthetic hero artwork. Prefer real, sourced film stills only when rights are verified. The prior Nar bağı backdrop and cached source covers had rightsVerified:false; they are excluded from the public build. Until rights are cleared, use the existing neutral title covers in the catalogue and a plain dark hero stage. Existing neutral catalogue placeholders remain; do not claim all posters were replaced.

## Current trailer UX
User replaced external trailer requirement with internal YouTube embed player, shared hover previews for all cards. Never redirect from app trailer buttons. Only verified matching videos, no unrelated/full-film substitutes. Missing data must remain explicit. See src/core/trailers.js and PROGRESS.md.
