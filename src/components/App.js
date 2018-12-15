import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import List from './List';
import Header from './Header';
import Detail from './Detail';
import Create from './Create';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/create" component={Create} />
      </div>
    </Router>
    );
  }
}
export default App;
