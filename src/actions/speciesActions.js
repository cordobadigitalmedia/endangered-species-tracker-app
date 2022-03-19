export const fetchSpecies = () => {
    return dispatch => {
        fetch('http://[::1]:3000/species')
        .then(resp => resp.json())
        // .then(species => console.log('fetchSpecies', species))
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