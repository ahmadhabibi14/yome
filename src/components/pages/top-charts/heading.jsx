"use client"
import { useEffect } from "react";

export default function Heading() {
   const name = "Habibi"
   useEffect(() => {
      if (name != "Habi") {
         const error = new Error("Error Habi");
         throw error;
      }
   })

   return (
      <div>
         {name} eihe0he8rhwhdusy
      </div>
   )
}