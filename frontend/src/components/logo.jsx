import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom" 
import Headshot from './headshot'
import Tagline from './tagline'

const SiteLogo = ({sitename, headshot, taglines}) => {
    useNavigate()

    const pathname = window.location.pathname
    return (
        <>
            <div className="mb-2 pl-2 pt-2 text-left grow">
                <div className={`pr-2 self-center float-left ${pathname === '/' ? "md:hidden" : ""}`}>
                    <Headshot headshot={headshot} width="50rem" height="50rem" nav />
                </div>
                <Link to="/" className={`text-2xl text-headerfooterlink hover:text-headerfooterlinkhov no-underline font-sans font-bold ${pathname === '/' ? "md:leading-14 md:text-4xl" : "md:text-2xl"}`}>{sitename}</Link><br />
                <div className={`${pathname === '/' ? "md:hidden" : ""}`}>
                    <Tagline taglines={taglines} nav />
                </div>
            </div>
        </>
    )
}

export default SiteLogo