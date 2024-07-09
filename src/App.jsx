import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Nextpage from './components/Nextpage';


function App() {
  return (
    <div>
    <Router >
      <Routes>
        <Route path="/" element={<Main />} />
      <Route path='/next' element={<Nextpage/>}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
