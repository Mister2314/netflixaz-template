# İş planı və buraxılış vəziyyəti

Son yenilənmə: 16.11.2026. İstifadəçi kodu GitHub-a göndərəcək, Vercel-də özü yayımlayacaq. Məhsulun mövzusu “Netflix Azərbaycan” olaraq qalır; bu qeyri-rəsmi film kataloqudur.

## M1: məzmun
- [x] 32 Azərbaycan filmi kataloqa əlavə edilib; 27-si 1991-dən əvvəldir.
- [x] Hər film üçün ID, ad, il, janr, iki cümləlik təsvir və mənbə qeydi saxlanır.
- [x] Hüquq məlum olmayan kataloq üzlükləri neytral, rəsmi poster olmadığını bildirir.
- [ ] Mənbə səhifələrinin bütün faktlarını yeni buraxılışdan əvvəl yenidən yoxla.
- [x] İctimai build-dən hüququ təsdiqlənməmiş kadrları çıxart; neutral orijinal örtükləri göstər.
- [ ] Gələcəkdə real film kadrı əlavə edilərsə, əvvəl istifadə hüququnu həll et.
- [x] 24 video qeydi var; promo, fraqment və treyler növləri ayrılıb. 8 filmə uyğun video yoxdur, playback-in tam QA-sı qalıb.

## M2: funksiya
- [x] Vahid state; film kartları, hero və native detail dialog.
- [x] Üç bölmədə birlikdə axtarış və janr filtri, reset və boş hallar.
- [x] Siyahıya əlavə/silmə, dublikatların qarşısı və localStorage error fallback.
- [x] Janr əsasında tövsiyə; axtarışdan asılı deyil.
- [x] Esc, fokusun geri qayıtması, arxa səhifə scroll kilidi.
- [x] YouTube videoları daxili player-də açılır; hover previews təmizlənir, video olmayan hallar açıq göstərilir.

## M3: görünüş və əlçatanlıq
- [x] Tünd rəng sistemi, Azərbaycan dili və uyğun responsiv kart quruluşu.
- [x] 320/390/768/1440 px ölçülərində əvvəlki brauzer yoxlaması; kənara daşma müşahidə edilməyib.
- [ ] Reduced motion, bütün keyboard/touch axınları və tam konsol auditi.
- [x] Hüququ təsdiqlənməmiş kadrlar build-ə daxil edilmir; neytral film-adı üzlükləri var.
- [ ] Real film kadrı əlavə edilməzdən əvvəl hüququ yoxla.

## M4: buraxılış və təhvil
- [x] `npm run check` keçdi; 32 filmli schema və asset/URL quruluşu.
- [x] `npm run build` keçdi, `dist/` yeniləndi.
- [ ] `npm run check:release` — `RELEASE_READY: false` olduğu və manual QA açıq qaldığı üçün uğursuz.
- [ ] GitHub push: repo URL məlumdur, amma lokal git init/auth yoxlanmalıdır.
- [ ] Vercel production, gizli pəncərə və real telefon yoxlaması istifadəçi deploy-dan sonra.
- [ ] Hesabat DOCX hazırlanıb; vizual render yoxlaması lokal LibreOffice/Word renderer olmadığı üçün bloklanıb.

## Buraxılış şərti

`RELEASE_READY` yalnız mənbə və media hüquqları, qalan trailer/playback QA, manual UI ssenariləri, public deploy və production yoxlaması bitəndə `true` edilir. İctimai URL və hosting ID uydurulmur.
