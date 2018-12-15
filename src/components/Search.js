import React from 'react';
import { withRouter } from 'react-router-dom';
import '../style/Search.css';

class Search extends React.Component{
  constructor(){
    super();
    this.state={
      searchResults: [],
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    this.setState({ search:inputValue });

    fetch(`http://5ad7cd2d42a4a50014d5f2ce.mockapi.io/api/v1/books?filter=${inputValue}`)
    .then(response => {
      return response.json()
    })
    .then((result) => {
      this.setState({
        searchResults: result,
      });
    });
  }
  handleRedirect(id){
    this.setState({
      search:'',
      searchResults: [],
    });
    this.props.history.push(`/detail/${id}`);
  }
  renderSearchResults(){
    const {searchResults, search} = this.state;
    if(!search){
      return '';
    }
    if(searchResults.length > 0){
    return (
      <div className="Search-result-container">
        {searchResults.map(result => (
          <div
            key={result.Ad}
            className="Search-result"
            onClick={() => this.handleRedirect(result.id)}
          >
            {result.Ad}-{result.yazar}-{result.yayinevi}
          </div>
        ))}
      </div>
    )
   }
   return(
     <div className="search-result-container">
       <div className="Search-no-result">
         No results found.
       </div>
     </div>
   )
  }
  render(){
    const {search} = this.state;
    return(
      <div className="Search">
         <input
           className="Search-input"
           type="text"
           placeholder="Ara"
           onChange={this.handleChange}
           value={search}
         />
         {this.renderSearchResults()}
       </div>
    )
  }
}
export default withRouter(Search);
