import '../styles/register.css';
import React, { useState, useCallback } from "react";
import ModalBasic from '../components/Modal';

function handleClick() {
    window.location.href = "/login";
}

const Register = () => {

    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [nickname, setNickname] = useState("");

    const [idMsg, setIdMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState('');
    const [confirmPwdMsg, setConfirmPwdMsg] = useState("")
    const [nicknameMsg, setNicknameMsg] = useState("")

    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
    };

    const validatePwd = (password) => {
        return password
            .toLowerCase()
            .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).*$/);
    }

    const validateNickname = (nickname) => {
        return nickname
            .toLowerCase()
            .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].$/)
    }


    // 1-1에 잡아뒀던 유효성 검사 함수로 정리하기
    /* const isIdValid = validateId(id); */
    const isEmailValid = validateEmail(email);
    const isPwdValid = validatePwd(password);
    const isConfirmPwd = password === confirmPwd;
    const isNicknameValid = validateNickname(nickname);


    const onChangeEmail = useCallback(async (e) => {
        const currEmail = e.target.value;
        setEmail(currEmail);
        setEmailMsg(true)
        setEmailMsg(currEmail !== "");
    })

    /* const onChangeId = useCallback(async (e) => {
        const currId = e.target.value;
        setEmail(currId);

        if (!validateId(currId)) {
            setIdMsg(false)
        } else {
            setIdMsg(true)
        }

    }) */

    const onChangePwd = useCallback((e) => {
        const currPwd = e.target.value;
        setPassword(currPwd);
    }, [])

    const onChangeConfirmPwd = useCallback((e) => {
        const currConfirmPwd = e.target.value;
        setConfirmPwd(currConfirmPwd);

        if (currConfirmPwd !== password) {
            setConfirmPwdMsg(false)

        } else {
            setConfirmPwdMsg(true)

        }
    }, [password])



    const onChangeNickname = useCallback((e) => {
        const currNickname = e.target.value;
        setNickname(currNickname);
        setNicknameMsg(currNickname !== "");
    }, []);

    const isAllValid = isConfirmPwd;


    return (
        <div id="App">
            <div className="e13_19"></div>
            <div onClick={handleClick} style={{ cursor: "pointer" }} className="e48_22"></div>
            <div className="e13_26">
                <div className="e13_27"></div>
            </div>
            <div className="e13_20">
                <div className="e13_21"></div><span className="e28_4">비밀번호를 입력해주세요.</span>
            </div>
            <div className="e13_23">
                <div className="e13_24"></div><span className="e28_3">아이디를 입력해주세요.</span>
            </div>
            <div className="e28_5">
                <div className="e28_6"></div><span className="e28_14">이름을 입력해주세요.</span>
            </div>
            <div className="e28_8">
                <div className="e28_9"></div><span className="e28_10">비밀번호 다시 한 번 입력해주세요.</span>
            </div>
            <span className="e28_11">아이디</span><span className="e28_12">비밀번호</span><span className="e28_13">이름</span>
            <div className="e28_15">
                <div className="e28_16"></div><span className="e28_17">이메일을 입력해주세요.</span>
            </div>
            <span className="e28_18">이메일</span><span className="e28_24">회원가입</span>

            {/* <input type="password" name="userPassword_check" placeholder="비밀번호를 다시 한 번 입력해주세요."  ></input> */}
            <div>
                <input type="password" name="userPassword_check" placeholder="비밀번호를 다시 한 번 입력해주세요" value={confirmPwd} onChange={onChangeConfirmPwd} className="password-input" />
                <p>{confirmPwdMsg}</p>
                {
                    confirmPwdMsg
                        ? <div className="checktrue_confirmPwd"></div>
                        : <div></div>
                }
            </div>

            <p>{emailMsg}</p>
            {
                emailMsg
                    ? <div className="checktrue_email"></div>
                    : <div></div>
            }

            <p>{nicknameMsg}</p>
            {
                nicknameMsg
                    ? <div className="checktrue_nickname"></div>
                    : <div></div>
            }

            <form method="post" action="/api/register" id="register-form">
                <input type="text" name="userId" placeholder="아이디를 입력해주세요." /* value={id} onChange={onChangeId} */></input>
                <input type="password" name="userPw" placeholder="비밀번호를 입력해주세요." value={password} onChange={onChangePwd} ></input>
                <input type="text" name="userName" placeholder="이름을 입력해주세요." value={nickname} onChange={onChangeNickname}></input> 
                <input type="text" name="userEmail" placeholder="이메일을 입력해주세요." value={email} onChange={onChangeEmail}></input>
                <button type="submit" id="submit" style={{ cursor: "pointer" }} disabled={!isAllValid} onClick={showModal}>가입하기</button>
            </form>
        </div>
    );
};

export default Register;