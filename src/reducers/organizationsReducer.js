export const organizationsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ORGS':
            return action.payload
        case 'ADD_ORG':
            return [...state, action.payload]
        default:
            return state
    }
}

