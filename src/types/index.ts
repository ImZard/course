export interface StudentProfile {
  name: string;
  email: string;
  avatar: string;
  role: string;
  studentId: string;
  joinedDate: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  rating: number;
  duration: string;
}

export interface Ebook {
  id: string;
  title: string;
  author: string;
  category: string;
  cover: string;
  pages: number;
  format: "PDF" | "EPUB";
  rating: number;
  size: string;
  description: string;
}

export interface PurchaseHistoryItem {
  id: string;
  invoiceNo: string;
  itemName: string;
  itemType: "Course" | "Ebook";
  date: string;
  amount: number;
  paymentMethod: string;
  status: "PAID" | "PENDING" | "FAILED";
}

export interface DashboardMetric {
  title: string;
  value: string | number;
  change: string;
  icon: string;
}
