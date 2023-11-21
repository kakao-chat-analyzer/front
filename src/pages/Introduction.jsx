import React from "react";

import '../styles/introduction.css';

function buttonClick() {
   window.location.href = "/";
}

const Introduction = () => {
   
   return (
   
         <div id="App">
            
         <div class="e93_90">
            <div class="e93_96">
               <div class="e93_97"></div>
            </div>
            <div class="e114_2"></div>
            
               <div class="e114_4"></div>
               <div class="e114_5"></div>
               <div class="e114_6"></div>
               <div class="e114_7"></div>
            
            <span class="e93_100">우리의 대화를 추억하자</span>
            
            <div class="e95_139">
               <div class="e93_102"></div>
            </div>
            
            <div class="e381_5"></div>
            <span className="e42_q">카카오톡</span>
            <span className="e42_w">추억 저장소</span>
            <span className="e42_12">오승주님</span>
            <span className="e204_6">이용방법</span>
            <div className="e54_2"></div>
            <div class="e272_48"></div>
            <div onClick={buttonClick} style={{ cursor: "pointer" }} class="e272_5"></div>
         </div>

         </div>

         );
};

export default Introduction;