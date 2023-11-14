import './register.css';

import React, { Component } from "react";

import { getResizeEventListener } from "../services/responsiveFrame";

class App extends Component {
    render() {
        return (
            <div id="App">

                <div class="e13_19"></div>
                <div class="e48_23"></div>
                <div class="e13_26">
                    <div class="e13_27"></div><span class="e13_28">가입하기</span>
                </div>
                <div class="e13_20">
                    <div class="e13_21"></div><span class="e28_4">비밀번호를 입력해주세요.</span>
                </div>
                <div class="e13_23">
                    <div class="e13_24"></div><span class="e28_3">아이디를 입력해주세요.</span>
                </div>
                <div class="e28_5">
                    <div class="e28_6"></div><span class="e28_14">이름을 입력해주세요.</span>
                </div>
                <div class="e28_8">
                    <div class="e28_9"></div><span class="e28_10">비밀번호 다시 한 번 입력해주세요.</span>
                </div><span class="e28_11">아이디</span><span class="e28_12">비밀번호</span><span class="e28_13">이름</span>
                <div class="e28_15">
                    <div class="e28_16"></div><span class="e28_17">이메일을 입력해주세요.</span>
                </div><span class="e28_18">이메일</span><span class="e28_24">회원가입</span>
                
               
                <form method="post" action="서버의url" id="register-form">
                    <input type="text" name="userName" placeholder="아이디를 입력해주세요."></input>
                    <input type="password" name="userPassword" placeholder="비밀번호를 입력해주세요."></input>
                    <input type="password" name="userPassword_check" placeholder="비밀번호를 다시 한 번 입력해주세요."></input>
                    <input type="text" name="user" placeholder="이름을 입력해주세요."></input>
                    <input type="text" name="email" placeholder="이메일을 입력해주세요."></input>
                    <input type="submit" value="가입하기"></input>
                </form>
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