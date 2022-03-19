import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addSpecies } from '../actions/speciesActions'

class SpeciesForm extends Component {

    state = { 
        name: '',
        status: '',
        population: '',
        rate_of_decline: '',
        habitat: '',
        places: '',
        threats: '',
        conservation_efforts: '',
        image_url: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addSpecies(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add to our list of endangered species<br></br> </label>

                <label>Name </label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                <br/>

                <label>Status </label>
                <input type='text' value={this.state.status} onChange={this.handleChange} name='status'/>
                <br/>

                <label>Population </label>
                <input type='text' value={this.state.population} onChange={this.handleChange} name='population'/>
                <br/>

                <label>Rate of Decline </label>
                <input type='text' value={this.state.rate_of_decline} onChange={this.handleChange} name='rate_of_decline'/>
                <br/>

                <label>Habitat </label>
                <input type='text' value={this.state.habitat} onChange={this.handleChange} name='habitat'/>
                <br/>

                <label>Places </label>
                <input type='text' value={this.state.places} onChange={this.handleChange} name='places'/>
                <br/>

                <label>Threats </label>
                <input type='text' value={this.state.threats} onChange={this.handleChange} name='threats'/>
                <br/>

                <label>Conservation Efforts </label>
                <input type='text' value={this.state.conservation_efforts} onChange={this.handleChange} name='conservation_efforts'/>
                <br/>

                <label>Image URL </label>
                <input type='text' value={this.state.image_url} onChange={this.handleChange} name='image_url'/>
                <br/>

                <input type='submit' value='Create Species' />


            </form>
        );
    }
}

export default connect(null, { addSpecies })(SpeciesForm);