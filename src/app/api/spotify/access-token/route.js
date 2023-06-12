import { NextResponse } from "next/server";

// Define client ID and client secret
const client_id = "78a4f4ce43c5466e8c26cb6c73f0cfb4";
const client_secret = "c42c0521910d45c1bc1a094467a4614c";
const url = "https://accounts.spotify.com/api/token";

export async function GET() {
   const searchParams = new URLSearchParams();
   searchParams.append("grant_type", "client_credentials");

   const response = await fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
         Authorization: `Basic ${btoa(client_id+':'+client_secret)}`,
		},
      body: searchParams,
   });

   const { access_token } = await response.json();
   return NextResponse.json(access_token)
}