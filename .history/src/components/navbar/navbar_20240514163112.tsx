import React, {useState} from "react";




const MobileSubMenu:React.FC = () => {

    return (
        <nav className="w-[270px] fixed h-screen bg-gray-200
        top-0 right-0
         z-20">

        </nav>
    )
}


export const Navbar:React.FC = () => {


    const [subMenuClicked, setSubMenuClicked]
    = useState<boolean>(false)

    return (
        <nav className="fixed top-0 left-0 h-[50px] w-[100vw] bg-q-blue z-22">
            <MobileSubMenu/>
  <div className="relative w-full h-full
  flex items-center justify-end z-45">

        <div className="lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
     <div className="h-[3px] bg-white w-[20px] mb-1" />
     <div className="h-[3px] bg-white w-[20px] mb-1" />
      <div className="h-[3px] bg-white w-[20px]" />
           </div>

           <MobileSubMenu/>
             
  </div>
</nav>
    )
}