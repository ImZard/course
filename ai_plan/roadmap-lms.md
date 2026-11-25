# Roadmap Pengerjaan: Student LMS Dashboard ("Learning With Us")

**Target**: Frontend Only, Next.js (App Router), Siap Deploy dalam < 24 Jam.

---

### Fase 1: Inisialisasi Proyek & Tooling (Estimasi: 30-45 menit)

Fokus: Setup base project bersih tanpa dependensi berlebih.

- [ ] Scaffold Next.js dengan TypeScript & Tailwind CSS:
  ```bash
  npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
  ```
- [ ] Install icon library ringan:
  ```bash
  npm install lucide-react clsx tailwind-merge
  ```
- [ ] (Opsional/Rekomendasi) Inisialisasi `shadcn/ui` untuk komponen dasar yang diminta (Table, Button, Input, Badge, Dropdown):
  ```bash
  npx shadcn@latest init -d
  npx shadcn@latest add button input table badge avatar card
  ```

---

### Fase 2: Struktur Direktori & Mock Data (Estimasi: 30 menit)

Fokus: Sediakan data dummy yang realistis agar UI terlihat hidup tanpa setup backend/DB.

- [ ] Buat file mock data di `@/lib/mock-data.ts`:
  - `studentProfile` (Nama, email, avatar, grade)
  - `enrolledCourses` (Title, thumbnail, progress %, instructor, category)
  - `ebooks` (Title, author, cover, pages, format, downloadUrl)
  - `purchaseHistory` (Invoice ID, item name, date, payment method, amount, status: `PAID` / `PENDING`)
- [ ] Struktur routing App Router:
  ```text
  src/
  ├── app/
  │   ├── (auth)/
  │   │   └── login/page.tsx
  │   ├── (dashboard)/
  │   │   ├── layout.tsx         <-- Shell (Sidebar + Header + Breadcrumbs)
  │   │   ├── page.tsx           <-- Dashboard
  │   │   ├── courses/page.tsx   <-- Course List & Filter
  │   │   ├── ebooks/page.tsx    <-- Ebook List & Search
  │   │   └── purchases/page.tsx <-- Purchase History Table
  ├── components/
  │   ├── layout/ (Sidebar, Header, Breadcrumbs)
  │   ├── ui/ (komponen atomic)
  │   └── shared/ (SearchInput, StatusBadge)
  └── lib/
      └── mock-data.ts
  ```

---

### Fase 3: Layout Shell & Navigasi (Estimasi: 1 - 1.5 jam)

Fokus: Komponen layout utama yang dipakai di seluruh halaman internal.

- [ ] **Sidebar**:
  - Logo "Learning With Us"
  - Menu aktif: Dashboard, Courses, Ebooks, Purchase History, Settings
  - Tombol Logout (redirect ke `/login`)
  - Responsif: hamburger toggle untuk tampilan mobile/tablet.
- [ ] **Header**:
  - Search bar global
  - Profil student (avatar + dropdown mock) & notifikasi
- [ ] **Breadcrumbs**:
  - Komponen dinamis membaca `usePathname()` untuk generate path (contoh: `Home > Courses`).

---

### Fase 4: Implementasi Halaman Utama (Estimasi: 3 - 4 jam)

#### 1. Halaman Login (`/login`)

- Tampilan form login student (Email & Password).
- Tombol login otomatis redirect ke `/dashboard` (mock auth via simple router push / localStorage flag).
- Tambahkan card credentials demo (misal: `student@learningwithus.com`).

#### 2. Halaman Dashboard (`/`)

- Welcome banner student ("Halo, Alex! Lanjutkan belajarmu hari ini").
- Metric cards: Kursus aktif, Jam belajar, Sertifikat, Ebook tersimpan.
- Section "Continue Learning" (progress bar kursus terakhir).
- Section ringkasan aktivitas terbaru / pengumuman.

#### 3. Halaman Course (`/courses`)

- Search bar & filter kategori (e.g., Programming, UI/UX, Business).
- Grid course cards berisi: thumbnail, kategori badge, progress bar, tombol "Lanjut Belajar".

#### 4. Halaman Ebook (`/ebooks`)

- Search bar ebook & filter kategori.
- Grid ebook cards dengan cover mockup, rating, tombol "Baca Online" / "Unduh PDF" (trigger preview dialog / download mock).

#### 5. Halaman Purchase History (`/purchases`)

- Komponen **Tabel** lengkap:
  - Kolom: No. Invoice, Nama Produk (Course/Ebook), Tanggal Transaksi, Metode Pembayaran, Nominal, Status Badge.
  - Search/Filter transaksi (berdasarkan invoice ID / status).
  - Aksi: Tombol "Download Invoice" (mock).

---

### Fase 5: Polish & Finishing (Estimasi: 1 jam)

- [ ] State handling sederhana (input search fungsional memfilter array mock data lokal).
- [ ] Status visual: Active link pada sidebar, badge warna status (Hijau = Success, Kuning = Pending).
- [ ] Responsive design check (Mobile, Tablet, Desktop).
- [ ] Metadata title & favicon disesuaikan dengan "Learning With Us".

---

### Fase 6: Build & Deployment (Estimasi: 30 menit)

- [ ] Jalankan `npm run build` lokal untuk memastikan tidak ada TypeScript error / dead imports.
- [ ] Push repository ke GitHub.
- [ ] Hubungkan repo ke **Vercel** untuk auto-deploy & dapatkan live URL publik.
- [ ] Uji link live sebelum disubmit ke Google Form/kolom pengumpulan.
