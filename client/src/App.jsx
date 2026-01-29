import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ContactUs from './components/ContactUs.jsx';
import CarDetails from './components/CarDetails.jsx';
import AllCars from './components/AllCars.jsx';
import BookingPage from './components/BookingPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<AllCars />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
