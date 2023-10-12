import { useState } from "react";
import NavBarLink from "./navbarlink";
import SiteLogo from "./logo";
import Themer from "./themer";
import Burger from "./burger";

const NavBar = ({sitename, headshot, taglines, windowSize}) => {
    const [showMenu, setShowMenu]  = useState(windowSize.matches ? true : false)
    
    function handleBurgerClick() {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <nav className="flex flex-row flex-wrap content-center text-left md:py-2 md:px-6 bg-bgheadfoot drop-shadow-lg items-baseline w-full">
                <SiteLogo sitename={sitename} headshot={headshot} taglines={taglines} />
                <Burger onBurgerClick={handleBurgerClick} />
                <div className={`mb-0 self-center flex flex-row basis-full justify-center gap-8 grow md:basis-1/2 md:justify-end md:gap-0 pb-2 md:pb-0 ${showMenu ? "" : "hidden"}`}>
                    <ul className="flex flex-col md:flex-row">
                        <li><NavBarLink text="Home" target="/" /></li>
                        <li><NavBarLink text="Projects" target="/projects" /></li>
                        <li><NavBarLink text="Skills" target="/skills" /></li>
                        <li><NavBarLink text="Contact" target="/contact" /></li>
                    </ul>
                    <Themer />
                </div>
            </nav>
        </>
    );
};

export default NavBar;