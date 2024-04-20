import React from 'react';

export default function HeaderComponent() {


    const [sub, setSub] = React.useState([false,false,false,false,]);

    // const [sub1, setSub1] = React.useState(false);
    // const [sub2, setSub2] = React.useState(false);
    // const [sub3, setSub3] = React.useState(false);
    // const [sub4, setSub4] = React.useState(false);

    // //서브1 open
    // const onMouseEnterSub1Show=()=>{
    //     setSub1(true);
    // }
    // //서브1 hide
    // const onMouseLeavesub1Hide=(e)=>{
    //     setSub1(false);
    // }
    // //서브2
    // const onMouseEnterSub2Show=()=>{
    //     setSub2(true);
    // }
    // const onMouseLeaveSub2Hide=()=>{
    //     setSub2(false);
    // }
    // //서브3
    // const onMouseEnterSub3Show=()=>{
    //     setSub3(true);
    // }
    // const onMouseLeaveSub3Hide=()=>{
    //     setSub3(false);
    // }
    // //서브4
    // const onMouseEnterSub4Show=()=>{
    //     setSub4(true);
    // }
    // const onMouseLeaveSub4Hide=()=>{
    //     setSub4(false);
    // }
    // 3항 연산자
    // 조건 ? 참 : 거짓 
    // console.log(`탬플릿 리터럴 : main-btn${sub1?" on":""}`);

    return (
        <header id="header">
            <div className="left">
                <h1><a href="./index.html" title="JUST 쇼핑몰"><span>JUST</span> <span>쇼핑몰</span></a></h1>
            </div>
            <div className="right">
                <nav id="nav">
                    <ul>
                        메인메뉴.map((item, idx)=>{
                            return(
                                <li key={idx} className="col" onMouseLeave={(e)=>onMouseLeavesubHide(e, idx)}>
                            <a href="!#" onMouseEnter={(e)=>onMouseEnterSubShow(e, idx)} className={`main-btn${sub[idx]===true?" on":""}`} title="탑">탑</a>
                            {   
                                sub[idx] && (
                                <div className="sub sub1">
                                    <div className="sub-container">
                                        <ul>
                                            <li> {/* 1열 */}
                                                <ul>
                                                    <li><a href="!#" title="블라우스">블라우스</a></li>
                                                    <li><a href="!#" title="티">티</a></li>
                                                    <li><a href="!#" title="셔츠">셔츠</a></li>
                                                    <li><a href="!#" title="니트">니트</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 2열 */}
                                                <ul>
                                                    <li><a href="!#" title="자켓">자켓</a></li>
                                                    <li><a href="!#" title="코트">코트</a></li>
                                                    <li><a href="!#" title="가디건">가디건</a></li>
                                                    <li><a href="!#" title="머플러">머플러</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 3열 */}
                                                <ul>
                                                    <li><a href="!#" title="청바지">청바지</a></li>
                                                    <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                    <li><a href="!#" title="긴바지">긴바지</a></li>
                                                    <li><a href="!#" title="레깅스">레깅스</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 4열 */}
                                                <ul>
                                                    <li><a href="!#" title="귀고리">귀고리</a></li>
                                                    <li><a href="!#" title="목걸이">목걸이</a></li>
                                                    <li><a href="!#" title="반지">반지</a></li>
                                                    <li><a href="!#" title="팔찌">팔찌</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                )
                            }
                        </li>
                            );
                        })
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
};