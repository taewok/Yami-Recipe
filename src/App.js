import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Detail from "./page/Detail";
import Header from "./Component/Header";
import Home from "./page/Home";
import Nav from "./Component/Nav";
import Search from "./page/Search";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const [list, setList] = useState();

  return (
    <MainGrid>
      <GlobalStyle />
      <Header setList={setList} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/*" element={<Search list={list} />} />
        <Route path="search/detail/*" element={<Detail />} />
      </Routes>
    </MainGrid>
  );
}

const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export default App;
