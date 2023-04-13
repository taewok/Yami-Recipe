import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.list;

  //레시피 방법 리스트 배열
  const [recipeList, setRecipeList] = useState([]);
  //레시피 방법 리스트 state에 넣기
  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      if (
        eval(`data.MANUAL0${i}`) !== undefined &&
        eval(`data.MANUAL0${i}`) !== ""
      ) {
        recipeList.push(eval(`data.MANUAL0${i}`));
      } else break;
    }
  }, []);

  //재료
  const [ingredient, setIngredient] = useState();
  //재료 데이터 다듬기...
  useEffect(() => {
    const ingredientList = location.state.list.RCP_PARTS_DTLS.split(")").map(
      (str) => str.replace(/, /g, "").trim() + ")"
    );
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
      <PrevBtn onClick={() => navigate(-1)}>
        <BsFillArrowLeftCircleFill />
      </PrevBtn>
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
          {recipeList &&
            recipeList.map((value, index) => (
              <RecipeLi key={index}>
                <img
                  src={eval(`data.MANUAL_IMG0${index + 1}`)}
                  alt={`${index + 1}`}
                ></img>
                <p>{value}</p>
              </RecipeLi>
            ))}
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
  width: 100%;
`;
const ThumbnailDiv = styled.div`
  width: 550px;
  img {
    max-width: 100%;
  }
  p {
    padding: 15px 0;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;
const IngredientNutrientDiv = styled.div`
  width: 700px;
  padding: 30px 90px;
  border-top: 2.5px solid #dfdfdf;
  border-bottom: 2.5px solid #dfdfdf;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;
const IngredientDiv = styled.div`
  width: 100%;
  p {
    font-size: 1.3rem;
    font-weight: 600;
    span {
      font-size: 1rem;
      padding-left: 5px;
      color: #757575;
    }
  }
  @media screen and (max-width: 640px) {
    p {
      text-align: center;
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
  @media screen and (max-width: 1000px) {
    width: 40%;
  }
`;

const NutrientDiv = styled(IngredientDiv)`
  padding-top: 30px;
`;
const NutrientUl = styled(IngredientUl)``;
const NutrientLi = styled(IngredientLi)`
  display: flex;
  justify-content: space-between;
`;

const RecipeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const RecipeUl = styled.ul`
  padding: 20px 20px;
  list-style: none;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 350px;
      height: auto;
    }
    p {
      padding: 15px 0;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 640px) {
    img {
      width: 80%;
      height: auto;
    }
  }
`;

const PrevBtn = styled.span`
  position: absolute;
  left: 10vw;
  color: #ababab;
  font-size: 2.5rem;
  cursor: pointer;
  &:hover {
    color: #757575;
  }
  @media screen and (max-width: 1000px) {
    left: 7vw;
    top: -47px;
  }
`;

export default Detail;
