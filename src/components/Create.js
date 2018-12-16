import React from 'react';
import { Link } from 'react-router-dom';

class Create extends React.Component{
  constructor(){
    super();
    this.state={
      Ad:'',
      yazar: '',
      yayinevi: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
      e.preventDefault();
      fetch('http://5ad7cd2d42a4a50014d5f2ce.mockapi.io/api/v1/books', {
          method: 'POST',
          headers: {
                "Content-Type": "application/json"
            },
          body:JSON.stringify({
            Ad:this.state.Ad,
            yazar: this.state.yazar,
            yayinevi: this.state.yayinevi
          })
      }).then((res) => res.json())
      .then((data) =>  console.log(data))
      .catch((err)=>console.log(err))
    }
  handleChange(e){
    switch (e.target.name) {
      case "Ad":
        this.setState({Ad:e.target.value});
        break;
      case "yazar":
        this.setState({yazar:e.target.value});
        break;
      case "yayinevi":
        this.setState({yayinevi:e.target.value});
        break;
    }
  }
  render(){
    return(
      <div>
          <h1 >Create</h1>
          <form onSubmit={this.handleSubmit} className="signup-form">
            <div>
              <label>name:</label>
              <input name="Ad" value={this.state.Ad} onChange={this.handleChange}/>
            </div>
            <div>
              <label>author:</label>
              <input name="yazar" value={this.state.yazar} onChange={this.handleChange}/>
            </div>
            <div>
              <label>publisher:</label>
              <input name="yayinevi" value={this.state.yayinevi} onChange={this.handleChange}/>
            </div>
            <div>
              <input type="submit" value="Create"/>
            </div>
          </form>
      <Link to ="/" className="link">Go to homepage</Link>
    </div>
  );
 }
}
export default Create;
