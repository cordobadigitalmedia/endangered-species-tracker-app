// import React from 'react'

// class SearchBar extends React.Component {
//       // setState = 0
//     state = { 
//         names: ['penguin', 'elephant', 'turtle'], 
//         searchTerm: ''
//     }

// editSearchTerm = (e) => {
//     this.setState({searchTerm: e.target.value})
// }

// dynamicSearch = () => {
//     return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
// }

// render(){
//     return(
//         <div>
//             <input
//                 type= 'text' 
//                 value = {this.state.searchTerm}
//                 onChange = {this.editSearchTerm}
//                 placeholder = 'Search for a species!'/>
//             <br></br>
//             <h3>Your search results</h3>
//             <SearchResultsContainer names = {this.dynamicSearch()}/>
//         </div>
//     )
// }

// }

// export default SearchBar