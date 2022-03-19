import React, { Component } from 'react'
import { connect } from 'react-redux'

// import SpeciesForm from './SpeciesForm'
import { fetchSpecies } from '../actions/speciesActions'
import SpeciesForm from './SpeciesForm'

class SpeciesContainer extends Component {

    componentDidMount() {
        this.props.fetchSpecies()
    }
    render() {
        return (
            <div>
                Endangered species coming soon
                <SpeciesForm />
            </div>
        );
    }
}

export default connect(null, {fetchSpecies})(SpeciesContainer);


// import React, { Component } from 'react'

// class SpeciesContainer extends Component {
//     render() {
//         return (
//             <div>
//                 Endangered Species Coming
//             </div>
//         )
//     }
// }

// export default SpeciesContainer