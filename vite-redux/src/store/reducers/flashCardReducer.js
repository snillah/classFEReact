import { SUMBIT_ANSWERS,RESET_SESSION } from "../actions/flashCardAction"


const initialState = {
    index:0,
    score :0,
    completed:false
}

export default function flashCardReducer(state=initialState,action){
    switch(action.type){
        case SUMBIT_ANSWERS:
            // if the user hass already
            if(state.completed){
                return state;
            }
            const nextIndex =  state.index +1;
    }
}

