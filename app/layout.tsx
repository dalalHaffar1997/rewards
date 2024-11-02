import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rewards",
  description: "Get your Rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden"> {children}</main>
      </body>
    </html>
  );
}
