import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavDiv>
      <MenuUl>
        <MenuItem>Menu1</MenuItem>
        <MenuItem>Menu2</MenuItem>
        <MenuItem>Menu3</MenuItem>
        <MenuItem>Menu4</MenuItem>
      </MenuUl>
    </NavDiv>
  );
};

const NavDiv = styled.nav`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: #69b645;
  border-bottom: 3px solid #ff7a00;
`;
const MenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
const MenuItem = styled.li`
  padding: 5px 0px;
  font-size: 22px;
  color: white;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: #faff00;
  }
`;

export default Nav;
