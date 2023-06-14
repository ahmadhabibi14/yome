import Link from "next/link"

export default function NotFound() {
   return (
      <div className="px-44 mt-32 w-full flex flex-col justify-center items-center h-fit space-y-3 text-center">
         <h1 className="text-9xl font-black text-gray-400">404</h1>
         <h3 className="text-3xl font-bold">Page Not Found</h3>
         <p className="text-sm">Could not find requested resource</p>
         <Link href="/" className="w-fit flex flex-row space-x-2 text-lg bg-gradient-to-br from-sky-500 to-fuchsia-500 rounded-xl py-1.5 px-4 text-white">
            <span>Back to home</span>
            <svg className="w-[20px] h-auto fill-current" viewBox="0 0 24 24">
               <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"/>
               <path d="M14.5 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H14.5C14.91 11.25 15.25 11.59 15.25 12C15.25 12.41 14.91 12.75 14.5 12.75Z"/>
               <path d="M12.4995 15.7499C12.3095 15.7499 12.1195 15.6799 11.9695 15.5299C11.6795 15.2399 11.6795 14.7599 11.9695 14.4699L14.4395 11.9999L11.9695 9.52994C11.6795 9.23994 11.6795 8.75994 11.9695 8.46994C12.2595 8.17994 12.7395 8.17994 13.0295 8.46994L16.0295 11.4699C16.3195 11.7599 16.3195 12.2399 16.0295 12.5299L13.0295 15.5299C12.8795 15.6799 12.6895 15.7499 12.4995 15.7499Z"/>
            </svg>
         </Link>
      </div>
   )
}