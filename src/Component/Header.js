import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

const Header = ({ setList }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("메뉴");

  //onChange
  const filterOnChange = (filter) => {
    setFilter(filter.target.value);
    console.log(filter.target.value);
  };
  const textOnChange = (text) => {
    setText(text.target.value);
  };

  //onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://openapi.foodsafetykorea.go.kr/api/51e39188d86c41a290b7/COOKRCP01/json/1/50${
          filter === "메뉴" ? `/RCP_NM=${text}` : `/RCP_PARTS_DTLS=${text}`
        }`
      )
      .then((data) => {
        console.log(data.data.COOKRCP01.row);
        if (data.data.COOKRCP01.row === undefined)
          alert("입력이 올바르지 않습니다.");
        else {
          setList(data.data.COOKRCP01.row);
          navigate("search/1", {
            state: {
              num: 1,
            },
          });
        }
      });
  };

  return (
    <HeaderDiv>
      <HeaderUl>
        <Logoli>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </Logoli>
        <SearchForm onSubmit={(e) => onSubmit(e)}>
          <select value={filter} onChange={(filter) => filterOnChange(filter)}>
            <option>메뉴</option>
            <option>재료</option>
          </select>
          <input value={text} onChange={(text) => textOnChange(text)} />
        </SearchForm>
        <MenuUl>
          <SideMenuCheck type="checkbox" id="a" />
          <SideMenuList>
            <SideMenuItem>로그인</SideMenuItem>
            <SideMenuItem>회원가입</SideMenuItem>
          </SideMenuList>
          <SideBackground htmlFor="a" />
          <SideMenuBtn htmlFor="a">
            <GoThreeBars />
          </SideMenuBtn>
        </MenuUl>
      </HeaderUl>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  width: 1280px;
  max-width: 90%;
`;
const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Logoli = styled.li`
  margin-right: -60px;
  margin-left: -50px;
  margin-top: -10px;
  margin-bottom: -30px;
  img {
    width: 350px;
    height: 145px;
  }
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  width: 450px;
  height: 40px;
  select {
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
  }
  input {
    padding: 5px;
    width: 90%;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;
const MenuUl = styled.ul`
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
  min-width: 166px;
  height: 100%;
  svg {
    display: none;
    font-size: 2.3rem;
  }
  @media screen and (max-width: 1000px) {
    align-items: flex-start;
  }
`;
const SideMenuList = styled.ul`
  display: flex;
  @media screen and (max-width: 1000px) {
    position: absolute;
    z-index: 1;
    top: 0;
    left: calc(100% - 150px);
    display: none;
    flex-direction: column;
    padding-top: 50px;
    width: 150px;
    height: calc(100vh - 50px);
    background-color: #5c9e3d;
  }
`;
const SideMenuItem = styled.ol`
  min-width: 85px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: translateY(10px);
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 10px 0;
  }
`;
const SideMenuBtn = styled.label`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 10px;
  display: none;
  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    display: block;
    svg {
      display: block;
    }
  }
`;
const SideBackground = styled.label`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;
const SideMenuCheck = styled.input`
  display: none;
  &:checked {
    & + ul {
      top: 0;
      left: calc(100% - 150px);
      display: block;
      & + label {
        display: block;
        & + label {
          color: white;
        }
      }
    }
  }
`;

export default Header;
