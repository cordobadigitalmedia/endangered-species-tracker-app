export const speciesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SPECIES':
            return action.payload
        case 'ADD_SPECIES':
            return [...state, action.payload]
        // case 'DELETE_SPECIES':
        //     return [ ...state.slice, action.payload]
        default:
            return state
    }
}