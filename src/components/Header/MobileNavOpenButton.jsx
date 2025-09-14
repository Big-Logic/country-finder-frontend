import { VscMenu } from "react-icons/vsc";
import styled from "styled-components";
import Drawer from "../Drawer";
import Navbar from "../Navbar";

const Button = styled.button``;

const MobileNavOpenButton = () => {
  return (
    <Drawer>
      <Drawer.OpenButton>
        <VscMenu />
      </Drawer.OpenButton>
      <Drawer.ContentArea>
        <Navbar />
      </Drawer.ContentArea>
    </Drawer>
  );
};

export default MobileNavOpenButton;
