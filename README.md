# Yami Recipe

![image](https://user-images.githubusercontent.com/88264006/234482385-6aaae114-76b3-4cf0-8f23-6d1cf5bf6f22.png)
<br/>


## 사이트 소개 📓

<p>식품의약품안전처 공공데이터를 활용한 레시피 검색 사이트</p>

## Stacks :hammer:


<p><b>Environment</b></p>

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"></img>
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"></img>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></img>
<br/>

<p><b>Config</b></p>

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></img>
<br/>

<p><b>Development</b></p>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"></img>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"></img>
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"></img>
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"></img>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"></img>
<br/>

## 화면구성 :computer:

|메인화면|
|---|
|![image](https://user-images.githubusercontent.com/88264006/234268193-60ebc4dd-d267-43a6-8b69-6c15d99f5aa6.png)|

|상세페이지 화면|검색 결과화면|
|---|---|
|![image](https://user-images.githubusercontent.com/88264006/234271956-a175d07a-92d5-468d-93d3-f24f37a27b26.png)|![image](https://user-images.githubusercontent.com/88264006/234270302-a5e00992-ee26-4946-9816-89be2bfbbfc7.png)|

## 주요 기능 :bulb: 

⭐<span>메뉴 or 재료로 조리식품의 레시피를 검색</span><br/>

## 문제점 해결 ❗

1. 검색결과 리스트 화면에서 300px를 스크롤하고 레시피 상세페이지로 이동하면 300px이 그대로 스크롤 되어있다.

- 페이지 진입시 화면 스크롤을 최상단으로 올려준다.

```js
useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ]);
```



