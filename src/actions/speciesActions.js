export const fetchSpecies = () => {
    return dispatch => {
        fetch('http://[::1]:3000/species')
        .then(resp => resp.json())
        .then(species => dispatch({type: 'FETCH_SPECIES', payload: species}))
    }
}

export const addSpecies = (species) => {
    return dispatch => {
        fetch('http://[::1]:3000/species', {
            method: 'POST',
            body: JSON.stringify(species),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(species => dispatch({type: 'ADD_SPECIES', payload: species}))
    }
}

// export const deleteSpecies = (species) => {
//     return dispatch => {
//         fetch('http://[::1]:3000/species', {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(resp => resp.json())
//         .then(json => dispatch({type: 'DELETE_SPECIES', payload: species}))
//     }
// }