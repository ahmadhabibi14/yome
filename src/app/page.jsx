import Heading from "@/components/pages/home/heading";
const currentTime = new Date().toISOString();

export const metadata = {
   title: "Yome - Listen your fantastic audio",
   description: "A Portal to get your favorite music",
   generator: "Next.js",
   applicationName: "Yome",
   referrer: "origin-when-cross-origin",
   keywords: ["Spotify", "Music"],
   authors: [{ name: "Ahmad Habibi", url: "https://habibi2004.pages.dev" }],
   creator: "Yome.Inc",
   publisher: "Yome.Inc",
   icons: {
      icon: "/favicons/favicon.svg",
   },
   openGraph: {
      title: "Yome - Listen your fantastic audio",
      images: "/img/cover/default.png",
      publishedTime: currentTime,
   },
}

export default function Home() {
   return (
      <main className="w-full mt-20">
         <Heading />
      </main>
   )
}
