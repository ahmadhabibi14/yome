import NewReleases from "@/components/pages/search/new_releases";
const currentTime = new Date().toISOString();

export const metadata = {
   title: "Yome - Search",
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
      title: "Yome - Search",
      images: "/img/cover/default.png",
      publishedTime: currentTime,
   },
}

export default function Search() {
   return (
      <main className="px-32 mt-20 w-full">
         <NewReleases />
      </main>
   )
}