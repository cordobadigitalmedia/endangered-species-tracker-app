export const fetchOrgs = () => {
    return dispatch => {
        fetch('http://[::1]:3000/orgs')
        .then(resp => resp.json())
        .then(orgs => dispatch({type: 'FETCH_ORGS', payload: orgs}))
    }
}

export const addOrg = (org) => {
    return dispatch => {
        fetch('http://[::1]:3000/orgs', {
            method: 'POST',
            body: JSON.stringify(org),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(org => dispatch({type: 'ADD_ORG', payload: org}))
    }
}

// export const deleteOrg = (org) => {
//     return dispatch => {
//         fetch('http://[::1]:3000/orgs', {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(resp => resp.json())
//         .then(org => dispatch({type: 'DELETE_ORG', payload: org}))
//     }
// }