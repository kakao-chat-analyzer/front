import React from "react";
// import { getResizeEventListener } from "../services/responsiveFrame";
import '../styles/main.css';
import { useState, useEffect } from 'react';
import ModalBasic from '../components/Modal';
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };
    
    /* const user = useSelector((state) => state.user);
    const dispatch = useDispatch(); */
    
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

    const renderUserName = userName ? userName+"님" : "로그인하기";


    return (
        <div id="App">
            <div className="e42_2">
                <div className="e58_6"></div>
                <div className="e42_9">
                    <div className="e42_21"></div>
                </div>
                <span className="e42_10">카카오톡</span>
                <span className="e42_11">추억 저장소</span>
                <span className="e42_12">{renderUserName}</span>
                <span className="e204_6">이용방법</span>
                <div className="e54_2"></div>
                <span className="e58_2">보관함</span>
                
                <form method="post" action="api/file" enctype="multipart/form-data">
                    
                    <label for="file" style={{ cursor: "pointer" }} >파일 선택</label>
                    <input type="file" id="file" accept=".txt"></input>
                    <button type="submit" className="sub" style={{ cursor: "pointer" }} >파일 업로드</button>
                </form>
                    

                <div className="e58_7"></div>
                <div className="e58_8"></div>
                <div className="e58_9"></div>
                <div className="e58_10"></div>
                <div className="e58_11"></div>
                <div className="e58_12"></div>
                <div className="e58_13"></div>
                <div className="e58_14"></div>
                <div>
                    <button className="e" onClick={showModal}>모달 띄우기</button>
                    {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
                </div>
            </div>
    

        </div>

    );
};

export default Main;