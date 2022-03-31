import React from 'react'
import { connect } from 'react-redux'

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";

const OrganizationsList = ({ orgs }) => {
    return (
        <div class='row' style={{}}>
        <h1 ><center>Organizations</center></h1>
       
        {orgs.map(org => 
             <ul class="col s12 m2 20" 
             Card
             style={{
               width: 470,
               backgroundColor: "gray",
             }} key={org.id}> <br></br>
                {/* <img src={species.image_url} width='400' height='auto'/> */}
                <li >
                    NAME: {org.name} <br></br>
                    WEBSITE: {org.website} <br></br>
                   
                </li>
                </ul>
            
                
           
           
           
    )}
    </div> 
    )
}


const mapStateToProps = state => {
    return {orgs: state.orgs}
}

export default connect(mapStateToProps)(OrganizationsList)