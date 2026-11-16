# Netflix Azərbaycan

Azərbaycan filmləri üçün qeyri-rəsmi tədris kataloqu. Netflix ilə əlaqəli deyil. Film izləmə xidməti deyil.

## Hazırkı vəziyyət

32 filmlik kataloq, axtarış, janr, şəxsi siyahı, tövsiyə və detal pəncərəsi hazırdır. Hüququ təsdiqlənməyən film kadrları public build-ə daxil edilmir; neytral üzlüklər göstərilir. Son responsive/trailer QA və Vercel yayımı qalır. Cari status PROGRESS.md-dədir.

## Açmaq

Node.js 20 və ya daha yeni versiya:

```powershell
cd C:\Users\Morpheus\Desktop\netflix-azerbaycan
npm run dev
```

Brauzerdə http://127.0.0.1:5173 açın. Asılılıq yoxdur, npm install lazım deyil.

## Yoxlama

- `npm run check`: struktur və əlavə olunmuş məlumat sxemi.
- `npm run build`: statik faylları dist qovluğuna kopyalayır.
- `npm run check:release`: 30 film və əl ilə buraxılış statusunu tələb edir. Bu mərhələdə uğursuz olması gözlənilir.

## Davam edən AI

Əvvəl AGENTS.md, PROGRESS.md, DESIGN.md, PLAN.md və docs/REQUIREMENTS.md oxu. Sonra PROGRESS.md daxilindəki növbəti tapşırıqdan davam et. Dəyişiklikləri status faylında yaz.

