import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/images/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],

    sidebar: [
      {
        text: 'Guide',
        // collapsed: false,
        items: [
          { text: 'Pengenalan', link: '/guide/introduction' },
          { text: 'Memulai', link: '/guide/getting-started' },
          {
            text: 'Teknis',
            collapsed: true,
            items: [
              { text: 'Konfigurasi', link: '/guide/configuration' },
              { text: 'Fitur Markdown', link: '/guide/markdown' },
            ]
          },
          { text: 'Build & Deploy', link: '/guide/deployment' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: 'Daftar Isi'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Dirilis di bawah Lisensi MIT.',
      copyright: 'Copyright © 2024-Present'
    },

    docFooter: {
      prev: 'Halaman Sebelumnya',
      next: 'Halaman Selanjutnya'
    },

    lastUpdated: {
      text: 'Terakhir diperbarui',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },

    search: {
      provider: 'local'
    }
  }
})
