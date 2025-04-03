import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Packages from './pages/Packages';
import ContactUs from './pages/ContactUs';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Create from './pages/create';
import EditPost from './pages/editPost';
import Admin from './pages/Admin';
import UserHome from "./pages/UserHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/userhome" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
