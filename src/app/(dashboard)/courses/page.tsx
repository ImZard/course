"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Star, Clock, BookOpen, CheckCircle, Play } from "lucide-react";
import { mockCourses } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const categories = ["Semua", "Web Development", "Design", "Data Science", "Business"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Katalog Kursus Siswa</h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Akses seluruh materi pembelajaran interaktif dan pantau progres belajar Anda.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="text-xs h-8"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cari kursus atau instruktur..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 text-xs h-9"
          />
        </div>
      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length === 0 ? (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-muted-foreground/60" />
          <h3 className="mt-3 text-sm font-semibold">Tidak ada kursus ditemukan</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Coba ubah kata kunci pencarian atau pilih kategori lain.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              {/* Thumbnail */}
              <div className="relative h-48 w-full bg-muted overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3">
                  <Badge variant="secondary" className="gap-1 bg-black/70 text-white backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </Badge>
                </div>
              </div>

              {/* Course Info */}
              <CardHeader className="flex-1 pb-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.totalLessons} Modul</span>
                </div>
                <CardTitle className="text-base font-bold line-clamp-2 leading-snug">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-xs pt-1">
                  Oleh: <span className="font-semibold text-foreground">{course.instructor}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2 pb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">
                    {course.completedLessons}/{course.totalLessons} Pelajaran
                  </span>
                  <span className="font-bold text-primary">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </CardContent>

              <CardFooter className="border-t bg-muted/20 pt-3 pb-3">
                <Button
                  className="w-full gap-2 text-xs font-semibold"
                  variant={course.progress === 100 ? "secondary" : "default"}
                  onClick={() => alert(`Membuka modul pembelajaran untuk: ${course.title}`)}
                >
                  {course.progress === 100 ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Ulas Kembali Materi
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 fill-current" />
                      Lanjutkan Belajar ({course.progress}%)
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
