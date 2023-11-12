import logo from './logo.svg';

import './App.css';

import React, { Component } from "react";

import { getResizeEventListener } from "./services/responsiveFrame";

class App extends Component {
  render() {
    return (
      <div id="App">

          <div className="e14_33"></div><span className="e14_57">회원가입</span>

          <div className="e14_40">

            <div className="e14_41"></div><span className="e14_42">로그인</span>

          </div>

          <div className="e14_34">

            <div className="e14_35"></div><span className="e14_36">비밀번호</span>

          </div>

          <div className="e14_37">

            <div className="e14_38"></div><span className="e14_39">아이디</span>

          </div><span className="e14_43">카카오톡 추억 저장소</span>

          <div className="e14_44"></div>

      </div>
    );
  }
  componentDidMount() {
    const FixRatio = getResizeEventListener(1920, 1080);
    window.onresize = FixRatio;
    FixRatio();
  }
}

export default App;