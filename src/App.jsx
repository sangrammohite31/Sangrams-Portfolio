import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Nextpage from './components/Nextpage';
import Appp from './components/demo/Appp';
import Apppp from './Loader';
import MatterComponent from './components/matter/MatterComponent';
import MixedShapes from './components/matter/MatterComponent';
import { Tiltbox } from "./components/tilt"


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Apppp />} />
        <Route path='/box' element={<Appp/>}/>
        <Route path='/matterjs' element={<MixedShapes/>}/>
        <Route path='/tilt' element={<Tiltbox/>}/>
      
      </Routes>
    </Router>
    
  );
}

export default App;
