# Yekun QA

Son yenilənmə: 16.11.2026. Qutular yalnız müşahidə edilmiş yoxlamalara əsasən işarələnib. `npm run check` mənbələrin faktiki doğruluğunu, vizual görünüşü və UI davranışını öz-özünə təsdiqləmir.

## Məzmun
- [ ] 30+ real film, hər məlumat etibarlı mənbədə açılıb yoxlanıb. Mövcud kataloqda 32 film var, amma check əmri mənbə səhifələrinin məzmununu yoxlamır.
- [ ] Unikal ID, ad, il, janr, iki cümlə və açılan mənbə linki. `npm run check` 32 qeydin sxemini və URL-lərin HTTPS olmasını yoxladı; iki cümlə/film faktları və linklərin canlı açılması ayrıca tam auditi gözləyir.
- [x] Klassik bölməsi `year < 1991` qaydasından istifadə edir; əvvəlki brauzer yoxlamasında klassik tarix sərhədi yoxlanıb.
- [x] Build hüququ təsdiqlənməmiş film kadrlarını daxil etmir; saytda neytral, film adı ilə örtüklər istifadə olunur. Real kadr əlavə etməzdən əvvəl hüquq yenə yoxlanmalıdır.
- [ ] Hər treyler uyğun YouTube videosuna açılır. 24 video qeydi var, 8 film üçün uyğun video yoxdur; promo/fraqmentlər treyler deyil. Bütün videoların playback-i yoxlanmayıb.

## Funksiya
- [x] Kart/hero-dan düzgün film detalı açılır; əvvəlki brauzer yoxlamasında Nar bağı detalı açılıb.
- [x] Modal bağlama düyməsi və Esc; Esc fokusunu əvvəlki posterə qaytarır.
- [x] Modal açıqkən arxa səhifənin scroll-u kilidlənir, bağlananda bərpa olunur.
- [ ] Adın hissəsinə görə axtarışın Azərbaycan İ/i və I/ı kənar halları tam yoxlanmayıb.
- [x] Query + janr filtri birlikdə işləyir; əvvəlki yoxlamada `XALAT + Fantastika` doğru nəticə verdi.
- [x] Nəticə olmayanda reset göstərilir; əvvəlki brauzer yoxlamasında nəticəsiz query və reset yoxlanıb.
- [ ] Nəticəsiz query ilə boş şəxsi siyahının mesajları ayrıca tam ssenari kimi yoxlanmayıb.
- [x] Kart/modal/siyahı sayında əlavə-silmə sinxronlaşır; əvvəlki brauzer yoxlamasında əlavə etmə və silmə görülüb.
- [x] Dublikat ID və pozulmuş localStorage üçün kod yoxlamaları; refresh-dən sonra saxlama brauzerdə yoxlanıb.
- [x] Tövsiyə seçilmiş janrdan asılıdır, axtarışdan asılı deyil; `xxxx` query ilə janr tövsiyəsi dəyişmədi.
- [ ] Tövsiyədə boş janr mesajının ayrıca əl ilə ssenarisi qeydə alınmayıb.

## UI
- [x] 320, 390, 768, 1440 px brauzer ölçülərində səhifə kənara daşmayıb; əsas səhifələr vizual baxılıb.
- [x] Uzun film adları və düymələr ilkin desktop/mobile görünüşündə toqquşmadı.
- [ ] Real telefonda və hover-siz bütün toxunma axınları yoxlanmayıb.
- [ ] Tam klaviatura səyahəti, fokus halqası və kontrast auditinin hamısı yoxlanmayıb; modal Esc/fokusun qayıtması yoxlanıb.
- [ ] Reduced motion və son brauzer konsol QA-sı ayrıca tam yoxlanmayıb.
- [ ] Bütün 32 video/media resursunun yüklənməsi və layout sıçraması yoxlanmayıb.
- [x] Qeyri-rəsmi layihə və localStorage-ın yalnız bu brauzerdə işləməsi barədə UI açıqlaması mövcuddur.

## Təhvil
- [x] `npm run check` — keçdi, 32 filmli schema və asset/URL quruluşu.
- [ ] `npm run check:release` — keçmədi: `PROGRESS.md`-də release-ready hələ `false`-dur və əl ilə QA açıqdır.
- [x] `npm run build` — keçdi, `dist/` yaradıldı.
- [ ] Public URL yoxdur; istifadəçi Vercel-ə özü deploy edəcək.
- [ ] Production, gizli pəncərə və real telefon yoxlaması qalıb.
- [x] Hesabatda layihə adı, adı/qrupu, yoxlanmış nəticələr və açıq məhdudiyyətlər var; canlı URL qəsdən uydurulmayıb.

## Son yoxlama məhdudiyyəti

DOCX render üçün `render_docx.py` yoxlananda LibreOffice `soffice.exe` tapılmadı. MS Word COM açılmadı. Buna görə hesabatın səhifə renderi vizual yoxlanmayıb. Release statusu `false` olaraq qalır.
