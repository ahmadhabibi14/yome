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
               className="w-auto h-[30px] hover:grayscale cursor-pointer"
            />
         </div>
         
         <div>
            <Image
               src="/icons/brands/youtube-music.svg"
               width={973}
               height={282}
               title="YouTube Music"
               alt="YouTube Music"
               className="w-auto h-[30px] hover:grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/spotify.svg"
               width={973}
               height={282}
               title="Spotify"
               alt="Spotify"
               className="w-auto h-[30px] hover:grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/tiktok.svg"
               width={973}
               height={282}
               title="TikTok"
               alt="TikTok"
               className="w-auto h-[30px] hover:grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/soundcloud.svg"
               width={973}
               height={282}
               title="Soundcloud"
               alt="Soundcloud"
               className="w-auto h-[30px] hover:grayscale cursor-pointer"
            />
         </div>

         <div>
            <Image
               src="/icons/brands/apple-music.svg"
               width={973}
               height={282}
               title="Apple Music"
               alt="Apple Music"
               className="w-auto h-[30px] hover:grayscale cursor-pointer"
            />
         </div>
      </section>
   );
}