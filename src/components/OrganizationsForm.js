import React from 'react';
import { connect } from 'react-redux'
import { addOrg } from '../actions/organizationsActions'

class OrganizationsForm extends React.Component {

    state = { 
        name: '',
        website: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addOrg(this.state)
        this.setState({
            name: '',
            website: ''
        })
        (alert ("Thanks for adding an organization working to save endangered species!") )
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add to our list of organizations helping save endangered species </label><br></br>

                <label>Organization Name </label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                <br/>

                <label>Website </label>
                <input type='text' value={this.state.website} onChange={this.handleChange} name='website'/>
                <br/><br></br>

                <input type='submit' value='Add Organization' />

            </form>
        );
    }
}

export default connect(null, { addOrg })(OrganizationsForm);