import Image from "next/image"

export default function Section03() {
   return (
      <section className="px-44 pt-10 my-20 flex flex-row justify-between items-center space-x-10">
         <div className="basis-1/2 flex flex-col space-y-4">
            <h2 className="font-bold text-2xl">Chuaaaaks Sundel</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, natus fuga? Nostrum quisquam veritatis, dolor voluptatibus earum nemo molestias fugit vero itaque porro voluptate, consequatur sequi in eos dignissimos temporibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus blanditiis beatae itaque tempore eligendi repudiandae maiores praesentium porro voluptatem ex qui temporibus, officia minus tempora vero reprehenderit nobis corporis dignissimos.
            </p>
         </div>
         <div className="absolute w-fit right-1/2 left-1/2 flex justify-center">
            <span className="h-[300px] w-[3px] rounded-full bg-sky-600 rotate-3"></span>
         </div>
         <div className="basis-1/2 flex justify-end">
            <Image
               src="/img/components/headphone.svg"
               width={1000}
               height={1000}
               alt="Headphone"
               className="w-auto h-[370px]"
            />
         </div>
      </section>
   );
}