import React from 'react';
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SpeciesList from './SpeciesList'
import SpeciesForm from './SpeciesForm'


const Router = () => {
    return (

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/species' element={<SpeciesList/>} />
            <Route path='/form' element={<SpeciesForm/>} />
        </Routes>
        
    );
};

export default Router
