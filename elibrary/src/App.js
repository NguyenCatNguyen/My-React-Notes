
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
    <div className="App">

      <Nav />
      <Route path="/" exact component={Home} /> // exact is used to match the exact path
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
