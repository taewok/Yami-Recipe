import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../LOGO.png";
import { useNavigate } from "react-router-dom";
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
          <GoThreeBars />
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
    left: 0;
  }
`;

export default Header;
