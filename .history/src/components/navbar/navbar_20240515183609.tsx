import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    links: {
        name: string,
        // destination: string
        secondaryLinks:{
            name:string
            destination:string
        }[]
    }[]
}

interface SubMenuProps {
    subMenuClicked: boolean;
    setSubMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
    links: {
        name: string,
        // destination: string
        secondaryLinks:{
            name:string
            destination:string
        }[]
    }[]
  }

  const MobileSubMenu: React.FC<SubMenuProps>
  = ({subMenuClicked, setSubMenuClicked,links}) => {

    function handleSubMenuLeave(){
        setSubMenuClicked(false)
        console.log('button clicked')
    }

    const [secondaryLinksIndex, setSecondaryLinksIndex] =
    useState<number>(0)

    const [secondarySubMenuClicked, setSecondarySubMenuClicked] 
    = useState<boolean>(false)

    function handleSecondarySubClick(index:number){
        setSecondarySubMenuClicked(true)
        setSecondaryLinksIndex(index)
    }

    function handleSecondarySubLeave(){
        setSecondarySubMenuClicked(false)
        // setSecondaryLinksIndex(null)
    }

    function exitFullMobileNav(){
        
    }



    return (
        <nav className={`fixed top-0 right-0 bg-black
        h-screen w-[75vw] z-10 transition-transform
      ${!subMenuClicked ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="relative h-full w-full z-40 ">
            {!secondarySubMenuClicked && (
                <>
         <button onClick={handleSubMenuLeave}
         className="absolute top-[5%] right-[10%] z-[90] text-3xl
         hover:text-q-blue transition-colors bg-transparent"
         >X
         </button>
         
   
            <ul
                        className={`text-left absolute mt-8
                        top-[25%]
                          overflow-hidden transition-[height]
                          flex flex-col items-start justify-center 
                            `}>
                        {links.map((link, index) => (
                           
                                <li key={index}
                                onClick={()=>handleSecondarySubClick(index)}
                                className="text-md lg:text-lg mb-3
                                mr-auto text-white
                                
                                 pl-2 pr-2 lg:mb-0
                                 hover:text-q-blue">{link.name}</li>
                           
                        ))}
                    </ul>
                    </>

)}

                    <div className={`fixed top-0 h-full w-full transition-transform bg-black
                    ${!secondarySubMenuClicked ? 'translate-x-full': ''}`}>

                            <button className="bg-transparent
                            top-[5%] absolute left-[5%] !text-2xl
                            hover:text-q-blue">
                                X
                            </button>

                            <button onClick={handleSecondarySubLeave}
                             className="absolute top-[5%]
                             bg-transparent !text-lg hover:text-q-blue
                             transition-colors">Back</button>

                            
                                <ul className="absolute top-[25%] text-left left-[10%]
                                ">
                                {links[secondaryLinksIndex].secondaryLinks.map((link,index)=> (
                                    <Link
                                    key={index}
                                    to={link.destination}
                                    >
                                        <li className="mb-2 text-white transition-colors
                                         hover:text-q-blue">
                                            {link.name}
                                        </li>
                                    </Link>
                                ))}
                             </ul>
                               
                            
                        
                    </div>
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