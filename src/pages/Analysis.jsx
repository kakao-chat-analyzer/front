import React from "react";
import '../styles/analysis.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation , useParams} from 'react-router-dom';
import axios from "axios";
import anychart from 'anychart';




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

   const [dailyData, setdailyData] = useState([]);

   const [messages, setMessages] = useState([]);
   const [users, setUsers] = useState([]);


   useEffect(() => {
      const fetchData = async () => {
        try {
            console.log("a");
            const response = await fetch(`/api/analysis?date=${date}&chatroomNum=${chatroomNum}`);
            const body = await response.json();
            
            // Set the fetched data into chatroomData state
            const { dailyMessages, dailyUser } = body;

        // Set messages and users state with fetched data
            setMessages(dailyMessages);
            setUsers(dailyUser);
            
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
   
   const [buttonClick, setButtonClick] = useState(false);

   const keywordFunc = (e) => {
      setButtonClick(true);
      setIsKey(!isKey);
      e.preventDefault();
   
        axios.post(`/api/keyword?date=${date}&chatroomNum=${chatroomNum}`)
          .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
               // 워드 클라우드
               setButtonClick(false);
              window.location.href = `/analysis?date=${date}&chatroomNum=${chatroomNum}`;
            }
          });
    }
    console.log("KETWORD")
    console.log(keyWord)
    const data = keyWord.map((keyword_data, index) => {
      // let randomValue = Math.floor(Math.random() * (590000000 - 422000000 + 1)) + 422000000;
      const randomValue = 800 - index*100
      // const categories = ['Sino-Tibetan', 'Indo-European', 'Afro-Asiatic'];
      const categories = [
         'Sino-Tibetan',
         'Indo-European',
         'Afro-Asiatic',
         'Niger-Congo',
         'Austronesian',
         'Dravidian',
         'Turkic',
         'Uralic',
         'Semitic',
         'Japonic',
         'Koreanic',
         'Sino-Austronesian',
         'Kra-Dai',
         'Paleosiberian',
         'Constructed',
         'Isolate',
         'Other',
       ];
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
      return {
        x: keyword_data,
        value: randomValue,
        category: randomCategory,
      };
    });
    
    const TagCloudChart = ({ data }) => {
      const chartContainerRef = useRef(null);
      useEffect(() => {
        anychart.onDocumentReady(function () {
         if (chartContainerRef.current) {
            chartContainerRef.current.innerHTML = '';
          }
          const chart = anychart.tagCloud(data);
          chart.title("키워드 추출 결과");
          chart.angles([0]);
          chart.container('container');
          chart.background("#BACEE0")
          chart.draw();
          
        });
      }, [data]);

      return (
        <div className="e111_3_keyword">
          <div className="tag_div">
            <div ref={chartContainerRef} id="container"></div>
          </div>
        </div>
      );
    };


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

            
            <div class="e111_3">
               {buttonClick ? <div className="loading"></div> : ""}
            </div>
            <div class="e585_16"></div>
            <div class="e602_19"></div>
            <form id="keyword-form" onSubmit={keywordFunc}>
               {!isKey ? <button type="submit" id="key" style={{ cursor: "pointer" }}></button> : <TagCloudChart data={data} />}

            </form>
            
            
            <span class="e602_26">날짜</span>
            <span class="e420_4">내가 말한 횟수</span>
            <span class="e420_3">대화 횟수</span>
            <span class="e420_6">상대가 말한 횟수</span>

            <div className="chat-container"style={{ overflow: "auto"}}>
               {messages.map((message, index) => (
               <div
                  key={index}
                  className={`chat-bubble ${users[index] === userName ? 'my-message' : 'other-message'}`}
               >
                  <span className="message-username">{users[index] === userName ?'':users[index]}</span>
                  <div className={users[index] === userName ? 'my_message' : 'other_message'}>
                     {message}
                  </div>
               </div>
               ))}
            </div>
            {/* <div class="e602_25"></div> */}
         </div>
         
      </div>

   );
};

export default Analysis;