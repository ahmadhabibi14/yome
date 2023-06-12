import Image from "next/image"

export default function Section01() {
   return (
      <section className="mt-28 px-32 w-full flex flex-row space-x-5">
         <div className="basis-[20%] h-auto text-sm py-4 px-6 bg-gradient-to-br from-gray-100 to-gray-100/80 border border-gray-200 rounded-xl shadow-sm cursor-pointer hover:shadow-xl hover:scale-95 duration-100">
            <h4 className="text-xl font-semibold mb-1.5 flex flex-row space-x-2">
               <svg className="w-[20px] h-auto fill-current" viewBox="0 0 24 24">
                  <path d="M20.8894 5.1786V16.4786C20.8894 18.4586 19.2794 20.0686 17.2994 20.0686C15.3294 20.0686 13.7094 18.4586 13.7094 16.4786C13.7094 14.5086 15.3294 12.8986 17.2994 12.8986C18.1394 12.8986 18.8894 13.1886 19.4994 13.6686V7.7186L10.2894 10.3386V18.4086C10.2894 20.3886 8.66937 21.9986 6.69937 21.9986C4.71937 21.9986 3.10938 20.3886 3.10938 18.4086C3.10938 16.4386 4.71937 14.8286 6.69937 14.8286C7.52938 14.8286 8.27938 15.1186 8.88938 15.5886V6.7486C8.88938 5.2786 9.77938 4.1386 11.1894 3.7586L16.9694 2.1786C18.1394 1.8586 19.1294 1.9686 19.8294 2.5086C20.5394 3.0386 20.8894 3.9386 20.8894 5.1786Z" />
               </svg>
               <span>249K+</span>
            </h4>
            <p>Thousands music that you can listen to everyday</p>
         </div>

         <div className="basis-[20%] h-auto text-sm py-4 px-6 bg-gradient-to-br from-gray-100 to-gray-100/80 border border-gray-200 rounded-xl shadow-sm cursor-pointer hover:shadow-xl hover:scale-95 duration-100">
            <h4 className="text-xl font-semibold mb-1.5 flex flex-row space-x-2">
               <svg className="w-[20px] h-auto fill-current" viewBox="0 0 24 24">
                  <path d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.1609 10.1086L11.3309 14.9386C11.1909 15.0786 11.0009 15.1586 10.8009 15.1586C10.6009 15.1586 10.4109 15.0786 10.2709 14.9386L7.85086 12.5186C7.56086 12.2286 7.56086 11.7486 7.85086 11.4586C8.14086 11.1686 8.62086 11.1686 8.91086 11.4586L10.8009 13.3486L15.1009 9.04859C15.3909 8.75859 15.8709 8.75859 16.1609 9.04859C16.4509 9.33859 16.4509 9.81859 16.1609 10.1086Z"/>
               </svg>
               <span>321K+</span>
            </h4>
            <p>Various artist that you can choose your wish</p>
         </div>

         <div className="basis-[20%] h-auto text-sm py-4 px-6 bg-gradient-to-br from-gray-100 to-gray-100/80 border border-gray-200 rounded-xl shadow-sm cursor-pointer hover:shadow-xl hover:scale-95 duration-100">
            <h4 className="text-xl font-semibold mb-1.5 flex flex-row space-x-2">
               <svg className="w-[17px] h-auto fill-current -mt-1" viewBox="0 0 512 512">
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
               </svg>
               <span>185M+</span>
            </h4>
            <p>Downloaded by Millions People</p>
         </div>

         <div className="relative overflow-hidden basis-[40%] h-32 text-sm py-4 px-6 bg-gradient-to-br from-[#2EBD59]/80 to-[#1ED760] border border-green-500 rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:scale-95 duration-100">
            <div className="absolute ml-64 pl-3">
            <Image
               src="/img/components/spotify-3d.svg"
               width={500}
               height={500}
               title="Spotify"
               alt="Spotify"
               className="w-auto h-[100px]"
            /></div>
            <div className="relative w-full flex flex-row">
               <div className="basis-8/12">
               <h4 className="text-xl font-semibold mb-1.5 flex flex-row space-x-2">
                  <svg className="w-[17px] h-auto fill-current" viewBox="0 0 496 512">
                     <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                  </svg>
                  <span>Spotify Integration</span>
               </h4>
               <p>We offer you Musics that following Spotify updates through API&apos;s</p>
               </div>
               <div className="grow"></div>
            </div>
         </div>
      </section>
   )
}