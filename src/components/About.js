import React from 'react';
import { NavLink } from "react-router-dom";

// import { connect } from 'react-redux'
import Link from 'react'
import button from 'react'
// import LinkButton from './LinkButton'


class About extends React.Component {

    render() {
     return (
        <div>
                {/* On going learning happening...page under construction...figuring out how to create link to external site from within Router :)  */}
                {/* <br></br> 
                <br></br>  */}
               This site was developed using resources that you can refer to for additional information:<br></br>
               {/* <Link to="https://www.worldwildlife.org/">WWF </Link> "https://www.worldwildlife.org/" <br></br> */}
               "https://www.worldwildlife.org/" <br></br>
               "https://www.nwf.org/" <br></br>
               "https://aldf.org/" <br></br>
               "https://www.awf.org/"<br></br>
        
             
               {/* <a href="https://github.com/Nausheen701/endangered-species-tracker-api"></a> */}
           

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