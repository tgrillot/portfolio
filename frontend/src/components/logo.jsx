import { Link } from 'react-router-dom'

const SiteLogo = ({sitename, headshot}) => {
    return (
        <div className="mb-2 pl-2 pt-2 text-left grow">
            <div className="pr-2 self-center float-left">
                <img src={headshot} width="50rem" height="50rem" className="rounded-full border-2 border-headerfooterlink shadow-xl" />
            </div>
            <Link to="/" className="text-2xl text-headerfooterlink hover:text-headerfooterlinkhov no-underline font-sans font-bold">{sitename}</Link><br />
        </div>
    )
}

export default SiteLogo