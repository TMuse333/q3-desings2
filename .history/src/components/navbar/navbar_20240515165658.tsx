import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    links: {
        name: string,
        destination: string
    }[]
}

interface SubMenuProps {
    subMenuClicked: boolean;
    setSubMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
    links: {
        name: string,
        destination: string
    }[]
  }

  const MobileSubMenu: React.FC<SubMenuProps>
  = ({subMenuClicked, setSubMenuClicked,links}) => {

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
            className="absolute top-[5%] left-[10%] z-[200]">X
            </p>
            <ul
                        className={`text-left  fixed right-[5%] top-[70px] overflow-hidden transition-[height] flex flex-col items-start justify-center rounded-lg w-[140px] lg:bg-transparent lg:w-auto lg:relative lg:overflow-auto lg:top-auto lg:right-auto lg:flex-row `}
                    >
                        {links.map((link, index) => (
                            <Link key={index} to={link.destination}>
                                <li className="text-xs lg:text-lg mb-2
                                mr-auto
                                mt-5
                                 pl-2 pr-2 lg:mb-0
                                 hover:text-red-400 ">{link.name}</li>
                            </Link>
                        ))}
                    </ul>
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
            links={links}
            />
             <div className="relative w-full h-full flex items-center justify-end 
             ">
                {!subMenuClicked && (
    <div onClick={handleSubmenuClick}
    className="lg:hidden  lg:w-auto flex flex-col justify-center items-center
     p-0 pr-7">
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