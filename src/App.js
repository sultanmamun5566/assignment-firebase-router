
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Doctor from './pages/Doctor/Doctor';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/details/:doctorId' element={<PrivateRoute><Details></Details> </PrivateRoute>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
