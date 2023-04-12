import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../component/Search/Pagination";

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
  width: 80vw;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }
`;
const SearchUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;
const SearchLi = styled.li`
  display: flex;
  width: 80%;
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
  @media screen and (max-width: 1000px) {
    height: auto;
    a {
      height: 100%;
      img {
        width: 20vw;
        height: 90%;
      }
    }
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    a {
      img {
        width: 50vw;
        height: 100%;
      }
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
  @media screen and (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;
const MenuExplanationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  max-width: 100%;
  @media screen and (max-width: 1000px) {
    width: calc(100% - 20vw);
  }
  @media screen and (max-width: 640px) {
    padding: 10px 0 0 0;
    width: 100%;
  }
`;
const MenuName = styled.span`
  color: #555555;
  font-size: 1.2rem;
  font-weight: bold;
  @media screen and (max-width: 640px) {
    text-align: center;
  }
`;
const MenuMaterials = styled.p`
  color: #555555;
  @media screen and (max-width: 1000px) {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Search;
