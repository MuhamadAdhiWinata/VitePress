# Build & Deploy

![Deployment Illustration](/images/deploy.png)

Setelah dokumentasi Anda siap, Anda perlu mem-build-nya menjadi file statis agar dapat dipublikasikan.

## Membangun Situs (Build)

Jalankan perintah berikut untuk menghasilkan versi produksi dari situs Anda:

```bash
npm run docs:build
```

Hasil build akan disimpan di folder `.vitepress/dist`. Folder ini berisi file HTML, CSS, dan JS statis yang siap di-hosting.

## Deployment

VitePress dapat di-host di hampir semua layanan hosting statis.

### GitHub Pages
1. Pastikan kode Anda ada di repositori GitHub.
2. Gunakan GitHub Actions untuk mem-build dan men-deploy secara otomatis.
3. Anda bisa menggunakan template workflow resmi dari VitePress.

### Vercel / Netlify
1. Hubungkan repositori Anda ke dashboard Vercel atau Netlify.
2. Atur Build Command: `npm run docs:build`.
3. Atur Output Directory: `.vitepress/dist`.
4. Klik Deploy!

### Preview Lokal
Setelah melakukan build, Anda dapat mencoba melihat hasilnya secara lokal:

```bash
npm run docs:preview
```
