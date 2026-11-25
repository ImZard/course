"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("alex.pratama@student.learningwithus.com");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login delay for natural UX
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Learning With Us
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Student Learning Management System Portal
          </p>
        </div>

        {/* Login Card */}
        <Card className="border shadow-xl">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl font-bold">
              Masuk ke Akun Student
            </CardTitle>
            <CardDescription className="text-xs">
              Masukkan kredensial akun siswa Anda untuk mengakses dashboard
              materi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  className="text-xs font-semibold text-foreground"
                  htmlFor="email"
                >
                  Email Siswa
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@student.learningwithus.com"
                    className="pl-9 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    className="text-xs font-semibold text-foreground"
                    htmlFor="password"
                  >
                    Kata Sandi
                  </label>
                  <a
                    href="#"
                    className="text-[11px] text-primary hover:underline"
                  >
                    Lupa sandi?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-9 text-xs"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full gap-2 text-xs font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Memproses Masuk..."
                ) : (
                  <>
                    Masuk ke Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Demo Account Callout */}
            <div className="mt-5 rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 font-semibold text-primary">
                <CheckCircle2 className="h-4 w-4" />
                <span>Akun Demo Student Siap Pakai:</span>
              </div>
              <p className="mt-1">
                <strong>Email:</strong> alex.pratama@student.learningwithus.com
              </p>
              <p>
                <strong>Password:</strong> password123 (atau sembarang kata sandi)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer info */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          &copy; 2024 Learning With Us. All rights reserved.
        </p>
      </div>
    </div>
  );
}
