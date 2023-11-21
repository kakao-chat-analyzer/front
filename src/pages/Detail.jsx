import React from "react";
// import { getResizeEventListener } from "../services/responsiveFrame";
import '../styles/detail.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
/* import { LeftArrow, RightArrow } from './Arrow'; */
import { useState, useEffect } from 'react';

const Arrow = ({ disabled, onClick, children }) => (
   <button onClick={onClick} disabled={disabled}>
      {children}
   </button>
);


const Detail = () => {

   const [selected, setSelected] = useState([]); // State to manage selected items

   // Handle click event on each item
   const handleClick = (id) => ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
         itemSelected
            ? currentSelected.filter((el) => el !== id)
            : currentSelected.concat(id)
      );
   };

   // Function to check if an item is selected
   const isItemSelected = (id) => selected.includes(id);

   // Function to render the left arrow
   const LeftArrow = () => {
      const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

      return (
         <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
         </Arrow>
      );
   };

   // Function to render the right arrow
   const RightArrow = () => {
      const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

      return (
         <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
         </Arrow>
      );
   };




   const Data = [
      { class: "e271_2" },
      { class: "e357_2" },
      { class: "e271_3" },
      { class: "e271_4" },
      { class: "e271_5" },
      { class: "e271_6" },
      // ... 추가 데이터
   ];

   return (
      <div id="App">
         <div class="e272_2">
            <div class="e272_3"></div>

            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
               {Data.map(({ class: className }, index) => (
                  <div key={index} className={className}></div>
               ))}
            </ScrollMenu>

            <div class="e272_39"></div>
            <div class="e272_4">
               <div class="e272_5"></div>
            </div>
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