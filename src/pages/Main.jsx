import React from "react";
import '../styles/main.css';
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

const Main = () => {
    

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");

    // 모달창 노출
    

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

                const roomNumbers = body.chatroomNum || []; // 방 번호가 들어있는 배열 가져오기

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
                    alert("파일 업로드 성공!");
                    window.location.href = `/`;
                } else if (res.status === 401) {
                    setMsg("다시 입력해주세요.");
                }
            });
        }
        setLoading(true);
    }
    
    
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


                 
                {room1Visible && <div className="folder_image e58_7" onClick={() => detailClick(1)} style={userName ? { cursor: "pointer" } : null}>
                    <span className="chatName1">{userName}의 채팅방 1</span>
                    </div>}
                {room2Visible && <div className="folder_image e58_8" onClick={() => detailClick(2)} style={userName ? { cursor: "pointer" } : null}>
                <span className="chatName1">{userName}의 채팅방 2</span>
                    </div>}
                {room3Visible && <div className="folder_image e58_9" onClick={() => detailClick(3)} style={userName ? { cursor: "pointer" } : null}>
                <span className="chatName1">{userName}의 채팅방 3</span>
                    </div>}
                {room4Visible && <div className="folder_image e58_10" onClick={() => detailClick(4)} style={userName ? { cursor: "pointer" } : null}>
                <span className="chatName1">{userName}의 채팅방 4</span>
                    </div>}
                {room5Visible && <div className="folder_image e58_11" onClick={() => detailClick(5)} style={userName ? { cursor: "pointer" } : null}>
                <span className="chatName1">{userName}의 채팅방 5</span>
                    </div>}
                {room6Visible && <div className="folder_image e58_12" onClick={() => detailClick(6)} style={userName ? { cursor: "pointer" } : null}>
                <span className="chatName1">{userName}의 채팅방 6</span>
                    </div>}
                {room7Visible && <div className="folder_image e58_13" onClick={() => detailClick(7)} style={userName ? { cursor: "pointer" } : null}>
                <span className="chatName1">{userName}의 채팅방 7</span>
                    </div>}
                {room8Visible && <div className="folder_image e58_14" onClick={() => detailClick(8)} style={userName ? { cursor: "pointer" } : null}>
                <span className="chatName1">{userName}의 채팅방 8</span>
                    </div>}
                
            </div>


        </div>

    );
};

export default Main;