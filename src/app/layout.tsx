import type { Metadata } from "next";
import { Poppins, Prompt } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});
const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700", "800", "900"], // Add the weights you need
});
const tiktokSans = localFont({
  src: '../../public/fonts/TikTokSans.ttf', // relatif terhadap folder app/
  variable: '--font-tiktok-sans', // CSS variable font
  weight: '400',                  // Sesuaikan kalau kamu tahu bobotnya
  style: 'normal',
})

export const metadata: Metadata = {
  title: "GenKiddo Academy",
  description: "GenKiddo Academy - Belajar Koding dan AI untuk Anak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="/logo-genkiddo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${poppins.variable} ${prompt.variable} ${tiktokSans.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
