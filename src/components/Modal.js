import './uploadfile.css';

function ModalBasic({ setModalOpen, id, title, content, writer }) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };


    
    return (
        <div className="container">
            <div class="e233_11 "></div>
            <button className="close" onClick={closeModal}>
                X
            </button>
            <p class = "word">모달창입니다.</p>
        </div>
    );
}

export default ModalBasic;


{/* <div class=e233_2>
    <div class=e233_9>
        <div class="e233_10"></div>
        <div class="e233_11"></div><span class="e233_12">Drag files to upload</span>
    </div>
</div> */}

/* .233_2 {
    overflow: hidden;
}
.e233_2 {
    background - color: rgba(255, 255, 255, 1);
    width: 1920px;
    height: 1080px;
    position: absolute;
}
.e233_9 {
    box - shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    width: 1074px;
    height: 705px;
    position: absolute;
    left: 593px;
    top: 188px;
    border - top - left - radius: 15px;
    border - top - right - radius: 15px;
    border - bottom - left - radius: 15px;
    border - bottom - right - radius: 15px;
}
.container {
    background - color: rgba(0, 0, 0, 0.15000000596046448);
    width: 1074px;
    height: 705px;
    position: absolute;
    left: 0px;
    top: 0px;
    border - top - left - radius: 15px;
    border - top - right - radius: 15px;
    border - bottom - left - radius: 15px;
    border - bottom - right - radius: 15px;
}
.e233_11 {
    width: 367px;
    height: 337px;
    position: absolute;
    left: 351px;
    top: 166px;
    border - top - left - radius: 15px;
    border - top - right - radius: 15px;
    border - bottom - left - radius: 15px;
    border - bottom - right - radius: 15px;
    background - image: url(images / free_icon_upload_big_arrow_81081_1.png);
    background - repeat: no - repeat;
    background - size: cover;
}
.word {
    color: rgba(0, 0, 0, 1);
    width: 615px;
    height: 105px;
    position: absolute;
    left: 229px;
    top: 526px;
    font - family:Noto Sans KR;
    text - align: center;
    font - size: 48px;
    letter - spacing: 0;
} */
