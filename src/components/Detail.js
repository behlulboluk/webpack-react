import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../style/link.css';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      Loading: false,
      book: [],
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ Loading: true });

    fetch('http://5ad7cd2d42a4a50014d5f2ce.mockapi.io/api/v1/books/' + this.props.match.params.id )
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then((data) => {
        this.setState({
          book: data,
          Loading: false
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  render() {
      const { book } = this.state;
      if (this.state.Loading) {
        return <div>Loading ....</div>
      }
      return (
        <div >
            <div >
              <h1>{book.Ad}</h1>
            </div>
            <div >
              <h1>Id : { book.id }</h1>
              <h1>author : { book.yazar }</h1>
              <h1>publisher : { book.yayinevi }</h1>
              <Link to ="/" className="link">Go to homepage</Link>
            </div>
        </div>
      );
  }
}

export default Detail;
