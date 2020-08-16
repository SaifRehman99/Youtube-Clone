import React from 'react';
import './App.css';

import Header from './Header'
import Siderbar from './Siderbar'
import RecommendedVideos from './RecommendedVideos'

function App() {
  return (
    <div className="App">
     <Header /> 

     <div className="app__page">
     <Siderbar /> 
     <RecommendedVideos /> 

     </div>
    </div>
  );
}

export default App;