import React from 'react';
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SpeciesList from './SpeciesList'
import SpeciesForm from './SpeciesForm'
import OrganizationsList from './OrganizationsList'
import OrganizationsForm from './OrganizationsForm'

// import Comments from './Comments'
// import CommentInput from './CommentInput'



const Router = () => {
    return (

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/species' element={<SpeciesList/>} />
            <Route path='/form' element={<SpeciesForm/>} />
            <Route path='/organizations' element={<OrganizationsList/>} />
            <Route path='/orgform' element={<OrganizationsForm/>} />
            {/* <Route path='/commments' element={<Comments/>} />
            <Route path='/commentinput' element={<CommentInput/>} /> */}
        </Routes>
        
    );
};

export default Router
