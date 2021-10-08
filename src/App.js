
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import TopNav from "./components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Megadeth from "./components/Megadeth";
import HipHop from "./components/HipHop";
import Jazz from "./components/Jazz";

function App() {
  return (
    <>
      <Router>
      <NavigationBar />
      <TopNav />
      <Megadeth />
      <HipHop />
      <Jazz />
    </Router>
     
       </>
  );
}

export default App;
