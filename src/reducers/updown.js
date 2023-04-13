const initialval = 0;
const updown = (state = initialval, action) => {
    switch (action.type) {
        case "INCR":
            return state = state + 1
        case "DCRE":
            if (state === 0) {
                return false;
            }
            else {
                return state = state - 1
            }
        default:
            return state;
    }
}
export default updown;