import './App.css';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
const App = () => {
  const user = false; //Only if user is true then he will be able to see the /movies,/series,/watch,  //If no user then Navigate will redirect the user to register or login
  return (
  <Router>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/register" replace />}/>  
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />}/>
        {user && 
          <>
            <Route path='/movies' element={<Home type="movie"/>}/> {/* This route will not be having effect of proxy so /movies will simply mean to add the /movies to localhost:3000 that is of client_2,it means proxy will be having effect only on axios */}
            <Route path='/series' element={<Home type="series"/>}/>
            <Route path='/watch' element={<Watch/>}/>
          </>
        }
      </Routes>
  </Router>
  );
}


export default App;
