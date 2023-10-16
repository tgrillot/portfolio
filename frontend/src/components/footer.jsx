import NavBarLink from "./navbarlink"
import AllButton from "./allbutton"
import SocialBar from "./socialbar"
import { useNavigate } from "react-router-dom" 


const CallToActionButton = () => {
    useNavigate()
    const pathname = window.location.pathname
    function handleCallToActionClick(url){
        window.open(url,"_self")
    }

    if (pathname !== '/contact') {
        return (
            <AllButton footer text="Contact Me Today!" OnAllButtonClick={()=>handleCallToActionClick('/contact')} />
        )
    }
}

const Footer = ({tea, hub, res, lin, up}) => {
    return (
        <>
            <div className="grid grid-cols-3 w-full bg-bgheadfoot shadow-xl place-content-center">
                <ul className="col-span-3 md:col-span-1 w-full text-center my-3">
                    <li><NavBarLink text="Home" target="/" /></li>
                    <li><NavBarLink text="Projects" target="/projects" /></li>
                    <li><NavBarLink text="Skills" target="/skills" /></li>
                </ul>
                <div className="col-span-3 md:col-span-1 px-24 my-3 md:flex flex-col text-center gap-10 content-between items-center">
                    <CallToActionButton />
                </div>
                <div className="col-span-1 hidden md:flex justify-center m-1 flex-row gap-2 items-center">
                    <SocialBar footer tea={tea} hub={hub} res={res} lin={lin} up={up}/>
                </div>
                <div className="col-span-3 w-full my-3">
                    <p className="text-headerfooterlink text-sm grow self-center text-center">&copy; 2023 - Travis Grillot</p>
                </div>

            </div>
        </>
    )
}

export default Footer