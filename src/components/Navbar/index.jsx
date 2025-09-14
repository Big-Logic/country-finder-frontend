import { VscBookmark, VscHome, VscSettingsGear } from "react-icons/vsc";
// STYLED-COMPONENTS
import * as NB from "./NavbarStyles";

// CONPONENTS
import Logo from "../Logo";

const links = [
  { id: "1l", title: "Home", path: "/countries" },
  { id: "2l", title: "Saved countries", path: "/user/savedcountries" },
  { id: "3l", title: "Setting", path: "/setting" },
];

const Navbar = ({ action }) => {
  function handleClick() {
    if (typeof action !== "function") return;

    action();
  }

  return (
    <NB.Container>
      <Logo />
      <NB.NavItems>
        {links.map((link) => (
          <NB.NavItem key={link.id}>
            <NB.NavLink to={link.path} onClick={handleClick}>
              <NB.NavIcon>
                <VscHome />
              </NB.NavIcon>
              <NB.NavText>{link.title}</NB.NavText>
            </NB.NavLink>
          </NB.NavItem>
        ))}
      </NB.NavItems>
    </NB.Container>
  );
};

export default Navbar;
