import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar/navBar";
import Search from "./component/search/search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
