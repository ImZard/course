import {
  StudentProfile,
  Course,
  Ebook,
  PurchaseHistoryItem,
  DashboardMetric,
} from "@/types";

export const mockStudent: StudentProfile = {
  name: "Alex Pratama",
  email: "alex.pratama@student.learningwithus.com",
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  role: "Student",
  studentId: "LWU-2024-8891",
  joinedDate: "Januari 2024",
};

export const mockDashboardMetrics: DashboardMetric[] = [
  {
    title: "Kursus Aktif",
    value: 4,
    change: "+1 dari bulan lalu",
    icon: "BookOpen",
  },
  {
    title: "Jam Belajar",
    value: "38.5 Jam",
    change: "+4.2 jam minggu ini",
    icon: "Clock",
  },
  {
    title: "Sertifikat Diraih",
    value: 2,
    change: "Semua terverifikasi",
    icon: "Award",
  },
  {
    title: "Ebook Tersimpan",
    value: 6,
    change: "Siap dibaca offline",
    icon: "Bookmark",
  },
];

export const mockCourses: Course[] = [
  {
    id: "crs-01",
    title: "Fullstack Web Development Modern dengan Next.js 15 & TypeScript",
    category: "Web Development",
    instructor: "Budi Santoso",
    instructorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80",
    progress: 72,
    totalLessons: 36,
    completedLessons: 26,
    rating: 4.9,
    duration: "18 Jam",
  },
  {
    id: "crs-02",
    title:
      "Mastering UI/UX Design: Dari Wireframing hingga Interactive Prototype",
    category: "Design",
    instructor: "Nadia Utami",
    instructorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
    progress: 45,
    totalLessons: 24,
    completedLessons: 11,
    rating: 4.8,
    duration: "12 Jam",
  },
  {
    id: "crs-03",
    title: "Fundamental Data Science & Machine Learning dengan Python",
    category: "Data Science",
    instructor: "Dr. Rizky Ramadhan",
    instructorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    progress: 100,
    totalLessons: 30,
    completedLessons: 30,
    rating: 5.0,
    duration: "20 Jam",
  },
  {
    id: "crs-04",
    title: "Product Management: Membangun Produk yang Dicintai Pengguna",
    category: "Business",
    instructor: "Sarah Wijaya",
    instructorAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    progress: 20,
    totalLessons: 18,
    completedLessons: 4,
    rating: 4.7,
    duration: "9 Jam",
  },
];

export const mockEbooks: Ebook[] = [
  {
    id: "ebk-01",
    title: "Panduan Lengkap Clean Architecture & Design Patterns di TypeScript",
    author: "Budi Santoso",
    category: "Programming",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80",
    pages: 284,
    format: "PDF",
    rating: 4.9,
    size: "14.2 MB",
    description:
      "Pedoman praktis membangun arsitektur perangkat lunak yang scalable dan mudah diuji.",
  },
  {
    id: "ebk-02",
    title: "Design Systems Handbook: Skalabilitas Komponen Antarmuka",
    author: "Nadia Utami",
    category: "UI/UX Design",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80",
    pages: 190,
    format: "PDF",
    rating: 4.8,
    size: "9.8 MB",
    description:
      "Standar industri dalam merancang design tokens, accessibility, dan library komponen.",
  },
  {
    id: "ebk-03",
    title: "SQL & Relational Database Design untuk Software Engineer",
    author: "Farhan Malik",
    category: "Database",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80",
    pages: 220,
    format: "EPUB",
    rating: 4.7,
    size: "6.5 MB",
    description:
      "Optimasi query, normalisasi data, indexing, dan teknik manajemen basis data relasional.",
  },
  {
    id: "ebk-04",
    title: "Pragmatic Product Management Playbook",
    author: "Sarah Wijaya",
    category: "Business",
    cover:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=80",
    pages: 165,
    format: "PDF",
    rating: 4.6,
    size: "8.1 MB",
    description:
      "Framework praktis validasi ide, prioritisasi backlog, dan metrik keberhasilan produk.",
  },
];

export const mockPurchases: PurchaseHistoryItem[] = [
  {
    id: "pch-001",
    invoiceNo: "INV-2024-00192",
    itemName: "Fullstack Web Development Modern dengan Next.js 15 & TypeScript",
    itemType: "Course",
    date: "14 Nov 2024",
    amount: 499000,
    paymentMethod: "BCA Virtual Account",
    status: "PAID",
  },
  {
    id: "pch-002",
    invoiceNo: "INV-2024-00175",
    itemName:
      "Panduan Lengkap Clean Architecture & Design Patterns di TypeScript",
    itemType: "Ebook",
    date: "02 Nov 2024",
    amount: 99000,
    paymentMethod: "GoPay",
    status: "PAID",
  },
  {
    id: "pch-003",
    invoiceNo: "INV-2024-00140",
    itemName:
      "Mastering UI/UX Design: Dari Wireframing hingga Interactive Prototype",
    itemType: "Course",
    date: "21 Okt 2024",
    amount: 399000,
    paymentMethod: "Mandiri Bill",
    status: "PAID",
  },
  {
    id: "pch-004",
    invoiceNo: "INV-2024-00098",
    itemName: "Design Systems Handbook: Skalabilitas Komponen Antarmuka",
    itemType: "Ebook",
    date: "05 Okt 2024",
    amount: 85000,
    paymentMethod: "QRIS",
    status: "PAID",
  },
  {
    id: "pch-005",
    invoiceNo: "INV-2024-00054",
    itemName: "Fundamental Data Science & Machine Learning dengan Python",
    itemType: "Course",
    date: "12 Sep 2024",
    amount: 549000,
    paymentMethod: "Credit Card (Visa)",
    status: "PAID",
  },
  {
    id: "pch-006",
    invoiceNo: "INV-2024-00012",
    itemName: "Cloud Native & Kubernetes Deployment Guide",
    itemType: "Course",
    date: "24 Agu 2024",
    amount: 620000,
    paymentMethod: "BCA Virtual Account",
    status: "PENDING",
  },
];

export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};
