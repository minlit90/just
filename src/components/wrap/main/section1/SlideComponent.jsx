import React from 'react';
import { setCnt } from '../../../../store/cntSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function SlideComponent ({슬라이드}) {
    const slideWrapRef = React.useRef(); // 슬라이드 slideWrapRef 선택자
    const cnt = useSelector((state)=>state.cntSlice.cnt); 
    const dispatch = useDispatch();
    

    React.useEffect(()=>{
        const setId = setInterval(() => {
            dispatch(setCnt(슬라이드.length-1));
        }, 3000);
        return ()=> clearInterval(setId)
    }, [dispatch, 슬라이드]);

    //cnt 증가시 선택자를 이용 애니메이션 구현
    React.useEffect(()=>{
        const n = 슬라이드.length-3;
        if ( cnt > n ) {
            slideWrapRef.current.style.left = `${-100 * 0}%`;
            setTimeout(()=>{
                dispatch(setCnt(1)); // 리턴 다음 1을 전달 그리고 다음 두번째 슬라이드이동 준비 완료
            }, 0)
            slideWrapRef.current.style.transition = '0';
        } else {
            slideWrapRef.current.style.transition = 'all 0.6s ease-in-out';
            slideWrapRef.current.style.left = `${-100 * cnt}%`;
        }
    }, [cnt]);


    return (
        <div className="slide-container">
            <div className="slide-content">
                <ul className="slide-wrap" ref={slideWrapRef}>
                    {
                        슬라이드.length > 0 && (슬라이드.map((item, idx)=>{
                          return(
                            <li key={item.제목}
                                // ref={(e)=>(slideRef.current[idx]=e)}
                                className={`slide slide${idx+1}`} 
                                style={{
                                    backgroundImage : `url(${process.env.PUBLIC_URL}/images/${item.배경이미지})`
                                }} //inline-style {{}} 이중중괄호 
                            >
                                <a href="!#" title={item.제목}>
                                    <span>{item.제목}</span>
                                </a>
                            </li> 
                           )   
                        }))
                    }                                    
                </ul>
            </div>
        </div>
    );
};
