import Navbar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Search from './Components/Search/Search';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Search' element={<Search />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
