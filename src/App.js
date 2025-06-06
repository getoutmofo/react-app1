
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Bmr from './components/Bmr';
import About from './components/About';
import Health from './components/Health';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Form/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/bmr" element={<Bmr/>} />
          <Route path="/" element={<Health/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
