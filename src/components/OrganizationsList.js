import React from 'react'
import { connect } from 'react-redux'

const OrgsList = ({ orgs }) => {
    return (
        <div> 
        <h1 ><center>Organizations Saving Endangered Species</center></h1>

            World Wildlife Fund: https://www.worldwildlife.org/ <br></br>

            International Rhino Foundation: https://rhinos.org/ <br></br>
        
            Jane Goodall Institute: https://www.janegoodall.org/ <br></br>

            Panthera: https://panthera.org/ <br></br>
 
            Animal Legal Defense Fund: https://aldf.org/ <br></br>

            Wildlife Conservation Society: https://www.wcs.org/ <br></br>

            Africa Wildlife Foundation: https://www.awf.org/
{/* 
        {orgs.map(org =>
             
             <ul key={org.id}> <br></br>  
                <li >
                    NAME: {org.name} <br></br>
                    WEBSITE: {org.website} <br></br>  
                </li>
               </ul> 
         )} */}
        
        </div> 
    )
}

const mapStateToProps = state => {
    return {orgs: state.orgs}
}

export default connect(mapStateToProps)(OrgsList)