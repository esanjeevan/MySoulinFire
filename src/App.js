import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import GalaryContainer from './containers/PaintingGalary/GalaryContainer';
import AboutMe from './containers/AboutMe/AboutMe';

class App extends Component {
  render () {
    return (
      <div>
       <Layout>
         {/* <GalaryContainer/>  
         <AboutMe/>*/}  
         
         </Layout> 
      </div>
    );
  }
}

export default App;
