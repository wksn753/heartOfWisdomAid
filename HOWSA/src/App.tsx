
import { Route, BrowserRouter, Routes,} from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Donate from './pages/Donate/Donate';
import Root from './pages/Root';
import ErrorPage from './pages/Error/ErrorPage';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
