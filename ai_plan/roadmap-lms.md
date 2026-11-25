# Roadmap Pengerjaan: Student LMS Dashboard ("Learning With Us")
**Target**: Frontend Only, Next.js (App Router), Siap Deploy dalam < 24 Jam.

---

### Fase 1: Inisialisasi Proyek & Tooling (Selesai)
Fokus: Setup base project bersih tanpa dependensi berlebih.
- [x] Scaffold Next.js dengan TypeScript & Tailwind CSS
- [x] Install icon library: `lucide-react`, `clsx`, `tailwind-merge`
- [x] Inisialisasi `shadcn/ui` untuk komponen dasar yang diminta (Table, Button, Input, Badge, Dropdown, Card, Avatar, Breadcrumb, Progress)

---

### Fase 2: Struktur Direktori & Mock Data (Selesai)
Fokus: Sediakan data dummy yang realistis agar UI terlihat hidup tanpa setup backend/DB.
- [x] Buat file mock data di `@/lib/mock-data.ts`:
  - `studentProfile` (Alex Pratama, studentId, avatar)
  - `enrolledCourses` (Title, thumbnail, progress %, instructor, lessons, duration)
  - `ebooks` (Title, author, cover, pages, format, size, rating)
  - `purchaseHistory` (Invoice ID, item name, date, payment method, amount, status: `PAID` / `PENDING`)
  - `dashboardMetrics` (Kursus aktif, Jam belajar, Sertifikat diraih, E-Book)
- [x] Struktur routing App Router (`/login`, `/dashboard`, `/courses`, `/ebooks`, `/purchases`)

---

### Fase 3: Layout Shell & Navigasi (Selesai)
Fokus: Komponen layout utama yang dipakai di seluruh halaman internal.
- [x] **Sidebar**:
  - Logo "Learning With Us"
  - Menu aktif: Dashboard, Courses, E-Books, Purchase History
  - Mini profil student + Tombol Logout
  - Responsif mobile drawer
- [x] **Header**:
  - Search bar cepat & notifikasi
  - Profil student dropdown menu (Profil, Riwayat, Logout)
- [x] **Breadcrumbs**:
  - Komponen dinamis membaca `usePathname()` untuk generate navigasi hirarki otomatis

---

### Fase 4: Implementasi Halaman Utama (Selesai)
- [x] **Halaman Login (`/login`)**: Form student login, simulasi redirect, card akun demo siap pakai.
- [x] **Halaman Dashboard (`/dashboard`)**: Welcome banner, 4 metric cards, continue learning featured card, list kursus terdaftar, info akademik & mentoring.
- [x] **Halaman Course (`/courses`)**: Live search, filter pill kategori, cards dengan thumbnail, rating, instruktur, progress bar, tombol interaksi.
- [x] **Halaman Ebook (`/ebooks`)**: Live search, filter kategori, badge format PDF/EPUB, tombol download mock, modal simulasi online reader.
- [x] **Halaman Purchase History (`/purchases`)**: Tabel riwayat transaksi lengkap, filter status PAID/PENDING, live search no invoice, format Rupiah, tombol unduh invoice.

---

### Fase 5: Polish & Bug Fixes (Selesai)
- [x] State handling interaktif (pencarian real-time pada kursus, ebook, dan riwayat transaksi).
- [x] Status visual (Active link sidebar, badge warna status hijau/kuning).
- [x] Perbaikan DropdownMenu context `@base-ui/react`.
- [x] Perbaikan upstream image loader di `next.config.ts`.

---

### Fase 6: Build & Deployment (Langkah Terakhir)
- [x] Validasi `npm run build` lokal (100% lulus, 0 error).
- [x] Push seluruh file proyek ke repository GitHub (`https://github.com/ImZard/course.git`).
- [ ] Hubungkan repo ke **Vercel** untuk auto-deploy & dapatkan live URL publik.
- [ ] Uji link live sebelum disubmit ke Google Form/kolom pengumpulan.
