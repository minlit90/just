import React from 'react';
import NoticeComponent from './section2/NoticeComponent';
import GalleryComponent from './section2/GalleryComponent';
import axios from 'axios';

export default function Section2Component () {  

    const [tab, setTab] = React.useState(false);
    const [state, setState] = React.useState({
        공지사항: [],
        갤러리: [],
        title: '섹션2 타이틀'
    });

    const onClickgalleryBtn=(e)=>{
        setTab(true);
    }
    const onClickNoticeBtn=(e)=>{
        setTab(false);
    }


    // AXIOS 구현 => 공지사항 JSON 파일 가져오기
    // 1. 공지사항 JSON 파일 가져오기  
    // 2. 상태관리 state => 공지사항 []에 저장하기
    // 3. 자식컴포넌트에 프롭스로 내려 보낸다. 
    // 4. 자식컴포넌트에서 map함수로 마운트하고 바인딩한다

    React.useEffect(()=>{
        //프로미스
        //axios().then(성공시).then(성공시 다음).catch(실패시);
        axios({
            url:'./data/notice.json',
            method: 'GET'
        })
        .then((res)=>{  
            // setState({
            //     ...state,
            //     공지사항: res.data.공지사항,
            //     갤러리: res.data.갤러리
            // }); 
            //객체 키 속성 확인 후 상태변수 저장
            //["공지사항", "갤러리"].includes('공지사항')
            console.log( Object.keys(res.data));
            console.log( Object.keys(res.data).includes('공지사항'));
            console.log( Object.keys(res.data).includes('갤러리'));
            const n = Object.keys(res.data).includes('공지사항');
            const g = Object.keys(res.data).includes('갤러리');

            if( n === true && g === true ) {
                setState({
                    ...state,
                    공지사항: res.data.공지사항,
                    갤러리: res.data.갤러리
                }); 
            }            // console.log('AXIOS 성공!');
            // console.log(res);
            // console.log(res.data);
            //console.log(res.data.갤러리);
        })
        .catch((err)=>{
            // console.log('AXIOS 실패!');
            // console.log(err);
        });


    }, []); // 1회 실행하고 끝나는 빈배열

    return (
        <section id="section2">
            <div className="left">
                <div className="container">
                    <div className="title">
                        <button onClick={onClickNoticeBtn} className={`notice-btn${tab?" on":""}`} title="공지사항">공지사항</button>    
                        <button onClick={onClickgalleryBtn} className={`gallery-btn${tab?" on":""}`} title="갤러리">갤러리</button>    
                    </div>
                    <div className="content">
                        <div className={`notice-box ${tab?" on":""}`}>
                            {/* 공지사항 목록 자식 컴포넌트 */}
                            <NoticeComponent 공지사항={state.공지사항}/>
                        </div>
                        <div className={`gallery-box ${tab?" on":""}`}>
                            {/* 갤러리 목록 자식 컴포넌트 */}
                            <GalleryComponent 갤러리={state.갤러리}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="container">
                    <div className="title hide"><h2>이벤트 배너</h2></div>
                    <div className="content">
                        <a href="!#" title="여름 마지막 세일"><h3>여름 마지막 세일</h3></a>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="container">
                    <div className="title hide"><h2>바로가기 배너</h2></div>
                    <div className="content">
                       <ul>
                            <li><a href="!#" title="할인정보"><span>할인정보</span></a></li>
                            <li><a href="!#" title="이벤트정보"><span>이벤트정보</span></a></li>
                            <li><a href="!#" title="고객정보"><span>고객정보</span></a></li>
                       </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
