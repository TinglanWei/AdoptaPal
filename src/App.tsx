import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { PetList } from './components/PetList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PetDetails } from './components/petDetails';
import { PetAdoptionForm } from './components/PetAdoptionForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/AdoptaPal" element={<PetList></PetList>}></Route>
          <Route path="/AdoptaPal/details/:id" element={<PetDetails />}></Route>
          <Route path="/AdoptaPal/adoptions/:id" element={<PetAdoptionForm />}></Route>
          <Route path="/AdoptaPal/dogs" element={<PetList></PetList>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
