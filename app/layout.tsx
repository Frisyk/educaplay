import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/Provider";

const inter = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] });

export const metadata: Metadata = {
  title: {
    template: '%s | EducaPlay',
    default: 'EducaPlay',
  },
  description: 'Web App belajar PAI interaktif.',
  metadataBase: new URL('https://educaplay.vercel.app'),
  icons: {
    icon: '/icon.png',
  },

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-blue-50 text-blue-800'}>
        <SessionProvider>
          {children}
        </SessionProvider>      
      </body>
    </html>
  );
}
