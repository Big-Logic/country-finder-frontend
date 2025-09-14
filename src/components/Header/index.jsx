import * as H from "./HeaderStyles";

import Logo from "../Logo";
import AccountPopover from "./AccountPopover";
import MobileNavOpenButton from "./MobileNavOpenButton";

const Header = () => {
  return (
    <H.Container>
      <H.MobileItem>
        <Logo />
      </H.MobileItem>
      <H.HeaderItems>
        <H.DesktopItem>
          <AccountPopover />
        </H.DesktopItem>
        <H.MobileItem>
          <MobileNavOpenButton />
        </H.MobileItem>
      </H.HeaderItems>
    </H.Container>
  );
};

export default Header;
