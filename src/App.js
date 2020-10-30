import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter as  Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import {AnimatePresence} from 'framer-motion'
import Contact from './components/Contact';

function App() {
  
  return (
    <Router>
    <div className="App">
      <div className="container app-container">
        <div className="row app-row">
          <div className="col-lg-3">  
             <Sidebar></Sidebar>
          </div>
          <div className="col-lg-9 main-content">  
              <Navbar></Navbar>
              <AnimatePresence>
              <Switch >
                <Route exact path="/">
                  <About></About>
                </Route>
                <Route path="/resume">
                  <Resume></Resume>
                </Route>
                <Route path="/projects">
                  <Projects></Projects>
                </Route>
                <Route path="/contact">
                  <Contact></Contact>
                </Route>
                <Route >
                    <Redirect to="/"></Redirect>
                </Route>
              </Switch>
              </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
