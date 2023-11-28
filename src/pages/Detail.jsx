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


   const Data = [
      { class: "e271_2" },
      { class: "e357_2" },
      { class: "e271_3" },
      { class: "e271_4" },
      { class: "e271_5" },
      { class: "e271_6" },
      // ... Additional data
   ];

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

   const handleSlide = (e) => {
      const scrollSpeed = 1.55; // Adjust this value to change the scroll speed
      const newPosition = -(e.clientX - originX) * scrollSpeed + afterX;
      const hiddenLength = e.currentTarget.offsetWidth - 166 * Data.length;

      if (!isScroll) {
         return;
      }

      if (newPosition > 10 && newPosition < hiddenLength) {
         setPosition(newPosition);
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


   return (
      <div id="App" >

         <div className="e272_2" >

            <div class="e272_3"></div>

            <div class="e272_39"></div>
            <div class="e272_4">
               <div class="e272_5" onClick={logoClick} style={{ cursor: "pointer" }}></div>
            </div>
            <div
               onMouseDown={(e) => handleScroll(e, 'start')}
               onMouseUp={(e) => handleScroll(e, 'end')}
               onMouseLeave={(e) => handleScroll(e, 'leave')}
               onMouseMove={handleSlide}
               style={{
                  transform: `translateX(-${position}px)`,
                  cursor: isScroll ? 'grabbing' : 'grab',
                  userSelect: 'none',
               }}
            >
               {Data.map(({ class: className }, index) => (
                  <div key={index} className={className} ></div>
               ))}</div>

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