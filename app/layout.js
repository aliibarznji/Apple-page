import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Electro Mall Apple Collection",
  description: "Electro Mall storefront recreated with Next.js and Tailwind CSS",
  icons: {
    icon: "/logo-cropped.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-white text-[#283241] antialiased`}>
        {children}
      </body>
    </html>
  );
}
