import React from 'react';
import { Routes , Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import SpeciesList from './SpeciesList'
// import Navbar from './Navbar'

const Router = () => {
    return (

        <Routes>
            {/* <Navbar /> */}
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/species' element={<SpeciesList/>} />
        </Routes>
        
    );
};

export default Router

// import React, { Component } from 'react'
// import {Switch, Route} from 'react-router-dom'

// import Home from './Home'
// import SpeciesList from './SpeciesList'
// import About from './About'


// const Router = () => {
//     return (
//         <Switch>
//             <Route exact path='/' component={Home}/>
//             <Route path='/about' component={About} />
//             <Route path='/Species' component={SpeciesList} />
//         </Switch>
        
//     )
// }

// export default Router