import "./globals.css"
import { Suspense } from "react"
import Navbar from "@/components/partials/navbar"
import Footer from "@/components/partials/footer"
import ErrorBoundary from "@/components/partials/error-boundary"
import Error from "./error"

export const metadata = {
   icons: {
      icon: "/favicons/favicon.svg"
   }
 }

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="font-poppins bg-gray-50 text-gray-900">
            <Navbar />
            <div className="min-h-[85vh]">
               <ErrorBoundary fallback={<Error />}>
                  <Suspense fallback={<p>Loading....</p>}>
                     {children}
                  </Suspense>
               </ErrorBoundary>
            </div>
            <Footer />
         </body>
      </html>
   )
}
