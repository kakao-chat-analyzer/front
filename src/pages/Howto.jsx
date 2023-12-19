import React from "react";
import '../styles/howto.css';
import { useState, useEffect, useCallback } from 'react';
import ModalBasic from '../components/Modal';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import axios, { post } from "axios";
import { loginUser } from "../userSlice";




function buttonClick() {
    window.location.href = "/login";
}

function introductionClick() {
    window.location.href = "/introduction";
}

function detailClick(chatroomNum) {
    window.location.href = `/detail?chatroomNum=${chatroomNum}`;
}

function logoClick() {
    window.location.href = "/";
 }

const Howto = () => {
    
    const [userName, setUserName] = useState("");
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/user');
                const body = await response.json();

                setUserName(body.userName);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, []);

    const renderUserName = userName ? userName + " 님" : "로그인하기";
    
    return (
        <div id="App">
            <div className="e42_2">
                <div className="e58_6"></div>
                <div className="e42_9">
                    <div onClick={logoClick} style={{ cursor: "pointer" }} className="e42_213"></div>
                </div>
                <span className="e42_1">카카오톡</span>
                <span className="e42_">추억 저장소</span>
                <span onClick={userName ? null : buttonClick} style={userName ? null : { cursor: "pointer" }} className="e42_12" >{renderUserName}</span>
                <span className="e204_6">이용방법</span>
                <div onClick={userName ? null : buttonClick} style={{ cursor: "pointer" }} className="e54_2"></div>
                <span className="e58_21">이용방법</span>

                <div className="group4"></div>
                <div className="group123"></div>

                
            </div>


        </div>

    );
};

export default Howto;