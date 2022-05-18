import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
