import Image from "next/image"

export default function Section02() {
   return (
      <section className="px-40 my-20 flex flex-row justify-around items-center">
         <div>
            <Image
               src="/icons/brands/amazon.svg"
               width={973}
               height={282}
               title="Amazon"
               alt="Amazon"
               className="w-auto h-[30px] grayscale cursor-pointer"
            />
         </div>
         
         <div>
            <Image
               src="/icons/brands/youtube-music.svg"
               width={973}
               height={282}
               title="youtube-music"
               alt="youtube-music"
               className="w-auto h-[30px] grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/spotify.svg"
               width={973}
               height={282}
               title="spotify"
               alt="spotify"
               className="w-auto h-[30px] grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/tiktok.svg"
               width={973}
               height={282}
               title="tiktok"
               alt="tiktok"
               className="w-auto h-[30px] grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/soundcloud.svg"
               width={973}
               height={282}
               title="soundcloud"
               alt="soundcloud"
               className="w-auto h-[30px] grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/apple-music.svg"
               width={973}
               height={282}
               title="apple-music"
               alt="apple-music"
               className="w-auto h-[30px] grayscale cursor-pointer"
            />
         </div>
      </section>
   );
}