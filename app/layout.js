import "./globals.css";

export const metadata = {
  title: "Electro Mall Apple Collection",
  description: "Electro Mall storefront recreated with Next.js and Tailwind CSS",
  icons: {
    icon: "/branding/favicon.png",
    shortcut: "/branding/favicon.png",
    apple: "/branding/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#283241] antialiased">
        {children}
      </body>
    </html>
  );
}
