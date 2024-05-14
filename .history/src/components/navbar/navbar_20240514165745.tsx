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
    return (
        <nav className="fixed top-0 right-0 bg-gray-300
        h-screen w-[150px] z-31">
sub
        </nav>
    )
  }

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    return (
        <nav className="fixed top-0 z-30 w-screen left-0 bg-q-blue h-[100px] flex justify-between items-center
        ">

            <MobileSubMenu
            subMenuClicked={subMenuClicked}
            setSubMenuClicked={setSubMenuClicked}
            />
             <div className="relative w-full h-full flex items-center justify-end z-45
             ">
            <div onClick={handleSubmenuClick}
            className="lg:hidden  lg:w-auto flex flex-col justify-center items-center
            hover:bg-red-200 p-0 pr-7">
                    <div className="h-[3px] bg-white w-[20px] mb-1" />
                    <div className="h-[3px] bg-white w-[20px] mb-1" />
                    <div className="h-[3px] bg-white w-[20px]" />
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;