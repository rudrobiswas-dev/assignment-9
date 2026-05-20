import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AuthProvider from "@/providers/AuthProvider";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "MediQueue",
  description: "Tutor Booking Platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body suppressHydrationWarning>

        <AuthProvider>

          <Toaster position="top-right" />

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

        </AuthProvider>

      </body>

    </html>
  );
}