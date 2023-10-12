import NavBarLink from "./navbarlink";
import SiteLogo from "./logo";

const NavBar = ({sitename, headshot}) => {
  return (
    <nav className="flex flex-row flex-wrap content-center text-left md:py-2 md:px-6 bg-bgheadfoot drop-shadow-lg items-baseline w-full">
      <SiteLogo sitename={sitename} headshot={headshot} />
      <ul className="flex flex-col md:flex-row">
          <li><NavBarLink text="Home" target="/" /></li>
          <li><NavBarLink text="Projects" target="/projects" /></li>
          <li><NavBarLink text="Skills" target="/skills" /></li>
          <li><NavBarLink text="Contact" target="/contact" /></li>
      </ul>
    </nav>
  );
};

export default NavBar;