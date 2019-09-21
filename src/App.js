import React from 'react';
import app from './constants/apiconfig';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Home from './components/Home'
import Login from './Login'
import Signup from './Signup'
import PrivateRoute from './PrivateRoute'
import './App.css';



class App extends React.Component {
  state = { loading: true, authenticated: false, currentUser: null};
  componentDidMount() {//Changed from ComponentWillMount as it is legacy code
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const {authenticated, loading, currentUser } = this.state;
    if (loading) {
      return <p>Loading...</p>
    }
    return (
      <Router>
        <PrivateRoute
                exact path="/"
                component={Home}
                authenticated={authenticated}
                user = {currentUser}
        />
        <Route exact path="/login" component={Login}/>
        <Route exact path="signup" component={Signup}/>
      </Router>
    )
  }
  
}
export default App;
