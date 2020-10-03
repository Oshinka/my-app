import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Subscribe from './Pages/Subscribe/Subscribe';
import Gallery from './Pages/Gallery/Gallery';
import Education from './Pages/Education/Education';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/subscribe' component={Subscribe} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/education' component={Education} />
        </Switch>
      </div>
    );
  }
}

export default App;
