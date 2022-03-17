export const fetchSpecies = () => {
    return (dispatch) => {
        fetch('http://[::1]:3000/species')
        .then(resp => resp.json())
        .then(species => console.log('fetchSpecies', species))
    }
}