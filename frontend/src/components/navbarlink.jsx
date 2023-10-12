import { NavLink } from 'react-router-dom';

const NavBarLink = ({text, target}) => {
    return (
        <NavLink className="text-headerfooterlink hover:text-headerfooterlinkhov text-md no-underline ml-2 px-1" to={target}>{text}</NavLink>
    )
}

export default NavBarLink;