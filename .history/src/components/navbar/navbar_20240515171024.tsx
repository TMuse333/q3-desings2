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

    const [secondarySubMenuClicked, setSecondarySubMenuClicked] 
    = useState<boolean>(false)

    function handleSecondarySubClicked

    return (
        <nav className={`fixed top-0 right-0 bg-gray-300
        h-screen w-[75vw] z-10 transition-transform
      ${!subMenuClicked ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="relative h-full w-full z-70 ">
            <p onClick={handleSubMenuLeave}
            className="absolute top-0 right-[10%] z-[200] text-3xl">X
            </p>
            <ul
                        className={`text-left relative mt-8
                          overflow-hidden transition-[height]
                          flex flex-col items-start justify-center 
                            `}
                    >
                        {links.map((link, index) => (
                            <Link key={index} to={link.destination}>
                                <li className="text-sm lg:text-lg mb-3
                                mr-auto
                                
                                 pl-2 pr-2 lg:mb-0
                                 hover:text-red-400 ">{link.name}</li>
                            </Link>
                        ))}
                    </ul>
        </div>
        </nav>
    )
  }

  const MobileSubMenu2: React.FC<SubMenuProps>
  = ({subMenuClicked, setSubMenuClicked,links}) => {

    function handleSubMenuLeave(){
        setSubMenuClicked(false)
        console.log('button clicked')
    }

    return (
        <nav className={`fixed top-0 right-0 bg-gray-300
        h-screen w-[75vw] z-10 transition-transform
      ${!subMenuClicked ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="relative h-full w-full z-70 ">
            <p onClick={handleSubMenuLeave}
            className="absolute top-0 right-[10%] z-[200] text-3xl">X
            </p>
            <ul
                        className={`text-left relative mt-8
                          overflow-hidden transition-[height]
                          flex flex-col items-start justify-center 
                            `}
                    >
                        {links.map((link, index) => (
                            <Link key={index} to={link.destination}>
                                <li className="text-sm lg:text-lg mb-3
                                mr-auto
                                
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