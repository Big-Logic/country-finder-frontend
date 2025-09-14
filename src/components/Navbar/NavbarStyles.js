import { NavLink as ReactRouterNavLink } from "react-router";
import styled from "styled-components";

export const Container = styled.nav``;

export const NavItems = styled.ul`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavItem = styled.li``;

export const NavLink = styled(ReactRouterNavLink)`
  display: block;
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  color: #777;

  &.active {
    color: black;
  }
`;

export const NavIcon = styled.span``;
export const NavText = styled.span``;
