import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const SidebarContainer = styled.aside`
  width: 230px;
  background-color: #F2F2F2;
  border-right: 1px solid #e0e0e0;

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  font-size: 15px;
  font-weight: 700;

    background: rgb(72, 77, 90);
    color: white;
`;

export const NavItem = styled(NavLink)`
  display: block;
  padding: 0.75rem 1.85rem;
    font-size: 14px;

    color: rgb(0, 0, 0);
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
      background: rgb(227, 227, 227);
      color: rgb(0, 0, 0);
  }

  &.active {
      background: rgb(227, 227, 227);
  }
`;