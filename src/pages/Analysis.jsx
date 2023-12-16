import React from "react";
import '../styles/analysis.css';
import { useState, useEffect } from 'react';
import ModalBasic from '../components/Modal';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';




function buttonClick() {
   window.location.href = "/login";
}

function introductionClick() {
   window.location.href = "/introduction";
}

function logoClick() {
   window.location.href = "/";
}

const Analysis = () => {

   const [userName, setUserName] = useState("");

   const [chatTimes, setChatTimes] = useState("");
   const [a, seta] = useState("");
   const [b, setb] = useState("");
   const [c, setc] = useState("");
  



   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('/api/user');
            const body = await response.json();
            setUserName(body.userName);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   const renderUserName = userName ? userName + " 님" : "로그인하기";

   return (
      <div id="App">
         <div class="e71_26">
            
            <div class="e100_150"></div>
            

            <div onClick={logoClick} style={{ cursor: "pointer" }} class="e71_2"></div>
            <span class="e71_30">카카오톡</span><span class="e71_31">추억 저장소</span>
            <div class="e71_46"></div>
           
            
            <span onClick={userName ? null : buttonClick} style={userName ? null : { cursor: "pointer" }} class="e272_49">{renderUserName}</span>
            <span onClick={introductionClick} style={{ cursor: "pointer" }} class="e272_50">이용방법</span>
            <div class="e272_51"></div>
            <div class="e71_47"></div>
            <div class="e602_25"></div>
            <div class="e111_3"></div>
            <div class="e585_16"></div>
            <div class="e602_19"></div>
            <div class="e602_22"></div>
            <div class="e602_23"></div>
            <div class="e602_27"></div>
            <span class="e111_4">키워드 추출하기</span>
            <span class="e602_26">날짜</span>
            <div class="e602_30"></div>
            <div class="e602_29"></div>
            <span class="e420_4">내가 말한 횟수</span>
            <span class="e420_3">대화 횟수</span>
            <span class="e420_6">상대가 말한 횟수</span>
         </div>
         
      </div>

   );
};

export default Analysis;