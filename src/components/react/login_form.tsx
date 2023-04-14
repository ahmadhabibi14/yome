import React, { useState } from "react";

interface FormData {
   username:   string;
   password:   string;
}

function Login() {
   const [formData, setFormData] = useState<FormData>({
      username: "",
      password: "",
   });
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      fetch("http://localhost:8080/auth/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
         },
         body: JSON.stringify(formData),
      }).then(response => {
         console.log(response);
      }).catch(error => {
         console.error(error)
      })
   };
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value}));
   }

   return (
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
         <div className="flex flex-col space-y-2">
            <label className="text-lg">username</label>
            <input className="bg-gray-950" type="text" name="username" value={formData.username} onChange={handleInputChange} />
         </div>
         <div className="flex flex-col space-y-2">
            <label className="text-lg">username</label>
            <input className="bg-gray-950" type="password" name="password" value={formData.password} onChange={handleInputChange} />
         </div>
         <button type="submit" className="py-1 px-3 rounded-lg bg-sky-500 text-gray-900 hover:bg-sky-600">
            Login
         </button>
      </form>
   )
}

export default Login;