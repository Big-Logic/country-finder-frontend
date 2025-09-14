import { Outlet } from "react-router";

import * as AL from "./AppLayoutStyles";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

const AppLayout = function () {
  return (
    <AL.Container>
      <AL.NavBarContainer>
        <Navbar />
      </AL.NavBarContainer>
      <AL.PageContainer>
        <AL.HeaderContainer>
          <Header />
        </AL.HeaderContainer>
        <AL.Main>
          <Outlet />
        </AL.Main>
      </AL.PageContainer>
    </AL.Container>
  );
};

export default AppLayout;
