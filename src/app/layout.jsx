import "./globals.css"
import Navbar from "@/components/partials/navbar/main"
import Footer from "@/components/partials/footer/main"

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="font-poppins bg-gray-50 text-gray-900">
            <Navbar />
            <div className="min-h-[85vh]">{children}</div>
            <Footer />
         </body>
      </html>
   )
}
