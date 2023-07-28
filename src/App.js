
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home} from './components/home'; 
import {Entry} from './components/entry';
import {Navbar} from './components/navbar';
import {Entrydetail} from './components/entrydetail';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/entry' element={<Entry/>}>
        <Route path='entrydetail' element={<Entrydetail/>}/>
      </Route>
    </Routes> 
    </>
  );
}

export default App;
