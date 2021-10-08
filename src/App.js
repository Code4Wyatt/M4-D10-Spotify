
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import TopNav from "./components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Megadeth from "./components/Megadeth";


function App() {
  return (
    <Router>
      <NavigationBar />
      <TopNav />
      <Megadeth />
    </Router>
  );
}

export default App;
