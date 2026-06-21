import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "广西紫苏油茶｜南宁青秀区酒店餐饮渠道合作",
  description:
    "为酒店、餐饮、茶饮与文旅空间提供广西特色紫苏油茶饮品方案，轻油感、冷热皆宜、出品简单，适合早餐、欢迎饮、茶歇和佐餐场景。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
