import Link from "next/link";
import { BookOpen, Clock, Award, Bookmark, ArrowRight, PlayCircle, CheckCircle } from "lucide-react";
import { mockStudent, mockDashboardMetrics, mockCourses } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const ongoingCourse = mockCourses[0];
  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="h-5 w-5 text-blue-500" />,
    Clock: <Clock className="h-5 w-5 text-amber-500" />,
    Award: <Award className="h-5 w-5 text-emerald-500" />,
    Bookmark: <Bookmark className="h-5 w-5 text-purple-500" />,
  };

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-primary p-6 sm:p-8 text-white shadow-lg">
        <div className="relative z-10 max-w-2xl space-y-2">
          <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-none">
            {mockStudent.role} Dashboard
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Halo, {mockStudent.name}! 👋
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Selamat datang kembali di <strong className="text-white font-semibold">Learning With Us</strong>. Anda memiliki progres materi yang siap dilanjutkan hari ini.
          </p>
          <div className="pt-2">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
            >
              Lanjutkan Belajar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockDashboardMetrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <div className="rounded-lg bg-muted p-2">
                {iconMap[metric.icon] || <BookOpen className="h-4 w-4" />}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="mt-1 text-xs text-muted-foreground">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Grid: Continue Learning + Ongoing Courses */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Ongoing Featured Course (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-2 border-primary/20 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-primary border-primary/30">
                  Sedang Dipelajari
                </Badge>
                <span className="text-xs text-muted-foreground">Terakhir diakses: Hari ini</span>
              </div>
              <CardTitle className="text-lg font-bold sm:text-xl mt-1">
                {ongoingCourse.title}
              </CardTitle>
              <CardDescription className="text-xs">
                Instruktur: {ongoingCourse.instructor} • {ongoingCourse.duration}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span>Progres Keseluruhan</span>
                  <span className="font-bold text-primary">{ongoingCourse.progress}%</span>
                </div>
                <Progress value={ongoingCourse.progress} className="h-2.5" />
                <p className="text-[11px] text-muted-foreground">
                  {ongoingCourse.completedLessons} dari {ongoingCourse.totalLessons} materi terselesaikan
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <PlayCircle className="h-4 w-4 text-primary" />
                  <span>Modul Berikutnya: <strong>Server Components & Actions</strong></span>
                </div>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Lanjut Modul <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Enrolled Courses List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Kursus Terdaftar Anda</h2>
              <Link href="/courses" className="text-xs font-semibold text-primary hover:underline">
                Lihat Semua &rarr;
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {mockCourses.slice(1).map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-[10px]">
                        {course.category}
                      </Badge>
                      <span className="text-[11px] font-semibold text-primary">
                        {course.progress}%
                      </span>
                    </div>
                    <CardTitle className="text-sm font-bold line-clamp-1 mt-1">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Progress value={course.progress} className="h-1.5" />
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
                      <span>{course.completedLessons}/{course.totalLessons} Pelajaran</span>
                      <span>⭐ {course.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Student Highlights & Quick Info */}
        <div className="space-y-6">
          {/* Quick Profile Summary */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold">Ringkasan Profil Siswa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">ID Siswa</span>
                <span className="font-semibold">{mockStudent.studentId}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Bergabung Sejak</span>
                <span className="font-semibold">{mockStudent.joinedDate}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Status Akademik</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                  <CheckCircle className="h-3.5 w-3.5" /> Aktif
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pencapaian</span>
                <span className="font-semibold">Top 10% Bulan Ini</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Announcements */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold">Pengumuman & Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/40 p-3">
                <p className="font-semibold text-blue-900 dark:text-blue-300">
                  Live Mentoring Mingguan
                </p>
                <p className="mt-1 text-muted-foreground text-[11px]">
                  Sesi tanya-jawab bersama instruktur hari Jumat pukul 19:30 WIB.
                </p>
              </div>
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-3">
                <p className="font-semibold text-emerald-900 dark:text-emerald-300">
                  E-Book Baru Tersedia
                </p>
                <p className="mt-1 text-muted-foreground text-[11px]">
                  E-book baru tentang Clean Architecture siap diunduh di tab E-Books.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
