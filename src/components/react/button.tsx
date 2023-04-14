import React from "react";

const Button = () => {
   function handleOnClick() {
      alert('Hello, astro');
   }
   return (
      <button onClick={handleOnClick}>Button</button>
   )
}

export default Button;