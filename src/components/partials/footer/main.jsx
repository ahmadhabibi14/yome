import Link from "next/link";

export default function Footer() {
   const year = new Date().getFullYear();
   return (
      <footer className="bg-gray-200 flex flex-col space-y-8 py-8 px-44">
         <div className="w-full flex flex-row justify-between space-x-14 text-sm">
            <div className="flex flex-col space-y-3 basis-5/12">
               <h5 className="font-semibold text-xl">Useful Links</h5>
               <nav className="flex flex-col space-y-2 text-gray-700">
                  <Link className="hover:underline hover:text-sky-600" href="https://www.youtube.com/" target="_blank">Youtube Music</Link>
                  <Link className="hover:underline hover:text-sky-600" href="https://www.youtube.com/" target="_blank">Spotify</Link>
                  <Link className="hover:underline hover:text-sky-600" href="https://www.youtube.com/" target="_blank">Joox</Link>
                  <Link className="hover:underline hover:text-sky-600" href="https://www.youtube.com/" target="_blank">Billboard</Link>
               </nav>
            </div>
            <div className="flex flex-col space-y-3 grow">
               <h5 className="font-semibold text-xl">About Us</h5>
               <p className="text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum animi, quam aspernatur rerum ad quibusdam, consequatur ea iusto aperiam exercitationem quo ab rem nesciunt dolores vitae similique sit nihil quod!
               </p>
               <Link href="/donate" className="py-2 px-4 bg-gradient-to-br from-yellow-500 to-amber-600 text-white flex flex-row space-x-3 w-fit rounded-xl shadow-lg drop-shadow-md">
                  <svg className="fill-current w-[20px] h-auto" viewBox="0 0 24 24">
                     <path d="M17.74 22.7498H7.63C7.31 22.7498 7.03 22.5498 6.92 22.2598C6.81 21.9598 6.9 21.6297 7.14 21.4297C7.38 21.2297 7.6 20.9698 7.76 20.6898C8.08 20.1798 8.24 19.5998 8.24 19.0098C8.24 17.2198 6.78 15.7598 4.99 15.7598C4.25 15.7598 3.55 16.0097 2.96 16.4797C2.73 16.6597 2.43 16.6898 2.17 16.5698C1.91 16.4498 1.75 16.1798 1.75 15.8898V11.5198C1.75 9.02978 3.77 7.00977 6.26 7.00977H17.74C20.23 7.00977 22.25 9.02978 22.25 11.5198V12.9598C22.25 13.3698 21.91 13.7098 21.5 13.7098H19.48C19.13 13.7098 18.81 13.8398 18.58 14.0798L18.57 14.0898C18.29 14.3598 18.16 14.7297 18.19 15.1097C18.25 15.7697 18.88 16.2997 19.6 16.2997H21.5C21.91 16.2997 22.25 16.6397 22.25 17.0497V18.2397C22.25 20.7297 20.23 22.7498 17.74 22.7498ZM9.18 21.2498H17.74C19.4 21.2498 20.75 19.8997 20.75 18.2397V17.7997H19.6C18.09 17.7997 16.81 16.6797 16.69 15.2397C16.61 14.4197 16.91 13.6098 17.51 13.0198C18.03 12.4898 18.73 12.1998 19.48 12.1998H20.75V11.5098C20.75 9.84977 19.4 8.49976 17.74 8.49976H6.26C4.6 8.49976 3.25 9.84977 3.25 11.5098V14.5898C3.81 14.3698 4.4 14.2498 5 14.2498C7.62 14.2498 9.75 16.3798 9.75 18.9998C9.75 19.7898 9.55 20.5698 9.18 21.2498Z"/>
                     <path d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.83 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z"/>
                     <path d="M19.6005 17.8002C18.0905 17.8002 16.8105 16.6802 16.6905 15.2402C16.6105 14.4102 16.9105 13.6002 17.5105 13.0102C18.0205 12.4902 18.7205 12.2002 19.4705 12.2002H21.5505C22.5405 12.2302 23.3005 13.0102 23.3005 13.9702V16.0302C23.3005 16.9902 22.5405 17.7702 21.5805 17.8002H19.6005ZM21.5305 13.7002H19.4805C19.1305 13.7002 18.8105 13.8302 18.5805 14.0702C18.2905 14.3502 18.1505 14.7302 18.1905 15.1102C18.2505 15.7702 18.8805 16.3002 19.6005 16.3002H21.5605C21.6905 16.3002 21.8105 16.1802 21.8105 16.0302V13.9702C21.8105 13.8202 21.6905 13.7102 21.5305 13.7002Z"/>
                     <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"/>
                     <path d="M5 23.75C3.34 23.75 1.78 22.87 0.940002 21.44C0.490002 20.72 0.25 19.87 0.25 19C0.25 17.54 0.899999 16.19 2.03 15.29C2.87 14.62 3.93 14.25 5 14.25C7.62 14.25 9.75 16.38 9.75 19C9.75 19.87 9.51 20.72 9.06 21.45C8.82 21.87 8.49 22.25 8.11 22.57C7.28 23.33 6.17 23.75 5 23.75ZM5 15.75C4.26 15.75 3.56 16 2.97 16.47C2.2 17.08 1.75 18.01 1.75 19C1.75 19.59 1.91 20.17 2.22 20.67C2.81 21.67 3.85 22.25 5 22.25C5.79 22.25 6.55 21.96 7.13 21.44C7.39 21.22 7.61 20.96 7.77 20.68C8.09 20.17 8.25 19.59 8.25 19C8.25 17.21 6.79 15.75 5 15.75Z"/>
                     <path d="M6.49 19.73H3.5C3.09 19.73 2.75 19.39 2.75 18.98C2.75 18.57 3.09 18.23 3.5 18.23H6.49C6.9 18.23 7.24 18.57 7.24 18.98C7.24 19.39 6.91 19.73 6.49 19.73Z"/>
                     <path d="M5 21.26C4.59 21.26 4.25 20.92 4.25 20.51V17.52C4.25 17.11 4.59 16.77 5 16.77C5.41 16.77 5.75 17.11 5.75 17.52V20.51C5.75 20.93 5.41 21.26 5 21.26Z"/>
                  </svg>
                  <span>Donate</span>
               </Link>
            </div>
            {/* Contact */}
            <div className="flex flex-col space-y-3 basis-8/12">
               <h5 className="font-semibold text-xl">Contact</h5>
               <p className="text-gray-700">Follow up our Social Media and get the latest updates</p>
               <div className="flex flex-row space-x-4 items-center text-gray-700">
                  {/* Facebook */}
                  <Link href="https://www.facebook.com/" className="hover:text-blue-500">
                     <svg className="w-[20px] h-auto fill-current" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                     </svg>
                  </Link>

                  {/* YouTube */}
                  <Link href="https://www.youtube.com/" className="hover:text-red-500">
                     <svg className="w-[20px] h-auto fill-current" viewBox="0 0 576 512">
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                     </svg>
                  </Link>

                  {/* Instagram */}
                  <Link href="https://www.instagram.com/" className="hover:text-fuchsia-500">
                     <svg className="w-[18px] h-auto fill-current" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                     </svg>
                  </Link>

                  {/* Twitter */}
                  <Link href="https://www.twitter.com/" className="hover:text-sky-500">
                     <svg className="w-[20px] h-auto fill-current" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                     </svg>
                  </Link>

                  {/* Telegram */}
                  <Link href="https://t.me/yome" className="hover:text-sky-700">
                     <svg className="w-[20px] h-auto fill-current" viewBox="0 0 496 512">
                        <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
                     </svg>
                  </Link>

                  {/* Github */}
                  <Link href="https://github.com/ahmadhabibi14/yome" className="hover:text-gray-500">
                     <svg className="w-[20px] h-auto fill-current" viewBox="0 0 480 512">
                        <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
                     </svg>
                  </Link>
               </div>
               <Link href="mailto:info@yome.com" className="text-white bg-gradient-to-br from-sky-500 to-fuchsia-500 py-1 px-3 flex flex-row space-x-2 rounded-lg text-xs w-fit">
                  <svg className="w-[14px] h-auto fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                     <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@yome.com</span>
               </Link>
            </div>
         </div>
         <div className="border-t border-gray-400 text-center pt-8 text-xs text-gray-700">
            <p>Copyright &copy; 2020 - {year}, <span className="text-sky-600">Yome.Inc</span> All Right Reserved. Made with Love and Powered by Vercel and Next.js</p>
         </div>
      </footer>
   );
}