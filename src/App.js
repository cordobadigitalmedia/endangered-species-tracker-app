
import React from 'react' 
import SpeciesContainer from './components/species/SpeciesContainer'
import OrganizationsContainer from './components/organizations/OrganizationsContainer'
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

// const greeting = "Hello World"

// functional component

{/* <h1>{greeting}</h1> */}