import Link from "next/link"
 
export default function NotFound() {
  return (
    <div className="px-32 mt-20 w-full flex flex-col justify-center h-fit space-y-4">
      <h2 className="text-4xl font-bold">404 Page Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Back to <Link href="/">Home</Link>
      </p>
    </div>
  )
}