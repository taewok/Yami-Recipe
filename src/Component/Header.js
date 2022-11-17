import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../LOGO.png";
import { useNavigate } from "react-router-dom";
import {GoThreeBars} from "react-icons/go";

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
        setList(data.data.COOKRCP01.row);
        navigate("search/1", {
          state: {
            num: 1,
          },
        });
      });
  };

  return (
    <HeaderDiv>
      <HeaderUl>
        <Logoli>
          <img src={logo} alt="logo"></img>
        </Logoli>
        <SearchForm onSubmit={(e) => onSubmit(e)}>
          <select value={filter} onChange={(filter) => filterOnChange(filter)}>
            <option>메뉴</option>
            <option>재료</option>
          </select>
          <input value={text} onChange={(text) => textOnChange(text)} />
        </SearchForm>
        <Menuli>
          <span>로그인</span>
          <span>회원가입</span>
          <GoThreeBars/>
        </Menuli>
      </HeaderUl>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  width: 1280px;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;
const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
const Logoli = styled.li`
  margin-left: -50px;
  margin-top: -10px;
  img {
    width: 350px;
    height: 145px;
  }
`;
const SearchForm = styled.form`
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    background-color: #69b645;
  }
  select {
    position: absolute;
    padding-left: 2px;
    padding-bottom: 5px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
  }
  input {
    width: 450px;
    height: 40px;
    padding-left: 65px;
    border: 2px solid #989898;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
  }
`;
const Menuli = styled.li`
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
  span {
    font-size: 20px;
    font-weight: 700;
    margin-left: 15px;
  }
  @media screen and (max-width: 1000px) {
    position: absolute;
    left:0;
  }
`;

export default Header;
