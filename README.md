
# Demo on creating a React app with Material-UI and React routing integration

This repository contains the completed code for the demo.

## Create a react app
create-react-app windsurfaway-demo

cd windsurfaway-demo

npm start

## Import material-UI
cd windsurfaway-demo
npm install material-ui

## Create some sections
These will be defined in the components directory
cd src
mkdir Component
touch Component/About.js
touch Component/Surfing.js
touch Component/Tech.js

## Add a AppBar
We’ll add the appBar by editing App.js :

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <MuiThemeProvider>
          <AppBar
             title="Windsurfaway Demo"
           />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

*If you run the server this will return an error:*
Failed to compile.

./src/App.js
  Line 9:   'MuiThemeProvider' is not defined  react/jsx-no-undef
  Line 10:  'AppBar' is not defined            react/jsx-no-undef

## We need to import Multithemeprovider and AppBar
Add the following lines under the import statement in App.js:
*import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from ‘material-ui/AppBar';*

# Enable the material-ui Drawer
Our AppBar has a “hamburger’ icon but no actions or menu.  We want to enable a slide in menu.

## Import Drawer and MenuItem

Add the following lines under the import statements in App.js:
*import Drawer from 'material-ui/Drawer';
import MenuItem from ‘material-ui/MenuItem’;*


Define the initial state and a couple of methods for opening and closing the slide in menu
Within the App class define
*constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleDrawerToggle = () => this.setState({open: !this.state.open});
  handleDrawerClose = () => this.setState({open: false});*

Define the Drawer after the AppBar
*
          <MuiThemeProvider>
           <Drawer
             docked={false}
             width={200}
             open={this.state.open}
             onRequestChange={(open) => this.setState({open})}
             >
               <MenuItem
                 primaryText="Item 1"
               />
               <MenuItem
                 primaryText="Item 2"
               />
               <MenuItem
                 primaryText="Item 3"
               />
           </Drawer>
          </MuiThemeProvider>
*
