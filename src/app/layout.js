import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TaxwithAbdul – GST, Income Tax & Financial Compliance in India",
    template: "%s | TaxwithAbdul",
  },
  description:
    "TaxwithAbdul is a taxation service brand offering GST filing, income tax returns, financial statements, MSME registration and bookkeeping in India. Enquire on WhatsApp.",
  keywords: [
    "GST Filing Services in India",
    "GST Return Filing",
    "Income Tax Return Filing",
    "GST Registration",
    "GSTR-1 Filing",
    "GSTR-3B Filing",
    "MSME Registration",
    "Financial Statements for Loan",
    "Bookkeeping Services",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    title: "TaxwithAbdul – Taxation & Financial Compliance",
    description:
      "GST, income tax, financial statements, MSME registration and bookkeeping support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxwithAbdul",
    description: "GST, income tax and financial compliance support in India.",
  },
};
export const viewport = { themeColor: "#0B2447" };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
