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

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setfile] = useState("");
    const [nickname, setNickname] = useState("");



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





    const uploadButtonClick = (event) => {
        if (!document.getElementById('file').files.length) {
            event.preventDefault(); // Prevents the default action (form submission) if no file is selected
            // Optionally, you can provide feedback to the user that a file needs to be selected
            console.log('Please select a file before uploading.');
        } else {
            // Perform any other action or submit the form if a file is selected
            console.log('File selected. Uploading...');
        }
    };


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



    const handleDetailClick = async () => {
        try {
            const response = await fetch('/api/user');
            let data = await response.json();
            // data형식은 이렇다는 가정으로..
            /* data = {
                "userName": "GOGO",
                "chat_room": [{ "room_number": 1 },
                { "room_number": 2 },
                { "room_number": 3 }]
            } */
            if (data.chat_room.some(room => room.room_number === 1)) {
                window.location.href = "/detail";
            }
        } catch (error) {
            console.error('Error handling click:', error);
        }
    };

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

                {/* <form method="post" action="api/file" enctype="multipart/form-data">

                    <label for="file"  style={{ cursor: "pointer" }} >파일 선택</label>
                    <input type="file" onClick={handleFileInputChange} id="file" accept=".txt"></input>
                    <button type="submit" className="sub" onClick={handleButtonClick} style={{ cursor: "pointer" }} >파일 업로드</button>
                </form> */}

                <form onSubmit={filesubmitFunc} id="file-form">

                    <label for="file" style={{ cursor: "pointer" }} >파일 선택</label>
                    <input type="file" onClick={handleFileInputChange} id="file" accept=".txt"></input>
                    <button type="submit" className="sub" /* onClick={handleButtonClick} */ style={{ cursor: "pointer" }} >파일 업로드</button>
                </form>


                <div className="e58_7" onClick={userName ? handleDetailClick : null} style={userName ? { cursor: "pointer" } : null}></div>
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