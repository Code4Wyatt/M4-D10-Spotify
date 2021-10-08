
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import TopNav from "./components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import MusicRow from "./components/MusicRow";


function App() {
  return (
    <Router>
      <NavigationBar />
      <TopNav />
      <MusicRow searchString="queen"/>
    </Router>
  );
}

export default App;
