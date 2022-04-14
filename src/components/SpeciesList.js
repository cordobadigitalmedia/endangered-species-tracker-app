import React from 'react'
import { connect } from 'react-redux'

// import { Button } from 'react-bootstrap'
// import { Card } from '@material-ui/core'
// import { Col } from 'react-bootstrap/Col'

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";



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
                    <button onClick={this.handleClick}>Delete</button>
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


