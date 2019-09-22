import React, { Component }from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import '../assets/styles/Home.css';
import app from '../constants/apiconfig'
import {Link} from 'react-router-dom';
import checklogo from '../assets/check-mark.png'
import xlogo from '../assets/x-mark.png'
import Gmap from './GMap'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu'
import ListItemText from '@material-ui/core/ListItemText';
import BugIcon from '@material-ui/icons/BugReport'
import carelogo from '../assets/care++.svg'


 class Home extends Component {
   // eslint-disable-next-line no-useless-constructor
   constructor(props) {
     super(props);
     this.state = {
      user: this.props.user,
      userdata: [],
      recentdata: [
        {
          humidity: 0,
          temp: 0,
          fallen: false,
          heatindex: 0,
          date: 'Sun, 22 Sep 2019 05:21:45 GMT'
        }
      ],
      left: false,
      isFetching: false,
    }
     
  }
  componentDidMount() {
    this.fetchData();
    this.timer = setInterval(() => this.fetchData(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
  signOut () {
    app.auth().signOut().then(function() {
      alert('Signed out')
    },function(error) {
      alert('cant sign out')
    });
  }
  toggleDrawer (open)  {
    this.setState({
      left : open
    })
  };
  async fetchData() {
    try {
    this.setState({...this.state, isFetching: true})
    const response = await axios.get('https://shellhacks2019-1f061.appspot.com/markers');
    const secresponse = await axios.get('https://shellhacks2019-1f061.appspot.com/recent');
    console.log(secresponse.data[0])
    this.setState({...this.state, recentdata: secresponse.data, userdata: response.data, isFetching: false})
    }catch(e) {
      console.log(e);
      this.setState({...this.state, isFetching: false})
    }
  }
  render () {
    let TheImage = (this.state.recentdata[0].fallen === "false" || this.state.recentdata[0].fallen === false)? <img className="realness" src={checklogo}></img> : <img className="realness" src={xlogo}></img>
    return (
      <div className="root">
        <AppBar position="static" className="nav-bar">
          <Toolbar>
            <IconButton  onClick={() => this.toggleDrawer(true)} edge="start" className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Button color="inherit" onClick={this.signOut} className='put-right'>
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
        <div className="parent-container">
          <div className="other-container">
            <Paper className="actual-modal">
              <img className="shellhacks-logo added" src={carelogo}></img>
              <h2>Status of Patient</h2>
              {
                TheImage
              }
            </Paper>
          </div>
          <div className="right-container">
            <div className="the-container">
            <Paper className="paper-piece">
              <div>Temperature</div>
              <div className="otherdata">
                {
                  this.state.recentdata[0].temp
                }<span>&#176;</span>C
              </div>
            </Paper>
            <Paper className="paper-piece">
              <div>Humidity</div>
              <div className="otherdata">
              {
                this.state.recentdata[0].humidity
              }%
              </div>
            </Paper>
            <Paper className="paper-piece">
              <div>Heat Index</div>
              <div className="otherdata">
              {
                this.state.recentdata[0].heatindex
              }<span>&#176;</span>C
              </div>
            </Paper>
            <Paper className="paper-piece">
              <div>Last Update</div>
              <div className="Time">
              {
                this.state.recentdata[0].date.substring(0, 17)
              }
              </div>
              <div className="Time">
              {
                this.state.recentdata[0].date.substring(17)
              }
              </div>
            </Paper>
          </div>
            <Paper className="map-paper">
              <Gmap/>
            </Paper>
          </div>
        </div>
      </div> 
    )
  }
};
export default Home;