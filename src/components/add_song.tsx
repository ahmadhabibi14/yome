import React, { useState } from "react";
import axios from "axios";

interface FormData {
   id: string;
   title: string;
   artist: string;
   album: string;
   track: number;
}

function AddSong() {
   const [formData, setFormData] = useState<FormData>({
      id: '',
      title: '',
      artist: '',
      album: '',
      track: 0,
   });
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
         const response = await axios.post("http://localhost:8080/addSong", formData, {
            headers: {
               "Content-Type": "application/json",
            },
         });
         console.log(response.data)
      } catch (error) {
         console.error(error);
      }
   };
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value}));
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
            id:
            <input className="bg-gray-950" type="text" name="id" value={formData.id} onChange={handleInputChange} />
         </label>
         <label>
            title:
            <input className="bg-gray-950" type="text" name="title" value={formData.title} onChange={handleInputChange} />
         </label>
         <label>
            artist:
            <input className="bg-gray-950" type="text" name="artist" value={formData.artist} onChange={handleInputChange} />
         </label>
         <label>
            album:
            <input className="bg-gray-950" type="text" name="album" value={formData.album} onChange={handleInputChange} />
         </label>
         <label>
            track:
            <input className="bg-gray-950" type="text" name="track" value={formData.track} onChange={handleInputChange} />
         </label>
         <button type="submit" className="bg-sky-500 py-1 px-3 rounded-xl">Submit</button>
      </form>
   )
}

export default AddSong;