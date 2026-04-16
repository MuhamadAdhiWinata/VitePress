# Konfigurasi

Semua konfigurasi utama VitePress berada di dalam file `.vitepress/config.mts` (atau `.ts` / `.js`).

## File Konfigurasi Utama

Contoh struktur dasar konfigurasi:

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nama Situs Anda",
  description: "Deskripsi situs untuk SEO",
  themeConfig: {
    // Menambahkan logo di navbar
    logo: '/images/logo.png',

    // Navigasi atas
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],
    // Navigasi samping
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Intro', link: '/guide/introduction' }
        ]
      }
    ]
  }
})
```

## Fitur Pencarian (Search)

VitePress mendukung pencarian lokal tanpa perlu layanan eksternal.

### Cara Mengaktifkan Search

Tambahkan properti `search` di dalam `themeConfig`:

```typescript
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```

Setelah diaktifkan, tombol pencarian akan muncul secara otomatis di navbar. Fitur ini menggunakan **MiniSearch** untuk melakukan indexing konten Markdown Anda di sisi klien.

## Sidebar Berjenjang & Collapsible

Sidebar dapat diatur agar memiliki sub-menu dan bisa dibuka-tutup untuk menghemat ruang.

### Membuat Sub-Menu
Gunakanlah properti `items` di dalam item sidebar lainnya:

```typescript
sidebar: [
  {
    text: 'Induk Menu',
    items: [
      {
        text: 'Sub Menu',
        items: [
          { text: 'Halaman 1', link: '/page-1' }
        ]
      }
    ]
  }
]
```

### Fitur Collapsed
Tambahkan `collapsed: true` atau `false` pada item yang memiliki sub-menu untuk mengaktifkan fitur buka-tutup:

```typescript
{
  text: 'Teknis',
  collapsed: true, // Menu akan tertutup secara default
  items: [ ... ]
}
```

## Footer & Social Links

Anda juga dapat menambahkan link sosial dan teks footer:

```typescript
export default defineConfig({
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/username/repo' }
    ],
    footer: {
      message: 'Dirilis di bawah Lisensi MIT.',
      copyright: 'Copyright © 2024-Present'
    }
  }
})
```
