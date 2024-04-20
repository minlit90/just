import { createSlice } from "@reduxjs/toolkit";

const initState = {
    title: '',
    isPopup: false
}
const popupSlice = createSlice({
    name: 'popup',
    initialState: initState,
    reducers: {
        // popup 열기 액션
        // popup 닫기 액션
        // popupOpenAction: (state, action) => {
        //     state.isPopup = action.payload;
        // },
        // closeOpenAction: (state, action) => {
        //     state.isPopup = action.payload;
        // },
        popupAction: (state, action) => { //popup 열고 닫기
            //state.isPopup = action.payload; //페일로드 => 전달값 true, false
            
            state.isPopup = action.payload.isPopup; //객체를 실어보낼때                        
            state.title = action.payload.title;
            //state.isPopup = action.payload; 
            console.log( 'action.payload', action.payload);
        }
    }
});

export default popupSlice.reducer;
export const {popupAction} = popupSlice.actions;