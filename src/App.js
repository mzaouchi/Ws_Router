import { useState } from 'react';
import './App.css';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Profil from './Components/Profil';

function App() {
  const [users,setUsers] = useState([
    {name : "Mohamed", age : 31, id : Math.random()},
    {name : "Aziz", age : 18, id : Math.random()},
    {name : "Brahim", age : 28, id : Math.random()}
  ])
  return (
    <div>
      {/* <h1>Workshop Router</h1>
      <ListUsers users={users}/> */}

      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/brahim' element={<ListUsers users={users}/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/profil/:id' element={<Profil users={users}/>}/>
      </Routes>

      

    </div>
  );
}

export default App;
