import React from 'react'
import { connect } from 'react-redux'

const SpeciesList = ({ species }) => {
    return (
        <div>
        <h1>Endangered Species:</h1>
        {species.map(species => 
            <ul key={species.id}>
                <img src={species.image_url} width='500' height='auto'/>
                <li >
                    NAME: {species.name} <br></br>
                    STATUS: {species.status} <br></br>
                    POPULATION: {species.population} <br></br>
                    RATE OF DECLINE: {species.rate_of_decline} <br></br>
                    HABITAT: {species.habitat} <br></br>
                    PLACES: {species.places} <br></br>
                    THREATS: {species.threats}<br></br>
                    CONSERVATION EFFORTS: {species.conservation_efforts} 
                </li>
            </ul>
    )}
    </div>
    )
}

const mapStateToProps = state => {
    return {species: state.species}
}

export default connect(mapStateToProps)(SpeciesList)