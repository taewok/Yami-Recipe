import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "./Pagination";

const Search = ({ list }) => {
  const [currentPosts, setCurrentPosts] = useState();
  const [currentPageNumber, setCurrentPageNumber] = useState(1); //현재 페이지 번호
  const [postsPerPage, setPostsPerPage] = useState(6); //페이지당 게시물 개수

  useEffect(() => {
    const indexOfLast = currentPageNumber * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    setCurrentPosts(list.slice(indexOfFirst, indexOfLast));
  }, [currentPageNumber, list, postsPerPage]);

  return (
    <SearchDiv>
      <SearchUl>
        {currentPosts &&
          currentPosts.map((list, index) => (
            <SearchLi key={index}>
              <Link to={`detail/${list.RCP_NM}`} state={{ list }}>
                <img src={list.ATT_FILE_NO_MK} alt={list.RCP_NM}></img>
              </Link>
              <MenuExplanationDiv>
                <MenuName>{list.RCP_NM}</MenuName>
                <CookingTypeDiv>
                  <span>방법: {list.RCP_WAY2}</span>
                  <span>카테고리: {list.RCP_PAT2}</span>
                </CookingTypeDiv>
                <MenuMaterials>{list.RCP_PARTS_DTLS}</MenuMaterials>
              </MenuExplanationDiv>
            </SearchLi>
          ))}
      </SearchUl>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={list.length}
        setCurrentPageNumber={setCurrentPageNumber}
      />
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  width: 1000px;
`;
const SearchUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const SearchLi = styled.li`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 15px 20px;
  border-bottom: 2px solid #dfdfdf;
  a {
    height: 100%;
    img {
      width: 250px;
      height: 100%;
    }
  }
`;
const CookingTypeDiv = styled.div`
  display: flex;
  color: #555555;
  font-weight: bold;
  span:nth-child(1) {
    margin-right: 20px;
  }
`;
const MenuExplanationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;
const MenuName = styled.span`
  color: #555555;
  font-size: 1.2rem;
  font-weight: bold;
`;
const MenuMaterials = styled.p`
  color: #555555;
`;

export default Search;
