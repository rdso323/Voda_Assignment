import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Albums from "./components/Albums";
import Search from "./components/Search";
import Photos from "./components/Photos";
import React, {Component} from 'react';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data_albums: null,
      data_users: null,
      data_photos: null,
      isLoaded: false,
    };
  }

  fetchData() {
    if (!this.state.isLoaded) {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((data_albums) => this.setState({ data_albums }));

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data_users) => this.setState({ data_users }));

      this.setState({ isLoaded: true });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData();
  };

  render(){
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/">
              <Search handleSubmit={this.handleSubmit}/>
              <Albums
                data_albums = {this.state.data_albums}
                data_users = {this.state.data_users}
              />
            </Route>
            <Route path="/pics/:topic" component={Photos}>
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;