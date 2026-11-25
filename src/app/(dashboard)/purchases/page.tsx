"use client";

import { useState } from "react";
import { Search, Download, ReceiptText, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { mockPurchases, formatRupiah } from "@/lib/mock-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function PurchasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  const filteredPurchases = mockPurchases.filter((item) => {
    const matchesSearch =
      item.invoiceNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDownloadInvoice = (invoiceNo: string) => {
    alert(`Mengunduh invoice resmi untuk tagihan #${invoiceNo}...`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Riwayat Pembelian & Transaksi</h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Daftar seluruh riwayat pembayaran kursus dan e-book Anda di Learning With Us.
        </p>
      </div>

      {/* Main Table Card */}
      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-base font-bold">Daftar Faktur Pembayaran</CardTitle>
              <CardDescription className="text-xs">
                Total {filteredPurchases.length} transaksi tercatat.
              </CardDescription>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant={statusFilter === "ALL" ? "default" : "outline"}
                  onClick={() => setStatusFilter("ALL")}
                  className="text-xs h-8"
                >
                  Semua
                </Button>
                <Button
                  size="sm"
                  variant={statusFilter === "PAID" ? "default" : "outline"}
                  onClick={() => setStatusFilter("PAID")}
                  className="text-xs h-8"
                >
                  Berhasil (PAID)
                </Button>
                <Button
                  size="sm"
                  variant={statusFilter === "PENDING" ? "default" : "outline"}
                  onClick={() => setStatusFilter("PENDING")}
                  className="text-xs h-8"
                >
                  Menunggu (PENDING)
                </Button>
              </div>

              <div className="relative w-full sm:w-60">
                <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Cari no. invoice / nama item..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 text-xs h-8"
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="font-semibold text-xs">No. Invoice</TableHead>
                  <TableHead className="font-semibold text-xs">Item / Produk</TableHead>
                  <TableHead className="font-semibold text-xs">Tanggal</TableHead>
                  <TableHead className="font-semibold text-xs">Metode Pembayaran</TableHead>
                  <TableHead className="font-semibold text-xs">Nominal</TableHead>
                  <TableHead className="font-semibold text-xs">Status</TableHead>
                  <TableHead className="text-right font-semibold text-xs">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPurchases.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-32 text-center text-xs text-muted-foreground">
                      <ReceiptText className="mx-auto h-8 w-8 text-muted-foreground/50 mb-2" />
                      Tidak ada riwayat transaksi yang cocok dengan filter Anda.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPurchases.map((purchase) => (
                    <TableRow key={purchase.id} className="hover:bg-muted/40 transition-colors">
                      <TableCell className="font-mono text-xs font-semibold text-foreground">
                        {purchase.invoiceNo}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-foreground line-clamp-1">
                            {purchase.itemName}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            Tipe: {purchase.itemType}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {purchase.date}
                      </TableCell>
                      <TableCell className="text-xs text-foreground whitespace-nowrap">
                        {purchase.paymentMethod}
                      </TableCell>
                      <TableCell className="text-xs font-bold text-foreground whitespace-nowrap">
                        {formatRupiah(purchase.amount)}
                      </TableCell>
                      <TableCell>
                        {purchase.status === "PAID" ? (
                          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none text-[10px] gap-1">
                            <CheckCircle2 className="h-3 w-3" /> Berhasil
                          </Badge>
                        ) : purchase.status === "PENDING" ? (
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none text-[10px] gap-1">
                            <Clock className="h-3 w-3" /> Menunggu
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="text-[10px] gap-1">
                            <AlertCircle className="h-3 w-3" /> Gagal
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 gap-1 text-xs font-semibold text-primary hover:text-primary"
                          onClick={() => handleDownloadInvoice(purchase.invoiceNo)}
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">Invoice</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
