import React, {Component} from 'react';
import './App.css';
import * as d3 from 'd3'

import ContainerComponent from './components/container/container';

class App extends Component {
  render(){
    console.log(d3)
    return(

      <ContainerComponent />
      
    )
  }
}

export default App;
