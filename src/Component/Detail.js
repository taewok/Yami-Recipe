import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.list;

  //재료
  const [ingredient, setIngredient] = useState();
  //재료 데이터 다듬기...
  useEffect(() => {
    const ingredientList = location.state.list.RCP_PARTS_DTLS.split(")").map((str)=>str.replace(/, /g, "").trim()+")");
    ingredientList.pop();
    setIngredient(ingredientList);
  }, [location.state.list.RCP_PARTS_DTLS]);

  //영양성분
  const [nutrient, setNutrient] = useState([]);
  //영양성분 데이터 다듬기...
  useEffect(() => {
    nutrient.push(location.state.list.INFO_ENG);
    nutrient.push(location.state.list.INFO_CAR);
    nutrient.push(location.state.list.INFO_PRO);
    nutrient.push(location.state.list.INFO_FAT);
    nutrient.push(location.state.list.INFO_NA);
  }, [
    location.state.list.INFO_CAR,
    location.state.list.INFO_ENG,
    location.state.list.INFO_FAT,
    location.state.list.INFO_NA,
    location.state.list.INFO_PRO,
    nutrient,
  ]);
  return (
    <DetailDiv>
      <PrevBtn onClick={() => navigate(-1)}><BsFillArrowLeftCircleFill/></PrevBtn>
      <ThumbnailDiv>
        <img src={data.ATT_FILE_NO_MK}></img>
        <p>{data.RCP_NM}</p>
      </ThumbnailDiv>
      <IngredientNutrientDiv>
        <IngredientDiv>
          <p>
            재료<span>ingredient</span>
          </p>
          <IngredientUl>
            {ingredient &&
              ingredient.map((list) => (
                <IngredientLi key={list}>{list}</IngredientLi>
              ))}
          </IngredientUl>
        </IngredientDiv>
        <NutrientDiv>
          <p>
            영양성분<span>nutrient</span>
          </p>
          <NutrientUl>
            <NutrientLi>
              <span>열량</span>
              <span>{location.state.list.INFO_ENG}Kcal</span>
            </NutrientLi>
            <NutrientLi>
              <span>탄수화물</span>
              <span>{location.state.list.INFO_CAR}g</span>
            </NutrientLi>
            <NutrientLi>
              <span>단백질</span>
              <span>{location.state.list.INFO_PRO}g</span>
            </NutrientLi>
            <NutrientLi>
              <span>지방</span>
              <span>{location.state.list.INFO_FAT}g</span>
            </NutrientLi>
            <NutrientLi>
              <span>나트륨</span>
              <span>{location.state.list.INFO_NA}mg</span>
            </NutrientLi>
          </NutrientUl>
        </NutrientDiv>
      </IngredientNutrientDiv>
      <RecipeDiv>
        <RecipeUl>
          {data.MANUAL01 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG01}></img>
              <p>{data.MANUAL01}</p>
            </RecipeLi>
          )}
          {data.MANUAL02 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG02}></img>
              <p>{data.MANUAL02}</p>
            </RecipeLi>
          )}
          {data.MANUAL03 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG03}></img>
              <p>{data.MANUAL03}</p>
            </RecipeLi>
          )}
          {data.MANUAL04 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG04}></img>
              <p>{data.MANUAL04}</p>
            </RecipeLi>
          )}
          {data.MANUAL05 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG05}></img>
              <p>{data.MANUAL05}</p>
            </RecipeLi>
          )}
          {data.MANUAL06 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG06}></img>
              <p>{data.MANUAL06}</p>
            </RecipeLi>
          )}
          {data.MANUAL07 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG07}></img>
              <p>{data.MANUAL07}</p>
            </RecipeLi>
          )}
          {data.MANUAL08 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG08}></img>
              <p>{data.MANUAL08}</p>
            </RecipeLi>
          )}
          {data.MANUAL09 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG09}></img>
              <p>{data.MANUAL09}</p>
            </RecipeLi>
          )}
          {data.MANUAL10 && (
            <RecipeLi>
              <img src={data.MANUAL_IMG10}></img>
              <p>{data.MANUAL10}</p>
            </RecipeLi>
          )}
        </RecipeUl>
      </RecipeDiv>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
 position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ThumbnailDiv = styled.div`
  p {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }
`;
const IngredientNutrientDiv = styled.div`
  width: 700px;
  padding: 0 90px;
  border-top: 2.5px solid #dfdfdf;
  border-bottom: 2.5px solid #dfdfdf;
`;
const IngredientDiv = styled.div`
  p {
    font-size: 1.3rem;
    font-weight: 600;
    span {
      font-size: 1rem;
      padding-left: 5px;
      color: #757575;
    }
  }
`;
const IngredientUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;
const IngredientLi = styled.li`
  width: 43%;
  margin-bottom: 5px;
  padding: 10px 10px;
  border-bottom: 2px solid #dfdfdf;
`;

const NutrientDiv = styled(IngredientDiv)``;
const NutrientUl = styled(IngredientUl)``;
const NutrientLi = styled(IngredientLi)`
  display: flex;
  justify-content: space-between;
`;

const RecipeDiv = styled.div``;
const RecipeUl = styled.ul`
  width: 800px;
  padding: 20px 0px;
  list-style: none;
`;
const RecipeLi = styled.li`
  display: flex;
  padding: 20px 0;
  img {
    width: 200px;
    height: 150px;
  }
  p {
    padding-left: 30px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const PrevBtn = styled.span`
  position: absolute;
  left:0;
  color:#ABABAB;
  font-size: 2.5rem;
  cursor: pointer;
  &:hover{
    color:#757575;
  }
`

export default Detail;
