import "./globals.css";

export const metadata = {
  icons: {
    icon: "/favicons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
