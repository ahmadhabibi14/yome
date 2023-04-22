import React, { useState, useEffect } from "react";
import axios from "axios";

function NewReleases() {
   let [newReleases, setNewReleases] = useState([]);
   useEffect(() => {
      const token = "BQA-oF70w2wHgvSheanRp5PFyELrfAsnZNINwg6fTBTUPXXSyS9cCo_ZQa_c2wA_gmegetsslCXkumFFbj855LlHwVrd8j71MNxocr6CdnXdcSuYpLV-";
      const endpoint = "browse/new-releases?limit=6";
      const headers = {"Authorization": `Bearer ${token}`}
      axios.get(`https://api.spotify.com/v1/${endpoint}`, { headers })
         .then(response => response.data
         ).then(data =>
            setNewReleases(data.albums.items)
         ).catch(error => {
            console.error(error)
      });
   }, []);
   console.log(newReleases)
   return (
      <div className="flex flex-col space-y-4">
         <h2 className="text-2xl font-bold">
            <span className="text-green-500"># </span>
            New Releases
         </h2>
         <div className="w-full flex flex-row justify-between">
            {newReleases.map(album => (
               <a key={album.id} href={album.external_urls.spotify} className="w-[160px] p-3 rounded-xl bg-gray-900 hover:bg-gray-800 flex flex-col space-y-2">
                  <img src={album.images[1].url} className="w-full h-auto" />
                  <p className="font-bold text-sm">{album.name}</p>
                  <p className="text-xs text-gray-300">{album.artists[0].name}</p>
               </a>
            ))}
         </div>
      </div>
   )
}

export default NewReleases;