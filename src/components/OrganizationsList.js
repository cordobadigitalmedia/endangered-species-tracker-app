// import React from 'react'
// import { connect } from 'react-redux'


// // import Card from "@material-ui/core/Card";
// // import CardContent from "@material-ui/core/CardContent";
// // import Typography from "@material-ui/core/Typography";
// // import Button from "@material-ui/core/Button";
// // import CardActions from "@material-ui/core/CardActions";


// const OrganizationsList = ({ orgs }) => {
//     return (
//         <div> 
    
//         <h1 ><center>Organizations</center></h1>
       
//         {orgs.map(org => 
//              <ul key={org.id}> <br></br>
//                 <li >
//                     NAME: {org.name} <br></br>
//                     WEBSITE: {org.website} <br></br>
//                 </li>
//                 </ul>  
//          )}
//     </div> 
//     )
// }

// const mapStateToProps = state => {
//     return {orgs: state.orgs}
// }

// export default connect(mapStateToProps)(OrganizationsList)

// -----------------------------------------------------
// const mapStateToProps = state => {
//     return {species: state.species}
// }
// export default connect(mapStateToProps)(SpeciesList)

import React from 'react'
import { connect } from 'react-redux'

const OrgsList = ({ orgs }) => {
    return (
        <div> 
        <h1 ><center>Organizations</center></h1>
            
        {orgs.map(orgs => 
             <ul key={orgs.id}> <br></br>  

                <li >
                    NAME: {orgs.name} <br></br>
                    STATUS: {orgs.website} <br></br>
                    
                </li>
                </ul> 
    )}
    </div> 
    )
}

const mapStateToProps = state => {
    return {orgs: state.orgs}
}
export default connect(mapStateToProps)(OrgsList)