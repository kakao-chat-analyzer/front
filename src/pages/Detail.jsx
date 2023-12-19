import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/detail.css';

function buttonClick() {
   window.location.href = "/login";
}

function introductionClick() {
   window.location.href = "/introduction";
}

function logoClick() {
   window.location.href = "/";
}

function analysisClick(date, chatroomNum) {
   window.location.href = `/analysis?date=${date}&chatroomNum=${chatroomNum}`;
}

/* function reClick(chatroomNum) {
   window.location.href = `/detail?chatroomNum=${chatroomNum}`;
} */


const Detail = () => {

   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const chatroomNum = searchParams.get('chatroomNum');

   const [chatroomData, setChatroomData] = useState([]);
   const [Date, setDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch(`/api/detail?chatroomNum=${chatroomNum}`);
          const body = await response.json();
          console.log("TEST" + body)
          // Set the fetched data into chatroomData state
          
         setChatroomData(body);
         const dates = body.map(item => item.date);
         setDate(dates);
         console.log(dates);
         console.log(Date);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [chatroomNum]);
  

   const [userName, setUserName] = useState("");

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

   const ChatBubble = ({ user, message }) => {
      // Replace with the username variable
      
      return (
         <div className={`chat-bubble ${user === userName ? 'my-message' : 'other-message'}`} >
            <span className="message-username">{`${user != userName ? user : ''}`}</span>
            <span className={`${user === userName ? 'my_message' : 'other_message'}`} >{message}</span>
         </div>
      );
   };

   const ChatroomContainer = ({ chatrooms }) => {
      
      return (
         <>
            {chatrooms.map((chatroom, roomIndex) => (
               <div
                  key={chatroom.date}
                  className={`chat-container${roomIndex + 1} custom-scrollbar`}
                  style={{ overflow: "auto", cursor: userName ? "pointer" : "default" }}
                  onClick={() => analysisClick(Date[roomIndex],chatroomNum)}
                 
               >
                  {chatroom.shuffleMessage.map((message, index) => (
                     <ChatBubble
                        key={index}
                        user={chatroom.shuffleUser[index]}
                        message={message}
                     />
                  ))}
               </div>
            ))}
         </>
      );
   };


   /* useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`/detail?chatroomNum=${chatroomNum}`);
            const body = await response.json();

            // 여기서 가져온 데이터를 사용할 수 있습니다.
            console.log(body); // 받아온 데이터 확인

            // 받아온 데이터에 따라 상태 변경 또는 원하는 작업 수행
            // 예를 들어, 받아온 데이터를 가지고 상태를 변경하는 등의 작업을 수행할 수 있습니다.
            // setChatroom1Visible(body.someProperty);
            // 위와 같이 받아온 데이터를 사용하여 상태 변경 또는 다른 작업을 수행합니다.

         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []); */

   
      const handleRefresh = () => {
        window.location.reload(); // Reload the page
      }

   return (
      <div id="App" >

         <div className="e272_2" >

            <div class="e272_3"></div>

            
            <div class="e272_39"></div>
            <div class="e272_4">
               <div class="e272_5" onClick={logoClick} style={{ cursor: "pointer" }}></div>
            </div>
            
            
            
            {/* <div className="chat-container" style={{ overflow: "auto" }}>
               {chatData.shuffleMessage.map((message, index) => (
                  <ChatBubble
                     key={index}
                     user={chatData.shuffleUser[index]}
                     message={message}
                  />
               ))}
            </div> */}
            
            
            {/* <div class = "e2"></div>
            <div class = "e3"></div>
            <div class = "e4"></div>
            <div></div>
            <div></div> */}

            <ChatroomContainer chatrooms={chatroomData} />

            <div id="index_wrap">
               <ul id ="leftToRight">
                  
                  <li><a className= "asd" href={'/analysis?date='+ Date[0] + '&chatroomNum=' + chatroomNum}>{Date[0]}</a></li>
                  <li><a className= "asd" href={'/analysis?date='+ Date[1] + '&chatroomNum=' + chatroomNum}>{Date[1]}</a></li>
                  <li><a className= "asd" href={'/analysis?date='+ Date[2] + '&chatroomNum=' + chatroomNum}>{Date[2]}</a></li>
                  <li><a className= "asd" href={'/analysis?date='+ Date[3] + '&chatroomNum=' + chatroomNum}>{Date[3]}</a></li>
               </ul>
            </div>

            <div className='re' style={{ cursor: "pointer" }} onClick={handleRefresh}></div>

            <span className="e42__">카카오톡</span>
            <span className="e42_3">추억 저장소</span>
            <span onClick={userName ? null : buttonClick} style={userName ? null : { cursor: "pointer" }} className="e42_12">{renderUserName}</span>
            <span onClick={introductionClick} style={{ cursor: "pointer" }} className="e204_6">이용방법</span>
            <div className="e54_2"></div>
            <div class="e272_48"></div>

         </div>
      </div>

   );
};

export default Detail;