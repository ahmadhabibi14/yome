import React, { useState, useRef } from 'react'

function Login() {
   const [showPass, setShowPass] = useState(false)
   const userName: any = useRef(null)
   const passWord: any = useRef(null)

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = {
         username: userName.current.value,
         password: passWord.current.value,
      }
      fetch('http://localhost:8080/auth/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type, Cookie',
         },
         body: JSON.stringify(formData),
      })
         .then((response) =>
            /*{
         const sessionCookie = response.headers.get('Set-Cookie');
         console.log(sessionCookie);
      }*/ response.json()
         )
         .then((data) => {
            console.log(data)
         })
         .catch((error) => {
            console.error(error)
         })
   }
   // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   //    const {name, value} = event.target;
   //    setFormData((prevState) => ({ ...prevState, [name]: value}));
   // }

   return (
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
         <div className="flex flex-col space-y-4">
            <input
               className="border border-gray-700 focus:border-blue-500 caret-blue-500 rounded-xl py-2.5 px-4 outline-0 bg-gray-900"
               placeholder="Username"
               type="text"
               name="username"
               autoComplete="off"
               ref={userName}
            />
            <div className="flex flex-row items-center w-full relative">
               <input
                  className="grow bg-transparent border border-gray-700 focus:border-blue-500 caret-blue-500 rounded-xl py-2.5 px-4 outline-0"
                  placeholder="Password"
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  autoComplete="off"
                  ref={passWord}
               />
               <button
                  type="button"
                  title={!showPass ? 'Show Password' : 'Hide password'}
                  className="absolute right-0 top-0 p-3 h-full"
                  onClick={() => setShowPass(!showPass)}
               >
                  <svg
                     viewBox="0 0 24 24"
                     className={
                        !showPass
                           ? 'fill-gray-600 hover:fill-sky-500 w-[24px] h-auto block'
                           : 'fill-gray-600 hover:fill-sky-500 w-[24px] h-auto hidden'
                     }
                  >
                     <path d="M11.9999 16.3299C9.60992 16.3299 7.66992 14.3899 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C14.3899 7.66992 16.3299 9.60992 16.3299 11.9999C16.3299 14.3899 14.3899 16.3299 11.9999 16.3299ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 13.5599 10.4399 14.8299 11.9999 14.8299C13.5599 14.8299 14.8299 13.5599 14.8299 11.9999C14.8299 10.4399 13.5599 9.16992 11.9999 9.16992Z" />
                     <path d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 8.99998C4.70008 5.17998 8.25008 2.97998 12.0001 2.97998C15.7501 2.97998 19.3001 5.17998 21.7401 8.99998C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.47998C8.77008 4.47998 5.68008 6.41998 3.52008 9.80998C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.80998C18.3201 6.41998 15.2301 4.47998 12.0001 4.47998Z" />
                  </svg>
                  <svg
                     className={
                        showPass
                           ? 'fill-gray-600 hover:fill-sky-500 w-[24px] h-auto block'
                           : 'fill-gray-600 hover:fill-sky-500 w-[24px] h-auto hidden'
                     }
                  >
                     <path d="M9.46992 15.2799C9.27992 15.2799 9.08992 15.2099 8.93992 15.0599C8.11992 14.2399 7.66992 13.1499 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C13.1499 7.66992 14.2399 8.11992 15.0599 8.93992C15.1999 9.07992 15.2799 9.26992 15.2799 9.46992C15.2799 9.66992 15.1999 9.85992 15.0599 9.99992L9.99992 15.0599C9.84992 15.2099 9.65992 15.2799 9.46992 15.2799ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 12.4999 9.29992 12.9799 9.53992 13.3999L13.3999 9.53992C12.9799 9.29992 12.4999 9.16992 11.9999 9.16992Z" />
                     <path d="M5.59984 18.51C5.42984 18.51 5.24984 18.45 5.10984 18.33C4.03984 17.42 3.07984 16.3 2.25984 15C1.19984 13.35 1.19984 10.66 2.25984 8.99998C4.69984 5.17998 8.24984 2.97998 11.9998 2.97998C14.1998 2.97998 16.3698 3.73998 18.2698 5.16998C18.5998 5.41998 18.6698 5.88998 18.4198 6.21998C18.1698 6.54998 17.6998 6.61998 17.3698 6.36998C15.7298 5.12998 13.8698 4.47998 11.9998 4.47998C8.76984 4.47998 5.67984 6.41998 3.51984 9.80998C2.76984 10.98 2.76984 13.02 3.51984 14.19C4.26984 15.36 5.12984 16.37 6.07984 17.19C6.38984 17.46 6.42984 17.93 6.15984 18.25C6.01984 18.42 5.80984 18.51 5.59984 18.51Z" />
                     <path d="M12.0006 21.02C10.6706 21.02 9.37055 20.75 8.12055 20.22C7.74055 20.06 7.56055 19.62 7.72055 19.24C7.88055 18.86 8.32055 18.68 8.70055 18.84C9.76055 19.29 10.8706 19.52 11.9906 19.52C15.2206 19.52 18.3106 17.58 20.4706 14.19C21.2206 13.02 21.2206 10.98 20.4706 9.81C20.1606 9.32 19.8205 8.85 19.4606 8.41C19.2006 8.09 19.2506 7.62 19.5706 7.35C19.8906 7.09 20.3605 7.13 20.6306 7.46C21.0206 7.94 21.4006 8.46 21.7406 9C22.8006 10.65 22.8006 13.34 21.7406 15C19.3006 18.82 15.7506 21.02 12.0006 21.02Z" />
                     <path d="M12.6896 16.2701C12.3396 16.2701 12.0196 16.0201 11.9496 15.6601C11.8696 15.2501 12.1396 14.8601 12.5496 14.7901C13.6496 14.5901 14.5696 13.6701 14.7696 12.5701C14.8496 12.1601 15.2396 11.9001 15.6496 11.9701C16.0596 12.0501 16.3296 12.4401 16.2496 12.8501C15.9296 14.5801 14.5496 15.9501 12.8296 16.2701C12.7796 16.2601 12.7396 16.2701 12.6896 16.2701Z" />
                     <path d="M1.99945 22.75C1.80945 22.75 1.61945 22.68 1.46945 22.53C1.17945 22.24 1.17945 21.76 1.46945 21.47L8.93945 14C9.22945 13.71 9.70945 13.71 9.99945 14C10.2895 14.29 10.2895 14.77 9.99945 15.06L2.52945 22.53C2.37945 22.68 2.18945 22.75 1.99945 22.75Z" />
                     <path d="M14.5307 10.2199C14.3407 10.2199 14.1507 10.1499 14.0007 9.99994C13.7107 9.70994 13.7107 9.22994 14.0007 8.93994L21.4707 1.46994C21.7607 1.17994 22.2407 1.17994 22.5307 1.46994C22.8207 1.75994 22.8207 2.23994 22.5307 2.52994L15.0607 9.99994C14.9107 10.1499 14.7207 10.2199 14.5307 10.2199Z" />
                  </svg>
               </button>
            </div>
            <div className="text-sm px-3 text-gray-200 w-full flex flex-row justify-between">
               <label className="flex flex-row space-x-2">
                  {/* <input className="accent-sky-500" type="checkbox" name="remember_me"/> */}
                  <p>Remember me</p>
               </label>
               <a
                  href="/forgot-password"
                  className="text-sky-500 hover:underline"
               >
                  Forgot password?
               </a>
            </div>
            <button
               type="submit"
               className="text-lg font-semibold py-2 rounded-xl bg-blue-600 text-gray-50 hover:bg-blue-500"
            >
               Login
            </button>
            <div className="text-sm flex flex-row w-full items-center space-x-2 py-3">
               <span className="h-px grow bg-gray-700"></span>
               <p>or continue with</p>
               <span className="h-px grow bg-gray-700"></span>
            </div>
            <div className="flex flex-row space-x-3 text-sm">
               <button className="py-2 hover:border-blue-500 hover:bg-blue-400/10 basis-1/2 flex flex-row justify-center items-center space-x-2 rounded-xl border border-gray-700">
                  <img
                     src="/img/logo/brands/google.svg"
                     className="w-[15px] h-auto"
                  />
                  <p>Google</p>
               </button>
               <button className="py-2 hover:border-blue-500 hover:bg-blue-400/10 basis-1/2 flex flex-row justify-center items-center space-x-2 rounded-xl border border-gray-700">
                  <img
                     src="/img/logo/brands/facebook.svg"
                     className="w-[20px] h-auto"
                  />
                  <p>Facebook</p>
               </button>
            </div>
         </div>
         <p className="text-center text-sm">
            Don't have an account yet?{' '}
            <a
               href="/register"
               className="text-sky-500 hover:underline cursor-pointer"
            >
               Register
            </a>
         </p>
      </form>
   )
}

export default Login
