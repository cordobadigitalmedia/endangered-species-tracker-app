// import React from 'react'
// import { Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Link from 'react'
import button from 'react'
// import LinkButton from './LinkButton'


class About extends Component {

    render() {
     return (
        <div>
               This site was developed using resources that you can refer to for additional information:<br></br>
               "https://www.worldwildlife.org/" <br></br>
               "https://www.nwf.org/" <br></br>
               "https://aldf.org/" <br></br>
               "https://www.awf.org/"<br></br>
               <NavLink to="/about/wwf"> WWF </NavLink><br></br>
               <NavLink to="https://www.worldwildlife.org/">WWF  </NavLink><br></br>
               <a href="https://github.com/Nausheen701/endangered-species-tracker-api"></a>
           

            {/* <Link to="https://github.com/Nausheen701/endangered-species-tracker-api">
            <Button>
            <p>Click Me!</p>
            </Button>
            </Link> 
            
            <body>
            <a href='https://github.com/Nausheen701/endangered-species-tracker-api'></a>
            </body> */}

<br></br> <br></br> 
Project Links:<br></br> 
CLIENT-SIDE: https://github.com/Nausheen701/endangered-species-tracker-app <br></br> 
SERVER-SIDE: https://github.com/Nausheen701/endangered-species-tracker-api<br></br> 
BLOG POST:  <br></br> 
VIDEO TUTORIAL: <br></br> 
<input type="button" onClick="location.href='https://github.com/Nausheen701/endangered-species-tracker-api';" value="Go to Endangered Species API" />
{/* <Link to={{ pathname: "https://github.com/Nausheen701/endangered-species-tracker-api" }} target="_blank" />  */}
            
           


        </div>

       
    )
}}

export default About