import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, setCurrentPageNumber }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pageNumbers = [];
  //총 게시물 개수와 페이지당 보여질 개수를 나누어 총페이지 수를 구한다(Math.ceil를 사용하여 결과에 반올림)
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClick = (list)=>{
    setCurrentPageNumber(list);
    navigate(`${list}`,{state:{
      num:list
    }})
  }

  //사용자가 이전 버튼을 눌러 첫 렌더링시 url주소에 num을 가져와 페이지 번호에 알맞은 데이터 리스를 출력
  useEffect(()=>{
    console.log(location.state.num)
    setCurrentPageNumber(location.state.num);
  },[location.state.num, setCurrentPageNumber])

  return (
    <PaginationDiv>
        <PaginationUl>
        {pageNumbers.map((list) => (
        <PaginationLl key={list} onClick={()=>onClick(list)}>{list}</PaginationLl>
      ))}
        </PaginationUl>
    </PaginationDiv>
  );
};

const PaginationDiv = styled.div`
    display:flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 50px;
`
const PaginationUl = styled.ul`
    display:flex;
    padding:0;
    list-style: none;
`
const PaginationLl = styled.li`
    margin:0 10px;
    padding:0 10px;
    font-size: 20px;
    cursor: pointer;
`

export default Pagination;
