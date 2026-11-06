import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoProvider } from "@/components/VideoContext";
import { VideoModal } from "@/components/VideoModal";
import { CustomCursor } from "@/components/CustomCursor";
import { CurtainProvider } from "@/components/CurtainTransition";

export const metadata: Metadata = {
  title: "Filma Studio | Elite Editorial Film & Commercial Production · Lahore",
  description:
    "Filma Studio is an elite editorial film production and brand marketing house based in Bahria Orchard, Lahore, Pakistan. We make commercial video ads and e-commerce visuals impossible to scroll past.",
  keywords: [
    "Filma Studio",
    "Commercial Video Ads Lahore",
    "Product Photography Pakistan",
    "E-commerce Shoots",
    "Direct Response Video Ads",
    "Bahria Orchard Production Studio",
    "SMPTE Timecode Production",
  ],
  authors: [{ name: "Filma Studio" }],
  openGraph: {
    title: "Filma Studio | Elite Editorial Film & Commercial Production",
    description: "We make brands impossible to scroll past. Commercial ads, product shoots & brand films.",
    url: "https://filmastudio.com",
    siteName: "Filma Studio",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black text-[#f5f5f5]">
      <body className="bg-black text-[#f5f5f5] antialiased selection:bg-[#b91c1c] selection:text-white min-h-screen flex flex-col">
        <SmoothScroll>
          <CurtainProvider>
            <VideoProvider>
              <CustomCursor />
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <VideoModal />
            </VideoProvider>
          </CurtainProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
