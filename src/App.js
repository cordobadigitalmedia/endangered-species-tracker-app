
import React from 'react' 
import SpeciesContainer from './components/SpeciesContainer'
import OrganizationsContainer from './components/OrganizationsContainer'
import Router from './components/Router'
import Navbar from './components/Navbar'

const greeting = "Hello World"

// functional component
const App = () => {
  return (
    <div>
      <Navbar />
      <SpeciesContainer/>
      <OrganizationsContainer/>
      <Router />
    <h1>{greeting}</h1>
    </div>
  )
}

export default App;
