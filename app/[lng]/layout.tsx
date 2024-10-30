import "@/app/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS 15 Template",
  description:
    "This is a internationalization, monolithic NextJS 15 template with a screaming architecture and Prisma as ORM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
