// frontend/src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUserForm from './components/CreateUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import './App.css';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/create' element={<CreateUserForm />} />
          <Route path='/update/:id' element={<UpdateUserForm />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
