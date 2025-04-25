import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/components/Theme-provider";
import { Toaster } from "sonner";
// import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lost Trails - Discover Unexplored Regions",
  description: "Experience the less explored regions of our country with Lost Trails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className={`${montserrat.variable}`}>
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ClientBody>{children}
        <Toaster/>
      </ClientBody>
       </ThemeProvider>
    </html>
  );
}
