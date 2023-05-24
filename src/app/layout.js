import "./globals.scss";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDP",
  description:
    "Study Abroad, Overseas Education Consultant, Get Free Counselling! | IDP India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
