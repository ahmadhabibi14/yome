"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
   const pathname = usePathname();

   return (
      <nav className="navbar">
         {/* Logo */}
         <a href="/" className="hover:grayscale">
            <Image
               src="/icons/yome/Yome.svg"
               width={110}
               height={110}
               title="Yome - Listen your fantastic audio"
               alt="Hero"
               className="w-[110px] h-auto drop-shadow-xl"
            />
         </a>

         <div className="flex flex-row space-x-6 text-sm">
            {/* Home */}
            <Link href="/"
               className={pathname === "/"
                  ? "flex flex-row space-x-1.5 py-1.5 px-3 rounded-xl bg-green-400/20 text-green-600"
                  : "flex flex-row space-x-1.5 py-1.5 px-3 hover:text-green-600"
               }>
               <svg className="w-[17px] h-auto fill-green-700" viewBox="0 0 24 24">
                  <path opacity="0.4" d="M10.0693 2.8201L3.13929 8.37009C2.35929 8.99009 1.85929 10.3001 2.02929 11.2801L3.35929 19.2401C3.59929 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99009 20.8593 8.37009L13.9293 2.83008C12.8593 1.97008 11.1293 1.9701 10.0693 2.8201Z"/>
                  <path d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z"/>
               </svg>
               <span>Home</span>
            </Link>
            {/* Top Charts */}
            <Link href="/top-charts"
               className={pathname === "/top-charts"
                  ? "flex flex-row space-x-1.5 py-1.5 px-3 rounded-xl bg-amber-400/20 text-amber-600"
                  : "flex flex-row space-x-1.5 py-1.5 px-3 hover:text-amber-600"
               }>
               <svg className="w-[17px] h-auto fill-amber-600" viewBox="0 0 24 24">
                  <path d="M22 22H2C1.59 22 1.25 21.66 1.25 21.25C1.25 20.84 1.59 20.5 2 20.5H22C22.41 20.5 22.75 20.84 22.75 21.25C22.75 21.66 22.41 22 22 22Z" />
                  <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z" />
                  <path opacity="0.4" d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z" />
                  <path opacity="0.4" d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" />
               </svg>
               <span>Top Charts</span>
            </Link>
            {/* Search */}
            <Link href="/search"
               className={pathname === "/search"
                  ? "flex flex-row space-x-1.5 py-1.5 px-3 rounded-xl bg-indigo-400/20 text-indigo-600"
                  : "flex flex-row space-x-1.5 py-1.5 px-3 hover:text-indigo-600"
               }>
               <svg className="w-[18px] h-auto fill-indigo-600" viewBox="0 0 24 24">
                  <path opacity="0.4" d="M11.0002 20.01C15.9763 20.01 20.0102 15.9761 20.0102 11C20.0102 6.0239 15.9763 1.98999 11.0002 1.98999C6.02415 1.98999 1.99023 6.0239 1.99023 11C1.99023 15.9761 6.02415 20.01 11.0002 20.01Z" />
                  <path d="M14 10.25H8C7.59 10.25 7.25 9.91 7.25 9.5C7.25 9.09 7.59 8.75 8 8.75H14C14.41 8.75 14.75 9.09 14.75 9.5C14.75 9.91 14.41 10.25 14 10.25Z" />
                  <path d="M11 13.25H8C7.59 13.25 7.25 12.91 7.25 12.5C7.25 12.09 7.59 11.75 8 11.75H11C11.41 11.75 11.75 12.09 11.75 12.5C11.75 12.91 11.41 13.25 11 13.25Z" />
                  <path d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z" />
               </svg>
               <span>Search</span>
            </Link>
         </div>

         {/* Theme toggle */}
         <button title="Light theme" className="text-white text-sm bg-gradient-to-br from-sky-500 to-fuchsia-500 py-1.5 px-3 rounded-xl flex flex-row space-x-2 drop-shadow-md">
            <svg className="fill-current w-[20px] h-auto" viewBox="0 0 24 24">
               <path d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z" />
               <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" />
            </svg>
            <span>Light</span>
         </button>
      </nav>
   );
}

export default Navbar;