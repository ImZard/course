import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning With Us - Student Dashboard",
  description: "Platform Learning Management System untuk Siswa Learning With Us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
