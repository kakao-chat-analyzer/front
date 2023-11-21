import React, { useState, useRef } from 'react';
// import { getResizeEventListener } from "../services/responsiveFrame";
import '../styles/detail.css';

/* import { LeftArrow, RightArrow } from './Arrow'; */






const Detail = () => {

    const [isScroll, setIsScroll] = useState(false);
    const [originX, setOriginX] = useState(0);
    const [afterX, setAfterX] = useState(0);
    const [position, setPosition] = useState(0);

   /* const [isScrolling, setIsScrolling] = useState(false);
   const [startX, setStartX] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);
   const containerRef = useRef(null); */

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

   /* const handleMouseDown = (e) => {
      setIsScrolling(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);

   };

   const handleMouseUp = () => {
      setIsScrolling(false);
   };

   const handleMouseMove = (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const distance = x - startX;
      
      containerRef.current.scrollLeft = scrollLeft - distance; // Change '+' to '-' to move in the opposite direction of the mouse
      
   }; */

   return (
      <div id="App" >

         <div className="e272_2" >

            <div class="e272_3"></div>

            <div class="e272_39"></div>
            <div class="e272_4">
               <div class="e272_5"></div>
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
               <span className="e42_10">카카오톡</span>
               <span className="e42_11">추억 저장소</span>
               <span className="e42_12">오승주님</span>
               <span className="e204_6">이용방법</span>
               <div className="e54_2"></div>
               <div class="e272_48"></div>

            


         </div>
      </div>

   );
};

export default Detail;