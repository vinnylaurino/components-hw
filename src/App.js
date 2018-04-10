import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Main from './components/Main.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import SocialLinks from './components/SocialLinks.js';
import Footer from './components/Footer.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Main />
        <Projects />
          <Resume />
          <Contact />
            <SocialLinks />
            <Footer />
      </div>
    )
  };
};

export default App;
