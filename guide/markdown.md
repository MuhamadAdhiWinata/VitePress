# Fitur Markdown

VitePress memperluas kemampuan Markdown standar dengan fitur-fitur khusus yang berguna untuk dokumentasi teknis.

## Ekstensi Markdown

### GFM (GitHub Flavored Markdown)
Semua fitur GFM didukung, seperti tabel, daftar tugas, dan autolink.

### Custom Containers
Anda bisa membuat kotak informasi/peringatan:

::: info
Ini adalah kontainer informasi.
:::

::: tip
Ini adalah kontainer tips atau saran.
:::

::: warning
Ini adalah kontainer peringatan.
:::

::: danger
Ini adalah kontainer bahaya yang sangat penting.
:::

### Syntax Highlighting
VitePress menggunakan **Shiki** untuk menyoroti kode dengan sangat indah:

```javascript{1,3}
// Baris 1 dan 3 akan disorot
function hello() {
  console.log("Hello VitePress!");
}
```

## Manipulasi Gambar

Secara default, Markdown standar tidak mendukung pengaturan ukuran gambar. Namun, karena VitePress berbasis Vue, Anda bisa menggunakan tag HTML `<img>` untuk kontrol penuh.

### Mengatur Ukuran Gambar
Gunakan atribut `width` dan `height` pada tag `img`:

```markdown
<img src="/images/setup.png" width="300" />
```

Atau gunakan style CSS:

```markdown
<img src="/images/setup.png" style="width: 200px; border-radius: 8px;" />
```

### Memposisikan Gambar ke Tengah
Cara terbaik untuk memposisikan gambar ke tengah adalah dengan menggunakan style CSS pada tag `img`:

```markdown
<img src="/images/setup.png" width="300" style="display: block; margin: 0 auto;" />
```

Atau Anda bisa membungkusnya dengan elemen `div` atau `p`:

```markdown
<div style="text-align: center;">
  <img src="/images/setup.png" width="300" />
</div>
```

::: tip
Menggunakan `display: block; margin: 0 auto;` langsung pada tag `img` adalah cara yang paling ringkas dan direkomendasikan.
:::

## Menggunakan Komponen Vue

Anda dapat menggunakan komponen Vue langsung di dalam Markdown:

<details>
<summary>Klik untuk melihat contoh komponen bawaan</summary>

Ini adalah elemen `<details>` standar HTML yang berfungsi di VitePress.
</details>

Misalnya, jika Anda memiliki komponen Vue di `.vitepress/theme/components`, Anda bisa langsung memanggil `<MyComponent />` di file Markdown manapun.
