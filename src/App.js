// import logo from './logo.svg';
// import './App.css';

import React from 'react' 
import SpeciesContainer from './components/SpeciesContainer'
import SpeciesList from './components/SpeciesList'
import Router from './components/Router'

const App = () => {
  return (
    <div>
      <button onclick={<SpeciesList/>}>Endangered Species List</button>
      <SpeciesContainer/>
      <Router />
    </div>
  )
}

export default App;
