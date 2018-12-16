import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import '../style/List.css';

class List extends React.Component {
  constructor(){
    super();
    this.state = {
      Loading: false,
      books : [],
      error: null,
      page:1,
    };
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }
  componentDidMount(){
    this.fetchBooks();
  }
  fetchBooks(){
    this.setState({Loading: true});
    const {page} = this.state;
    fetch(`http://5ad7cd2d42a4a50014d5f2ce.mockapi.io/api/v1/books?page=${page}&limit=5`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then((data) => {
        this.setState({
          books: data,
          Loading: false});
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  handlePaginationClick(direction){
    let nextPage = this.state.page;
    nextPage=direction === 'next'?nextPage+1:nextPage-1;
    this.setState({page:nextPage},()=>{
      this.fetchBooks();
    });
  }
  render(){
    const{ books, page} = this.state;
    if(this.state.Loading){
      return <div>Loading ....</div>
    }
    return (
      <div>
        <div className="Table-container">
          <table className="Table">
              <thead className="Table-head">
                <tr>
                  <th>id</th>
                  <th>publisher</th>
                  <th>name</th>
                  <th>author</th>
                  <th>view</th>
                </tr>
              </thead>
              <tbody className="Table-body">
                  {books.map((books) =>(
                    <tr key={books.id}>
                      <td>
                        <span className="Table-rank">{books.id}</span>
                      </td>
                      <td>
                        <span className="Table-dollar"></span>
                        {books.yayinevi}
                      </td>
                      <td>
                        <span className="Table-dollar"></span>
                        {books.Ad}
                      </td>
                      <td>
                        <span className="Table-dollar"></span>
                        {books.yazar}
                      </td>
                      <td>
                        <Link to={'/detail/' + books.id } style={{color: 'white'}}>View</Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
          </table>
        </div>
        <Pagination
          page={page}
          handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}
export default List;
