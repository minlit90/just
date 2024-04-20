import React from 'react';
import MainComponent from './wrap/MainComponent';
import HeaderComponent from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import PopupComponent from './wrap/PopupComponent';
import './scss/WrapComponent.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';

//상태관리에 있는 값을 가져옴
import { useSelector } from 'react-redux';
import SignUpComponent from './wrap/sub/SignUpComponent';

export default function WrapComponent(){
    
    //스토어에서 리듀서 -> 상태관리 변수 가져오기, 중괄호 없으면 즉시가져오기
    //권장사항 - 리듀서 선택
    //const popupSlice = useSelector((state)=>state.popupSlice); //    
    
    //비권장  모든 리듀서 다 불러옴, 과부하    
    //const isPopup = useSelector((state)=>state);
    //리듀서.상태변수 선택 (상태관리가 너무 번거로움) 
    const isPopup = useSelector((state)=>state.popupSlice.isPopup);
    //const title = useSelector((state)=>state.popupSlice.title);
    //console.log( popupSlice.isPopup );    
    //console.log( popupSlice.title );
 
    //const [isPopup, setIsPopup] = React.useState(false);
    // 팝업창 열기 이벤트 함수 => 화살표 함수
    // 섹션 2의 공지사항 1행 클릭시 호출하게한다
    const popupOpen=()=>{
    //    setIsPopup(true);
    }         
    // 팝업창 닫기 이벤트 함수
    const popupClose=()=>{
     //   setIsPopup(false);
    }     

    return (
        <div id="wrap">
            <HashRouter>
                <Routes>
                    <Route path='/' element={<HeaderComponent />}>
                        {/* //로딩시 outlet 타켓에 나타남 */}
                        <Route index element = {<MainComponent />}/>
                        <Route path='/' element = {<MainComponent />}/>
                        <Route path='/signup' element={ <SignUpComponent />}/>
                    </Route>
                </Routes>                   
                <FooterComponent />
                { isPopup && <PopupComponent popupClose={popupClose} />}
            </HashRouter>            
        </div>
    );
};