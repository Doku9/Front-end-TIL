// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "강남 고기 맛집",
    "강북 멋쟁이",
    "석촌 한강호수",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div>
        <div className="list">
          <h3> {글제목[0]} </h3>
          <p>2월 17일 발행</p>
          <hr />

          <h3> {글제목[1]} </h3>
          <p>2월 18일 발행</p>
          <hr />

          <h3> {글제목[2]} </h3>
          <p>2월 19일 발행</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
