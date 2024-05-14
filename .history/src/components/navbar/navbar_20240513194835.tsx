import React from "react";






export const Navbar:React.FC = () => {

    return (
        <nav className="fixed top-0 left-0 
        h-[80px] w-screen bg-q-blue">
            <div className="relative w-[100%]
            h-[100%]">

<div className="block lg:hidden">
  <button className="flex items-center justify-center h-10 w-10">
    <div className="w-6 h-px bg-white"/div>
    <div className="w-6 h-px bg-white mt-1"></div>
    <div className="w-6 h-px bg-white mt-1"></div>
  </button>
</div>

            </div>

        </nav>
    )
}