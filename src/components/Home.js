import React, { Component }from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import Map from './Map'
import '../assets/styles/Home.css';
import app from '../constants/apiconfig'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import DashBoardIcon from '@material-ui/icons/Dashboard';
import AccesibilityIcon from '@material-ui/icons/Accessibility'
import ContactIcon from '@material-ui/icons/ContactSupport'
import ListItemText from '@material-ui/core/ListItemText';
import BugIcon from '@material-ui/icons/BugReport'


 class Home extends Component {
   // eslint-disable-next-line no-useless-constructor
   constructor(props) {
     super(props);
     this.state = {
      user: this.props.user,
      fullname: "John",
      email: "john@john.com",
      database_username: '',
      left: false
    }
     
  }
  signOut () {
    app.auth().signOut().then(function() {
      alert('Signed out')
    },function(error) {
      alert('cant sign out')
    });
  }
  // addTest () {
  //   console.log("Started Database Test")
  //   const db = app.firestore().collection('users').doc(this.state.user.uid);
  //   const {fullname , email} = this.state;
  //   db.set({
  //       fullname,
  //       email
  //   }).then(console.log("Completed Database Add"))
  //   .catch((error) => alert(error))
  // }
  toggleDrawer (open)  {
    this.setState({
      left : open
    })
  };
  // getTest () {
  //   console.log("Started Database get test")
  //   console.log(this.state.user.uid)
  //   const db = app.firestore().collection(`users/${this.state.user.uid}/Progress`);
  //   let all = db.get().then(snapshot => {
  //     snapshot.forEach(doc => {
  //       console.log(doc.data())
  //     })
  //   })
  // }
  render () {
    //this.addTest();
    // this.getTest();
    return (
      
      <div className="root">
        <AppBar position="static" className="nav-bar">
          <Toolbar>
            <IconButton  onClick={() => this.toggleDrawer(true)} edge="start" className="menuButton" color="inherit" aria-label="Menu">
              <p className="title">
                Care++
              </p>
            </IconButton>
            {/* <h2 className="title">
              Gator Pal
            </h2> */}
            {/* <Button color="inherit">
              <Link to="/" className="link color-white"> 
                Main
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/therapy" className="link color-white"> 
                Therapy
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/analytics" className="link color-white"> 
                Analytics
              </Link>
            </Button> */}
            <Button color="inherit" onClick={this.signOut}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={() => this.toggleDrawer(false)}>
          <div
            className="list"
            role="presentation"
          >
            <List>
              <Link to="/" className="link">
                <ListItem button key={'Home'}> 
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
              </Link>
              <Link to="/map" className="link">
                <ListItem button key={'Therapy'}>
                  <ListItemIcon><AccesibilityIcon/></ListItemIcon>
                  <ListItemText primary={'Therapy'} />
              </ListItem>
              </Link>
              <Link to="/contact" className="link">
                <ListItem button key={'Contact'}>
                    <ListItemIcon><ContactIcon /></ListItemIcon>
                    <ListItemText primary={'Contact'} />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem button key={'Submit a Bug Report'}>
                <ListItemIcon><BugIcon/></ListItemIcon>
                <ListItemText primary={'Submit a Bug Report'} />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Route exact path="/" component={Home}></Route>
        <Route path="/map" component={Map}></Route>
      </div> 
    )
  }
};
export default Home;