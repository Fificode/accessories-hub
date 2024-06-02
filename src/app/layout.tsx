import type { Metadata } from "next";
import { Inter, Roboto, Karla } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: '--font-inter', subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '700'],
  variable: '--font-roboto',
  subsets: ['latin'],
});
const karla = Karla({
  weight: ['400', '500', '700'],
  variable: '--font-karla',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Accessories Hub",
  description: "Ecommerce website for selling beautiful male and female jewelries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable} ${karla.variable} font-sans`}>{children}</body>
    </html>
  );
}
