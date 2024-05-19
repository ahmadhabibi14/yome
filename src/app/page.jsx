const currentTime = new Date().toISOString();

export const metadata = {
  title: "Yome - Listen your fantastic audio",
  description: "A Portal to get your favorite music",
  generator: "Next.js",
  applicationName: "Yome",
  referrer: "origin-when-cross-origin",
  keywords: ["Spotify", "Music"],
  authors: [{ name: "Ahmad Habibi", url: "https://habibi2004.pages.dev" }],
  creator: "Ahmad Habibi",
  publisher: "Ahmad Habibi",
  icons: {
    icon: "/favicons/favicon.svg",
  },
  openGraph: {
    title: "Yome",
    images: "/img/cover/default.png",
    publishedTime: currentTime,
  },
};

export default function Home() {
  return (
    <main className="w-full mt-20">
      <h2>Hello</h2>
    </main>
  );
}
