import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import OrderNow from './Pages/OrderNow';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';

import { CartProvider } from './Context/CartContext';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>} />
        <Route path="/OrderNow" element={<OrderNow />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
