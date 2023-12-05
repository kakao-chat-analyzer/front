import React from "react";
import '../styles/main.css';
import { useState, useEffect, useCallback } from 'react';
import ModalBasic from '../components/Modal';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios, { post } from "axios";
import { loginUser } from "../userSlice";




function buttonClick() {
    window.location.href = "/login";
}

function introductionClick() {
    window.location.href = "/introduction";
}

const Main = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    let user = useSelector((state) => { return state.user });
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const [file, setfile] = useState("");


    const [room1Visible, setRoom1Visible] = useState(false);
    const [room2Visible, setRoom2Visible] = useState(false);
    const [room3Visible, setRoom3Visible] = useState(false);
    const [room4Visible, setRoom4Visible] = useState(false);
    const [room5Visible, setRoom5Visible] = useState(false);
    const [room6Visible, setRoom6Visible] = useState(false);
    const [room7Visible, setRoom7Visible] = useState(false);
    const [room8Visible, setRoom8Visible] = useState(false);

    const handleFileInputChange = () => {
        if (!userName) {
            buttonClick();
        }
    };

    const handleButtonClick = (event) => {
        if (!userName)
            event.preventDefault(); {
            buttonClick();
        }
    };


    // username 가져오기
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


    // chatroom 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('/api/chatroom');

                const body = await response.json();

                console.log("a");
                console.log(body);

                const roomNumbers = body.roomNumber || []; // 방 번호가 들어있는 배열 가져오기

                // 각 방 번호에 대해 존재 여부 확인하여 상태 설정
                setRoom1Visible(roomNumbers.includes(1));
                setRoom2Visible(roomNumbers.includes(2));
                setRoom3Visible(roomNumbers.includes(3));
                setRoom4Visible(roomNumbers.includes(4));
                setRoom5Visible(roomNumbers.includes(5));
                setRoom6Visible(roomNumbers.includes(6));
                setRoom7Visible(roomNumbers.includes(7));
                setRoom8Visible(roomNumbers.includes(8));

        
                console.log(room1Visible);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const filesubmitFunc = async (e) => {
        e.preventDefault();

        const fileInput = document.getElementById('file');
        const File = fileInput.files[0]
        setfile(File);

        if (!File) {
            console.log('파일을 선택해주세요.');
            return;
        }

        else {
            const formData = new FormData();
            formData.append('file', File);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            axios.post("/api/file", formData, config).then((res) => {


                console.log(res);
                console.log(res.status);

                if (res.status === 200) {
                    console.log("파일 업로드 성공");

                } else if (res.status === 401) {
                    setMsg("다시 입력해주세요.");
                }
            });
        }
        setLoading(true);
    }



    /* const handleDetailClick = async () => {
        try {
            const response = await fetch('/api/user');
            let data = await response.json(); 
            // data형식은 이렇다는 가정으로..
            data = {
                "userName": "GOGO",
                "chat_room": [{ "room_number": 1 },
                { "room_number": 2 },
                { "room_number": 3 }]
            }

        } catch (error) {
            console.error('Error handling click:', error);
        }
    }; */
    

    return (
        <div id="App">
            <div className="e42_2">
                <div className="e58_6"></div>
                <div className="e42_9">
                    <div className="e42_21"></div>
                </div>
                <span className="e42_1">카카오톡</span>
                <span className="e42_">추억 저장소</span>
                <span onClick={userName ? null : buttonClick} style={userName ? null : { cursor: "pointer" }} className="e42_12" >{renderUserName}</span>
                <span onClick={introductionClick} style={{ cursor: "pointer" }} className="e204_6">이용방법</span>
                <div onClick={userName ? null : buttonClick} style={{ cursor: "pointer" }} className="e54_2"></div>
                <span className="e58_2">보관함</span>



                <form onSubmit={filesubmitFunc} id="file-form">

                    <label for="file" style={{ cursor: "pointer" }} >파일 선택</label>
                    <input type="file" onClick={handleFileInputChange} id="file" accept=".txt"></input>
                    <button type="submit" className="sub" /* onClick={handleButtonClick} */ style={{ cursor: "pointer" }} >파일 업로드</button>
                </form>


                
                {room1Visible && <div className="e58_7" /* onClick={userName ? handleDetailClick : null} */ style={userName ? { cursor: "pointer" } : null}></div>}
                {room2Visible && <div className="e58_8"></div>}
                {room3Visible && <div className="e58_9"></div>}
                {room4Visible && <div className="e58_10"></div>}
                {room5Visible && <div className="e58_11"></div>}
                {room6Visible && <div className="e58_12"></div>}
                {room7Visible && <div className="e58_13"></div>}
                {room8Visible && <div className="e58_14"></div>}
                <div>
                    <button className="e" onClick={showModal}>모달 띄우기</button>
                    {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
                </div>
            </div>


        </div>

    );
};

export default Main;