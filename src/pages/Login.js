/* import logo from '../logo.svg'; */

import '../styles/login.css';

import React, { Component } from "react";

// import { getResizeEventListener } from "../services/responsiveFrame";

function handleClick() {
  window.location.href = "/register"
}
class Login extends Component {
  render() {
    return (

      <div id="App">
        
        <div className="e14_33"></div><u onClick={handleClick} style={{ cursor: "pointer" }} className="e14_57">회원가입</u>

          {/* <div className="e14_40">

            <div className="e14_41"></div><span className="e14_42">로그인</span>

          </div> */}

          <div className="e14_34">

            <div className="e14_35"></div>{/* <span className="e14_36">비밀번호</span> */}

          </div>

          <div className="e14_37">

            <div className="e14_38"></div>{/* <span className="e14_39">아이디</span> */}

          </div>
          <span className="e14_43">카카오톡 추억 저장소</span>

        <div className="e14_44"></div>
        
        <form method="post" action="api/login" id="login-form">
          <input type="text" name="userId" placeholder="아이디"></input>
          <input type="password" name="userPw" placeholder="비밀번호"></input>
          <button type="submit" id="submit" style={{ cursor: "pointer" }} >로그인</button>
        </form>
        
      </div>
      
    );

  }
  
  // componentDidMount() {
  //   const FixRatio = getResizeEventListener(1920, 1080);
  //   window.onresize = FixRatio;
  //   FixRatio();
  // }
}

export default Login;