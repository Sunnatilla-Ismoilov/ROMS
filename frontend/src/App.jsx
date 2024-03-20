import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Splashscreen from './components/splashscreen/Splashscreen';
// import './global/globals.scss'
import Homepage from './pages/home/Homepage';
import About from './components/about/About';
import Header from './components/header/Header';
import Restaurants from './components/restaurants/Restaurants';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 2000);
  }, [navigate]);

  return loading ? <Splashscreen /> : null;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
