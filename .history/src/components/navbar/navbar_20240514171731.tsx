import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    links?: {
        name: string,
        destination: string
    }[]
}

interface SubMenuProps {
    subMenuClicked: boolean;
    setSubMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const MobileSubMenu: React.FC<SubMenuProps>
  = ({subMenuClicked, setSubMenuClicked}) => {

    function handleSubMenuLeave(){
        setSubMenuClicked(false)
        console.log('button clicked')
    }

    return (
        <nav className={`fixed top-0 right-0 bg-gray-300
        h-screen w-[150px] z-10 transition-transform
      ${!subMenuClicked ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="relative h-full w-full z-70">
            <p onClick={handleSubMenuLeave}
            className="absolute top-[5%] right-[5] z-[200]">X
            </p>
        </div>
        </nav>
    )
  }

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    return (
        <nav className="fixed top-0 z-50 w-screen left-0 bg-q-blue h-[100px] flex justify-between items-center
        ">

            <MobileSubMenu
            subMenuClicked={subMenuClicked}
            setSubMenuClicked={setSubMenuClicked}
            />
             <div className="relative w-full h-full flex items-center justify-end 
             ">
                {!subMenuClicked && (
    <div onClick={handleSubmenuClick}
    className="lg:hidden  lg:w-auto flex flex-col justify-center items-center
    hover:bg-red-200 p-0 pr-7">
            <div className="h-[3px] bg-white w-[20px] mb-1" />
            <div className="h-[3px] bg-white w-[20px] mb-1" />
            <div className="h-[3px] bg-white w-[20px]" />
        </div>
                )}
        
            </div>
            
        </nav>
    );
};

export default Navbar;