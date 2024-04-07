import type { Metadata } from "next";
import { inter, bricolage_Grotesque } from '@/utils/fonts';
import "./globals.scss";
import ReduxProvider from "@/store/redux-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage_Grotesque.variable}`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
