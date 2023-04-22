import { useState, useRef, ReactElement, FC, FormEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '@/components/react/inputs/text-field'
import type { TAuthCredential } from './types'
import { AuthService } from './services'

export const LoginModules: FC = (): ReactElement => {
   const [showPass, setShowPass] = useState(false)

   const { control, handleSubmit } = useForm<TAuthCredential>({
      defaultValues: {
         username: '',
         password: '',
      },
   })

   const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(
      async (data) => {
         await AuthService.Login(data)
      }
   )

   return (
      <form className="flex flex-col space-y-6" onSubmit={onSubmit}>
         <div className="flex flex-col space-y-4">
            <TextField
               control={control}
               name={'username'}
               placeholder="Username"
               type={'text'}
            />
            <TextField
               control={control}
               name={'password'}
               placeholder="Password"
               type={'password'}
            />
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
