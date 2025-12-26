import React, { Component } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header title="playCodes - Multimedia" />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
