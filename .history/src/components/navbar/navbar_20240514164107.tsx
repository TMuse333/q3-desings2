import React, {useState} from "react";


interface SubMenuProps {
    subMenuClicked:boolean,
    setSubMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSubMenu:React.FC<SubMenuProps> = ({
    subMenuClicked, setSubMenuClicked
}) => {



    return (
        <nav className={`w-[270px] fixed h-screen bg-gray-200
        top-0 right-0
         z-20 ${!subMenuClicked ? 'translate-x-[100%]' : '' }`}>

        </nav>
    )
}


export const Navbar:React.FC = () => {


    const [subMenuClicked, setSubMenuClicked]
    = useState<boolean>(false)

    function handleSubMenuClick(){
        setSubMenuClicked(true)
        console.log('sub menu clicked',setSubMenuClicked)
    }

    return (
        <div className="fixed top-0 left-0 h-[50px] w-[100vw] bg-q-blue z-22">
         <button onClick={handleSubMenuClick}>
            slatty
         </button>
  <div className="relative w-full h-full
  flex items-center justify-end z-20">

        <button onClick={handleSubMenuClick}
        className="lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center
        hover:bg-red-200 z-20">
     <div className="h-[3px] bg-white w-[20px] mb-1" />
     <div className="h-[3px] bg-white w-[20px] mb-1" />
      <div className="h-[3px] bg-white w-[20px]" />
           </button>

           <MobileSubMenu
            subMenuClicked={subMenuClicked}
            setSubMenuClicked={setSubMenuClicked}
            />
             
  </div>
</div>
    )
}