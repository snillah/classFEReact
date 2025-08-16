// Objective - a stoer to track our favorite quotes

import { createStore } from "redux";

// inital store
const initalState = {
  qoutes: [],
};

// action
const ADD_QUOTE = "ADD_QUOTE";
const Remove_QUOTE = "Remove_QUOTE";
// action Creators?

const addQuote = (quote) => ({ type: ADD_QUOTE, payload: quote });
const removeQuote = (quote) => ({ type: Remove_QUOTE, payload: quote });

// Reducer

const quoteReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return {
        ...state,
        qoutes: [...state.quotes, action.payload],
      };
      case Remove_QUOTE:
      return {
        ...state,
        qoutes: state.quote.filter((quote)=> quote !== action.payload),
      };
      default:
        return state;
  }
};

// Create a store
const store = createStore(quoteReducer)


// Using our store 
store.subscribe(()=>console.log(store.getState()));

store.dispatch(addQuote("Be Yourself"))
store.dispatch(addQuote("Be Yourself"))
store.dispatch(addQuote("Be Yourself"))
store.remove(addQuote("Be Yourself"))