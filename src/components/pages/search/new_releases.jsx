"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function NewReleases() {
   let [newReleases, setNewReleases] = useState([]);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      const accessToken = fetch("/api/spotify/access-token");
      const endpoint = "browse/new-releases?limit=6";
      fetch(`https://api.spotify.com/v1/${endpoint}`, {
         method: "GET",
         headers: {
            Authorization: `Bearer ${accessToken}`,
         }
      }).then(response => response.json()).then(responseData => {
         setNewReleases(responseData.album.items);
      }).catch(error => {
         setIsError(true);
         console.error("Error : ", err);
      });
   }, []);

   // Error handling, if fetching data from Spotify fail, return this method
   if (isError) {
      return (<div>Error....., Ini error kok</div>)
   }

   return (
      <div className="flex flex-col space-y-4">
         <h2 className="text-2xl font-bold">
            <span className="text-green-500"># </span>
            New Releases
         </h2>
         <div className="w-full flex flex-row justify-between">
            {newReleases.map(album => (
               <a key={album.id} href={album.external_urls.spotify} className="w-[160px] p-3 rounded-xl bg-gray-900 hover:bg-gray-800 flex flex-col space-y-2">
                  <Image
                     src={album.images[1].url}
                     width={400}
                     height={400}
                     title="Spotify"
                     alt="Spotify"
                     className="w-full h-auto" 
                  />
                  <p className="font-bold text-sm">{album.name}</p>
                  <p className="text-xs text-gray-300">{album.artists[0].name}</p>
               </a>
            ))}
         </div>
      </div>
   );
}