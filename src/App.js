import React, { Component } from 'react';
import {Route} from 'react-router-dom'


import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router-dom'

import Surfing from './Component/Surfing';
import About from './Component/About';
import Tech from './Component/Tech';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleDrawerToggle = () => this.setState({open: !this.state.open});
  handleDrawerClose = () => this.setState({open: false});

  render() {
    return (
      <div>
         <MuiThemeProvider>
          <AppBar
             title="Windsurfaway Demo"
             onLeftIconButtonClick={this.handleDrawerToggle}
           />
         </MuiThemeProvider>
         <MuiThemeProvider>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem
                primaryText="About"
                containerElement={<Link to="/about" />}
                onClick={this.handleDrawerClose}
              />
              <MenuItem
                primaryText="Surfing"
                containerElement={<Link to="/surfing" />}
                onClick={this.handleDrawerClose}
              />
              <MenuItem
                primaryText="Tech"
                containerElement={<Link to="/tech" />}
                onClick={this.handleDrawerClose}
              />
          </Drawer>
         </MuiThemeProvider>
         <MuiThemeProvider>
           <Route exact={true} path={'/about'} component={About}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
           <Route exact={true} path={'/surfing'} component={Surfing}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
           <Route exact={true} path={'/tech'} component={Tech}/>
        </MuiThemeProvider>

      </div>

    );
  }
}

export default App;
