import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js Warm-up",
  description: "Minu esimene lihtne Next.js rakendus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="et">
      <body>
        <nav aria-label="Peamenüü">
          <Link href="/">Avaleht</Link>
          <Link href="/about">Minust</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
