import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Register';
import Navbar from './Navbar'; 
import Login from './Login';
import store from './store';
import Dashboard from './Dashboard';
import Search from './Search';
import Favorites from './Favorites';
import Footer from './Footer';

const App = () => {
  return (
<Provider store={store}>
  <div>
    <Router>
    <Navbar /> 
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/fav" element={<Favorites/>} />
      </Routes>
    <Footer />
    </Router>
  </div>
</Provider>
);
};

export default App;