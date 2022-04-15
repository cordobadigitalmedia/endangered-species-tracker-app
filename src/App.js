
import React from 'react' 
import SpeciesContainer from './components/SpeciesContainer'
import OrganizationsContainer from './components/OrganizationsContainer'
import Router from './components/Router'
import Navbar from './components/Navbar'




const App = () => {
  return (
    <div>
      <Navbar />
      <SpeciesContainer/>
      <OrganizationsContainer/>
      <Router />
    
    </div>
  )
}

export default App;
