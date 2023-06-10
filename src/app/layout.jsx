import "./globals.css"
import Navbar from "@/components/partials/navbar/main"

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="font-poppins bg-gray-50 text-gray-900">
            <Navbar />
            {children}
         </body>
      </html>
   )
}
