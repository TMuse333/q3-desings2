import React, {useState} from "react";




const MobileSubMenu:React.FC = () => {

    return (
        <nav className="w-[270px] h-screen bg-red-200
         z-25">
slatty
        </nav>
    )
}


export const Navbar:React.FC = () => {



    return (
        <nav className="relative top-0  h-[50px] w-screen bg-red-200 z-45">
  <div className="relative w-full h-full
  flex items-center justify-end z-45">

        <div className="lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
     <div className="h-[3px] bg-white w-[20px] mb-1" />
     <div className="h-[3px] bg-white w-[20px] mb-1" />
      <div className="h-[3px] bg-white w-[20px]" />
           </div>

           {/* <MobileSubMenu/> */}
             
  </div>
</nav>
    )
}