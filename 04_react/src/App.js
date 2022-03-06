/* eslint-disable */

// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "강남 고기 맛집",
    "강북 멋쟁이",
    "석촌 한강호수",
  ]);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div>
        <div className="list">
          <h3>
            {글제목[0]}
            <span
              onClick={() => {
                따봉변경(따봉 + 1);
              }}
            >
              👍
            </span>{" "}
            {따봉}
          </h3>
          <p>2월 17일 발행</p>
          <hr />

          <h3> {글제목[1]} </h3>
          <p>2월 18일 발행</p>
          <hr />

          <h3> {글제목[2]} </h3>
          <p>2월 19일 발행</p>
          <hr />
        </div>
        <div>
          <button onClick={제목바꾸기}>버튼</button>
        </div>
      </div>
    </div>
  );
}

export default App;
