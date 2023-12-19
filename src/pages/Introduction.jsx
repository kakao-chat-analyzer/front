import React from "react";

import '../styles/introduction.css';

function buttonClick() {
   window.location.href = "/";
}

const Introduction = () => {
   
   return (
   
      <div id="App">
         
         <div className="Introduction">
         <div className="Rectangle10"></div>
         <div onClick={buttonClick} style={{ cursor: "pointer" }} className="Rectangle4"></div>
         <div className="TextContent">
         <span>우리의 </span>
         <span>대화를 </span>
         <span>추억하자</span>
         </div>
         <div className="ImageContainer">
         <div className="Image7" src="../images/image_3"></div>
         </div>
         <div onClick={buttonClick} style={{ cursor: "pointer" }} className="TextToRemember">추억하기</div>
      </div>

      </div>

         );
};

export default Introduction;