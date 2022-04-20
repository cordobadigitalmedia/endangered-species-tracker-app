import React from 'react'
import { connect } from 'react-redux'
import { fetchOrgs } from '../../actions/organizationsActions'

class OrganizationsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOrgs()
    }
    
    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default connect(null, {fetchOrgs})(OrganizationsContainer)