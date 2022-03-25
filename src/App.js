// import logo from './logo.svg';
// import './App.css';

import React from 'react' 
import SpeciesContainer from './components/SpeciesContainer'
// import SpeciesList from './components/SpeciesList'
import Router from './components/Router'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
       < Navbar />
       
      <SpeciesContainer/>
      <Router />
    </div>
  )
}

export default App;
