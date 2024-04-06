import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Tour from './Pages/Tour';
import Programs from './Pages/Programs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tour" element={<Tour />} />
        <Route path="programs" element={<Programs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
