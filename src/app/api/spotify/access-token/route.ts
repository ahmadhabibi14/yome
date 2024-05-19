import { NextResponse } from "next/server";

// Define client ID and client secret
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
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