import React from 'react'
import { connect } from 'react-redux'

const OrgsList = ({ orgs }) => {
    return (
        <div> 
        <h1 ><center>Organizations Saving Endangered Species</center></h1>
            <p><center>
                World Wildlife Fund: www.worldwildlife.org <br></br>

            International Rhino Foundation: rhinos.org <br></br>
        
            Jane Goodall Institute: www.janegoodall.org <br></br>

            Panthera: panthera.org <br></br>
 
            Animal Legal Defense Fund: aldf.org <br></br>

            Wildlife Conservation Society: www.wcs.org <br></br>

            Africa Wildlife Foundation: www.awf.org
           </center></p>


            {/* {orgs.map(org =>
                <ul key={org.id}>
                    <li> {org.name} </li>
                </ul>)} */}

         {/* {orgs.map( org =>
             <ul key={org.id}> 
                <li >
                    NAME: {org.name} <br></br>
                    WEBSITE: {org.website} <br></br>  
                </li>
               </ul> 
         )}
         */}
        
        </div> 
    )
}

const mapStateToProps = state => {
    return {orgs: state.orgs}
}

export default connect(mapStateToProps)(OrgsList)


// function Websites() {
//     useEffect(() => {
//         window.location.href = "https://www.worldwildlife.org/"
//     }, [])
// }

// export default Websites