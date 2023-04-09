import React from "react";

function SideHome() {
   return (
      <aside className="basis-[30%] bg-gray-900 rounded-xl py-2 flex flex-col space-y-2">
			<header className="font-medium text-lg w-full pb-2 border-b border-gray-700 flex flex-row justify-center items-center space-x-1.5">	
				<svg viewBox="0 0 24 24" className="w-[17px] h-auto fill-green-500">
					<path d="M7.99935 21.75C7.96935 21.75 7.93935 21.75 7.91935 21.75C7.50935 21.7 7.20935 21.33 7.25935 20.92L9.25935 2.92003C9.30935 2.51003 9.67935 2.22003 10.0894 2.26003C10.4994 2.31003 10.7994 2.68003 10.7494 3.09003L8.74935 21.09C8.69935 21.47 8.37935 21.75 7.99935 21.75Z"/>
					<path d="M13.9994 21.75C13.9694 21.75 13.9394 21.75 13.9194 21.75C13.5094 21.7 13.2094 21.33 13.2594 20.92L15.2594 2.92003C15.3094 2.51003 15.6694 2.22003 16.0894 2.26003C16.4994 2.31003 16.7994 2.68003 16.7494 3.09003L14.7494 21.09C14.6994 21.47 14.3794 21.75 13.9994 21.75Z"/>
					<path d="M21.5 9.75H3.5C3.09 9.75 2.75 9.41 2.75 9C2.75 8.59 3.09 8.25 3.5 8.25H21.5C21.91 8.25 22.25 8.59 22.25 9C22.25 9.41 21.91 9.75 21.5 9.75Z"/>
					<path d="M20.5 15.75H2.5C2.09 15.75 1.75 15.41 1.75 15C1.75 14.59 2.09 14.25 2.5 14.25H20.5C20.91 14.25 21.25 14.59 21.25 15C21.25 15.41 20.91 15.75 20.5 15.75Z"/>
				</svg>									 
				<span className="mt-0.5">Trending</span>
			</header>
			<section className="px-4 text-sm">
				Song will appear here later...
			</section>
		</aside>
   );
}

export default SideHome;