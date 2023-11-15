/* import logo from '../logo.svg'; */

import './main.css';

import React, { Component } from "react";

// import { getResizeEventListener } from "../services/responsiveFrame";

class Main extends Component {
    render() {
        return (

            <div id="App">

                <div class="e42_2">
                    <div class="e58_6"></div>
                    <div class="e42_9">
                        <div class="e42_21"></div>
                    </div><span class="e42_10">카카오톡</span><span class="e42_11">추억 저장소</span><span class="e42_12">오승주 님</span><span class="e204_6">이용방법</span>
                    <div class="e54_2"></div><span class="e58_2">보관함</span>
                    <div class="e58_3">
                        <div class="e58_4"></div><span class="e58_5">파일 업로드</span>
                    </div>
                    <div class="e58_7"></div>
                    <div class="e58_8"></div>
                    <div class="e58_9"></div>
                    <div class="e58_10"></div>
                    <div class="e58_11"></div>
                    <div class="e58_12"></div>
                    <div class="e58_13"></div>
                    <div class="e58_14"></div>
                </div>

            </div>

        );

    }

    // componentDidMount() {
    //     const FixRatio = getResizeEventListener(1920, 1080);
    //     window.onresize = FixRatio;
    //     FixRatio();
    // }
}

export default Main;