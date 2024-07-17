import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Nextpage from './components/Nextpage';
import Appp from './components/demo/Appp';
import Apppp from './Loader';
import MatterComponent from './components/matter/MatterComponent';
import MixedShapes from './components/matter/MatterComponent';


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Apppp />} />
        <Route path='/box' element={<Appp/>}/>
        <Route path='/matterjs' element={<MixedShapes/>}/>
      
      </Routes>
    </Router>
    
  );
}

export default App;
