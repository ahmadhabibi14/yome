"use client"
import { useEffect } from "react";

export default function Error({error, reset}) {
   useEffect(() => {
      console.error(error)
   }, [error]);

   return (
      <div className="px-32 mt-20 w-full flex flex-col justify-center items-center h-fit">
         <h2 className="text-2xl font-bold">Something went wrong</h2>
         <button
            className="py-2 px-5 rounded-lg bg-blue-500 text-white"
            onClick={() => reset()}
         >
            Try Again
         </button>
      </div>
   )
}