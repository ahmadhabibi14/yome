"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function NewReleases() {
   let [newReleases, setNewReleases] = useState([]);
   const [accessToken, setAccessToken] = useState("");
   const [isError, setIsError] = useState(false);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
         try {
            const resp = await fetch("/api/spotify/access-token")
            const data = await resp.json()
            setAccessToken(data);

            if (accessToken) {
               const endpoint = "browse/new-releases?limit=12";
               const spotifyResp = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
                  method: "GET",
                  headers: {
                     Authorization: `Bearer ${accessToken}`,
                  }
               })
               const spotifyData = await spotifyResp.json()
               console.log(spotifyData)
               setNewReleases(spotifyData.albums.items)
            }
         } catch {
            setIsError(true)
         }
      }
      fetchData();
      setLoading(false);
   }, [accessToken]);

   // Error handling, if fetching data from Spotify fail, return this method
   if (isError) {
      return (<div>Error....., Ini error kok</div>)
   }

   if (loading) {
      return (<p>Loading....</p>)
   } else {
      return (
         <div className="flex flex-col space-y-4 mt-6">
            <h2 className="text-2xl font-bold">
               <span className="text-green-500"># </span>
               New Releases
            </h2>
            <div className="w-full grid grid-cols-6 grid-flow-row gap-4">
               {newReleases.map(album => (
                  <a key={album.id} href={album.external_urls.spotify}
                     className="w-[150px] flex flex-col space-y-2 ">
                     <Image
                        src={album.images[0].url}
                        width={600}
                        height={600}
                        title="Spotify"
                        alt="Spotify"
                        className="w-full h-auto rounded-lg shadow-md border border-gray-200"
                     />
                     <p className="font-bold text-sm">{album.name}</p>
                     <p className="text-xs text-gray-700">{album.artists[0].name}</p>
                  </a>
               ))}
            </div>
         </div>
      )
   }
}