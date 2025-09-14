import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f1f1;
  display: grid;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const NavBarContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const PageContainer = styled.div`
  /* background-color: #fff; */
  height: 100%;
  overflow: auto;
`;

export const HeaderContainer = styled.header`
  /* background-color: #f1f1f1; */
`;

export const Main = styled.main``;
