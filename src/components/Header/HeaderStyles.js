import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto 1fr;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  padding: 1.5rem 2rem;
`;

export const MobileItem = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const DesktopItem = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
