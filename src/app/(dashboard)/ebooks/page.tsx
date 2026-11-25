"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Download, BookOpen, Star, FileText, CheckCircle2 } from "lucide-react";
import { mockEbooks } from "@/lib/mock-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["Semua", "Programming", "UI/UX Design", "Database", "Business"];

export default function EbooksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [previewEbook, setPreviewEbook] = useState<string | null>(null);

  const filteredEbooks = mockEbooks.filter((ebook) => {
    const matchesSearch =
      ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ebook.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || ebook.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Perpustakaan E-Book</h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Akses buku panduan eksklusif, referensi modul, dan literatur pendukung belajar Anda.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Filter */}
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
            placeholder="Cari judul atau penulis ebook..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 text-xs h-9"
          />
        </div>
      </div>

      {/* Ebook Grid */}
      {filteredEbooks.length === 0 ? (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-muted-foreground/60" />
          <h3 className="mt-3 text-sm font-semibold">Tidak ada E-Book ditemukan</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Coba gunakan kata kunci pencarian yang berbeda.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredEbooks.map((ebook) => (
            <Card key={ebook.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row">
                {/* Book Cover Image */}
                <div className="relative h-56 sm:h-auto sm:w-44 shrink-0 bg-muted">
                  <Image
                    src={ebook.cover}
                    alt={ebook.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-primary text-primary-foreground text-[10px]">
                      {ebook.format}
                    </Badge>
                  </div>
                </div>

                {/* Ebook Details */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <Badge variant="outline" className="text-[10px]">
                        {ebook.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-amber-500 font-semibold">
                        <Star className="h-3 w-3 fill-current" />
                        {ebook.rating}
                      </span>
                    </div>
                    <CardTitle className="text-base font-bold leading-snug line-clamp-2">
                      {ebook.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground pt-1">
                      Penulis: <span className="font-semibold text-foreground">{ebook.author}</span>
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 pt-2 leading-relaxed">
                      {ebook.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 pt-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FileText className="h-3.5 w-3.5" /> {ebook.pages} Halaman
                      </span>
                      <span>•</span>
                      <span>Ukuran: {ebook.size}</span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-0 pt-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs gap-1.5"
                      onClick={() => setPreviewEbook(ebook.title)}
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Baca Online
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 text-xs gap-1.5"
                      onClick={() => alert(`Memulai unduhan: ${ebook.title} (${ebook.format})`)}
                    >
                      <Download className="h-3.5 w-3.5" />
                      Unduh
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Mock Reader Preview Modal */}
      {previewEbook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold">
              <CheckCircle2 className="h-5 w-5" />
              <h3 className="text-base font-bold">E-Book Reader Mode</h3>
            </div>
            <p className="text-sm font-semibold">{previewEbook}</p>
            <div className="rounded-lg bg-muted p-4 text-xs text-muted-foreground leading-relaxed">
              Ini adalah simulasi online reader untuk siswa <strong>Learning With Us</strong>. Fitur ini memungkinkan membaca langsung tanpa perlu mengunduh file secara lokal.
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button size="sm" variant="default" onClick={() => setPreviewEbook(null)}>
                Tutup Pratinjau
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
