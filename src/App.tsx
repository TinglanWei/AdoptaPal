import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { PetList } from './components/PetList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PetDetails } from './components/petDetails';
import { PetAdoptionForm } from './components/PetAdoptionForm';
import Footer from './components/Footer';
import Frontpage from './components/Frontpage';
import { OwnerList } from './components/OwnerList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/AdoptaPal" element={<div><Frontpage /> <PetList /></div>}></Route>
          <Route path="/AdoptaPal/details/:id" element={<PetDetails />}></Route>
          <Route path="/AdoptaPal/adoptions/:id" element={<PetAdoptionForm />}></Route>
          <Route path="/AdoptaPal/dogs" element={<PetList></PetList>}></Route>
          <Route path="/AdoptaPal/find-owner" element={<OwnerList></OwnerList>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
