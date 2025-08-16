
// action

export const SUMBIT_ANSWERS = "SUMBIT_ANSWERS";
export const RESET_SESSION = "RESET_SESSION";

// action creators
export const submitAnswer = (isCorrect)=>({
    type:SUMBIT_ANSWERS,
    payload:isCorrect
});

export const resetSession = ()=>({
    type:RESET_SESSION,
});
