const initialState = [];

export default function rootReducer(state = initialState, action) {
    console.log("rootReducer", action)
    switch (action.type) {
        case "LOAD":
            return action.payload;
        default:
            return state;

    }
}