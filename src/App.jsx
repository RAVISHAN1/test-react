import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginBoxed from './pages/Authentication/LoginBoxed';
import About from './pages/Authentication/LoginBoxed';
import Contact from './pages/Authentication/LoginBoxed';

function App() {
  return (
    <Router>
      {/* <nav className="flex justify-center space-x-4 p-4 bg-gray-800 text-white">
        <Link to="/" className="hover:text-blue-400">LoginBoxed</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<LoginBoxed />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
