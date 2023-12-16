import React, { useState, useRef, useEffect } from 'react';
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



const Detail = () => {

   const [isScroll, setIsScroll] = useState(false);
   const [originX, setOriginX] = useState(0);
   const [afterX, setAfterX] = useState(0);
   const [position, setPosition] = useState(0);

   const [chatroom1Visible, setchatroom1Visible] = useState(false);
   const [chatroom2Visible, setchatroom2Visible] = useState(false);
   const [chatroom3Visible, setchatroom3Visible] = useState(false);
   const [chatroom4Visible, setchatroom4Visible] = useState(false);


   const chatData = {
      "shuffleMessage": [
         " 한시간 반정도뒤에",
         " 체력 미치셨네..",
         " 꿀잠",
         " 미쳤읍니다",
         " 선대 시험지 안 들고오시나요",
         " 전 가지러길려고요",
         " 어제 까먹고",
         " 오늘은…",
         " 서울이라..",
         " 다른날에 가려고 합니다."
      ],
      "shuffleUser": [
         "이 형진 20 소웨",
         "이 형진 20 소웨",
         "이 형진 20 소웨",
         "이 형진 20 소웨",
         "고건영",
         "고건영",
         "고건영",
         "고건영",
         "고건영",
         "이 형진 20 소웨"
      ],
      "date": "2023-06-20"
   };

   const Data = [
      { class: "e271_2" },
      { class: "e357_2" },
      { class: "e271_3" },
      { class: "e271_4" },
      { class: "e271_5" },
      { class: "e271_6" },
      // ... Additional data
   ];

   /* const ChatBubble = ({ user, message }) => {
      return (
         <div className="chat-bubble">
            <span className="user">{user}</span>
            <span className="message">{message}</span>
         </div>
      );
   }; */

   

   const handleScroll = (e, scroll) => {
      switch (scroll) {
         case 'start':
            setOriginX(e.clientX);
            setIsScroll(true);
            break;
         case 'end':
            setAfterX(position);
            setIsScroll(false);
            break;
         case 'leave':
            setIsScroll(false);
            break;
         default:
            break;
      }
   };


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
            <span className="message-username">{user}</span>
            <span className="message">{message}</span>
         </div>
      );
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('/api/analysis');
            const body = await response.json();
            if (Array.isArray(body.chat_room)) {

               const roomNumberOneExists = body.chat_room.some(room => room.room_number === 1);
               setchatroom1Visible(roomNumberOneExists);
            }
            if (Array.isArray(body.chat_room)) {

               const roomNumbertwoExists = body.chat_room.some(room => room.room_number === 2);
               setchatroom2Visible(roomNumbertwoExists);
            }
            if (Array.isArray(body.chat_room)) {

               const roomNumberthreeExists = body.chat_room.some(room => room.room_number === 3);
               setchatroom3Visible(roomNumberthreeExists);
            }
            if (Array.isArray(body.chat_room)) {

               const roomNumberfourExists = body.chat_room.some(room => room.room_number === 4);
               setchatroom4Visible(roomNumberfourExists);
            }
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);


   return (
      <div id="App" >

         <div className="e272_2" >

            <div class="e272_3"></div>

            
            <div class="e272_39"></div>
            <div class="e272_4">
               <div class="e272_5" onClick={logoClick} style={{ cursor: "pointer" }}></div>
            </div>
            
            
            
               <div className="chat-container" style={{ overflow: "auto" }}>
                  {chatData.shuffleMessage.map((message, index) => (
                     <ChatBubble
                        key={index}
                        user={chatData.shuffleUser[index]}
                        message={message}
                     />
                  ))}
               </div>
            
            
            <div class = "e2"></div>
            <div class = "e3"></div>
            <div class = "e4"></div>
            <div></div>
            <div></div>

            

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