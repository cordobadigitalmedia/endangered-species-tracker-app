import React from 'react';
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SpeciesList from './species/SpeciesList'
import SpeciesForm from './species/SpeciesForm'
import OrganizationsList from './organizations/OrganizationsList'
import OrganizationsForm from './organizations/OrganizationsForm'



const Router = () => {
    return (

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/species' element={<SpeciesList/>} />
            <Route path='/form' element={<SpeciesForm/>} />
            <Route path='/organizations' element={<OrganizationsList/>} />
            <Route path='/orgform' element={<OrganizationsForm/>} />  
        </Routes>
        
    );
};

export default Router


{/* <Route path='/clickme' element={<Clickme/>} />
<Route path='/search' element={<SearchBar/>} /> */}

// import Clickme from './Clickme'
// import SearchBar from './SearchBar'