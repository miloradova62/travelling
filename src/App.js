import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Offers from './components/pages/Offers';
import SignUp from './components/pages/SignUp';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/offers' element={ <Offers />} />
          <Route path='/sign-up' element={ <SignUp />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
