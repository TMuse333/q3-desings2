import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    links?: {
        name: string,
        destination: string
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    return (
        <nav className="fixed top-0 z-40 w-screen left-0 bg-blue-200 h-[100px] flex justify-between items-center
        ">
            
        </nav>
    );
};

export default Navbar;