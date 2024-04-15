import type { Metadata } from "next";
import "./globals.css";
import Model from "@/components/Model";

export const metadata: Metadata = {
  title: "Trello 2.0 Clone",
  description: "Generated by appwrite ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        {children}
        <Model /> 
      </body>
    </html>
  );
}
