import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import GetInvolved from './pages/GetInvolved';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          {/* Other routes will be added later */}
          <Route path="*" element={<div className="container-custom py-20"><h1>Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 