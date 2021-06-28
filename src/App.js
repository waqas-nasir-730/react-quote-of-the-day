import React, { Component } from "react";
import "./styles.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Quotes from "./components/Quotes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    };
  }

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Quote Of The Day
            </Typography>
          </Toolbar>
        </AppBar>
        <Quotes />
      </>
    );
  }
}

export default App;
