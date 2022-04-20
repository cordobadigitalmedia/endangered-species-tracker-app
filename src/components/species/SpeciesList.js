import React from 'react'
import { connect } from 'react-redux'


import LikesCounter from '../LikesCounter'

// class SpList extends React.Component {
//     state = {
//         count: 0
//     }
//     handleClick = e => {        
//     this.increment()
//     }

//     increment = () => {
//         this.setState({count: this.state.count + 1  })
//     }
// }

const SpeciesList = ({ species }) => {
    
    return (
        <div class='row' style={{}}> 
        <h1 ><center>Endangered Species</center></h1>
       
        {species.map(species => 
             <ul class="col s12 m2 20" 
             Card
             style={{
               width: 470,
               backgroundColor: "gray",
             }} key={species.id}> <br></br>
                <img alt='endangered species' src={species.image_url} width='400' height='auto'/>
                <li >
                    NAME: {species.name} <br></br>
                    STATUS: {species.status} <br></br>
                    POPULATION: {species.population} <br></br>
                    RATE OF DECLINE: {species.rate_of_decline} <br></br>
                    HABITAT: {species.habitat} <br></br>
                    PLACES: {species.places} <br></br>
                    THREATS: {species.threats}<br></br>
                    CONSERVATION EFFORTS: {species.conservation_efforts} <br></br>
                    {/* <button onclick={this.handleClick}>Like</button> */}
                    <button>Like</button>
                    {/* <span> {this.state.count}</span> */}
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


