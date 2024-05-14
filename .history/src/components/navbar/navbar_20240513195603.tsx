import React from "react";






export const Navbar:React.FC = () => {

    return (
        <nav className="fixed top-0 left-0 h-[80px] w-screen bg-q-blue">
  <div className="relative w-full h-full
  flex items-center justify-evenly">

        <div className="lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
     <div className="h-[3px] bg-white w-[20px] mb-1" />
     <div className="h-[3px] bg-white w-[20px] mb-1" />
      <div className="h-[3px] bg-white w-[20px]" />
           </div>
             
  </div>
</nav>
    )
}