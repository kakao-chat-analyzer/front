import React, { useState, useEffect} from "react";
import '../styles/login.css';
import { loginUser } from "../userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Navigate } from 'react-router-dom';

function handleClick() {
  window.location.href = "/register";
}

const Login = () => {

  let user = useSelector((state) => { return state.user });
  const dispatch = useDispatch();

  if (res.data.code === 200) {
    console.log("로그인");
    dispatch(loginUser(res.data.userInfo));
    setMsg("");
  }


  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  }, [msg])

  const LoginFunc = (e) => {
    e.preventDefault();
    if (!id) {
      return alert("ID를 입력하세요.");
    }
    else if (!password) {
      return alert("Password를 입력하세요.");
    }

    else {
      let body = {
        id,
        password
      };

      axios.post("Endpoint", body)
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            console.log("로그인");
            dispatch(loginUser(res.data.userInfo));
            setMsg("");
            return <Navigate to="/login" />;
          }
          if (res.data.code === 400) {
            setMsg("ID, Password가 비어있습니다.");
          }
          if (res.data.code === 401) {
            setMsg("존재하지 않는 ID입니다.");
          }
          if (res.data.code === 402) {
            setMsg("Password가 틀립니다.");
          }
        });
    }
    setLoading(true);

  }

  return (
    <div id="App">
      <div className="e14_33"></div>
      <u onClick={handleClick} style={{ cursor: "pointer" }} className="e14_57">회원가입</u>

      <div className="e14_34">
        <div className="e14_35"></div>
      </div>

      <div className="e14_37">
        <div className="e14_38"></div>
      </div>
      <span className="e14_43">카카오톡 추억 저장소</span>

      <div className="e14_44"></div>

      <form method="post" action="api/login" id="login-form" onSubmit={LoginFunc}>
        <input type="text" name="userId" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} ></input>
        <input type="password" name="userPw" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
        <button type="submit" id="submit" style={{ cursor: "pointer" }} disabled={loading} >로그인</button>
      </form>
    </div>
  );
};

export default Login;