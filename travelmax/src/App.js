import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import HotelContainer from './Containers/Hotel/HotelContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
         <Layout>
             <HotelContainer /> 
        </Layout>
      </div>
    );
  }
}

export default App;
