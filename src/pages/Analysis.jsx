import React from "react";
import '../styles/analysis.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation , useParams} from 'react-router-dom';
import axios from "axios";



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
   const dispatch = useDispatch();

   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const chatroomNum = searchParams.get('chatroomNum');
   const date = searchParams.get('date');

   const [userName, setUserName] = useState("");
   const [fre , setFre] = useState([]);
   const [keyWord , setKeyWord] = useState([]);
   const [isKey, setIsKey] = useState(false);



   useEffect(() => {
      const fetchData = async () => {
        try {
            console.log("a");
            const response = await fetch(`/api/analysis?date=${date}&chatroomNum=${chatroomNum}`);
            const body = await response.json();
            
            // Set the fetched data into chatroomData state
            const key = body.keyword;
            setKeyWord(key);
            console.log(key)
            setIsKey(key.length)
            const fres = body.frequently;
            setFre(fres);
            console.log(fres);
            
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [chatroomNum]);

    /* if (keyWord.length === 0){
      console.log("b");
    } */

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
   console.log("length"+keyWord.length)
   
   const keywordFunc = (e) => {
      e.preventDefault();

        let body = {
          "keyword" : keyWord
        };
   
        axios.post(`/api/analysis?date=${date}&chatroomNum=${chatroomNum}`, null, {params: body})
          .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
              window.location.href = `/analysis?date=${date}&chatroomNum=${chatroomNum}`;
            }
          });
    }
   

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
            <form id="keyword-form" onSubmit={keywordFunc}>
               {!isKey ? <button type="submit" id="key" style={{ cursor: "pointer" }}></button> : <div></div>}
            </form>
            <span class="e602_26">날짜</span>
            <span class="e420_4">내가 말한 횟수</span>
            <span class="e420_3">대화 횟수</span>
            <span class="e420_6">상대가 말한 횟수</span>
         </div>
         
      </div>

   );
};

export default Analysis;