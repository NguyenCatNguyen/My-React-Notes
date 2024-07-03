import './App.css';
import {BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Nav from './Nav';

function App() {
  return(
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )}

export default App;
