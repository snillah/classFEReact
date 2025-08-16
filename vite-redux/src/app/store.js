import { combineReducers, createStore } from "redux";
import flashCardReducer from "../store/reducers/flashCardReducer";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux"

const rootRoducrer = combineReducers({
    study: flashCardReducer
})

createRoot(document.getElementById(root))
