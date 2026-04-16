# Memulai (Getting Started)

![Setup Illustration](/images/setup.png)

Halaman ini akan memandu Anda melalui proses instalasi dan penyiapan proyek VitePress pertama Anda.

## Prasyarat

- **Node.js**: Versi 18.0.0 atau yang lebih baru.
- **Terminal**: Akses ke baris perintah (Command Line).

## Instalasi Cepat

Jika Anda ingin memulai dari awal di folder baru:

```bash
# Buat direktori dan masuk
mkdir dokumentasi-proyek && cd dokumentasi-proyek

# Inisialisasi npm
npm init -y

# Instal vitepress
npm add -D vitepress
```

## Setup Wizard

VitePress dilengkapi dengan perintah inisialisasi interaktif untuk menyiapkan struktur dasar:

```bash
npx vitepress init
```

Ikuti langkah-langkah di terminal untuk menentukan:
1. Lokasi konfigurasi (default: `./`).
2. Judul dan Deskripsi situs.
3. Tema (pilih **Default Theme**).
4. Penggunaan TypeScript.
5. Menambahkan script npm ke `package.json`.

## Menjalankan Proyek

Gunakan perintah berikut untuk menjalankan server pengembangan lokal:

```bash
npm run docs:dev
```

Situs Anda sekarang tersedia di `http://localhost:5173`.
