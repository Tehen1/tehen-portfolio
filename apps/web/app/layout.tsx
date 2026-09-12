import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { TRPCProvider } from "@/lib/trpc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeheN — AI/Web3/Infra Architect",
  description: "Portfolio production-grade : Next.js 15, React 19, Supabase RLS, tRPC, OTEL.",
  metadataBase: new URL("https://tehen.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TRPCProvider>{children}</TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}