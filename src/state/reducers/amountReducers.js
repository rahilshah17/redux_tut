const amountReducer = (state=0, action) => {
    if (action.type === "deposit") {
        return state + action.payload;
    } else if (action.type === "withdraw") {
        return state - action.payload;
    }
    return state;
}

export default amountReducer;