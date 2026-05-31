import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';

import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';

function App() {

    return (

        <BrowserRouter>
         <NavBar />
         <Routes>
          <Route
                    path="/"
                    Component={Home}
                />

                <Route
                    path="/menu"
                    Component={Menu}
                />

                <Route
                    path="/about"
                    Component={About}
                />

                <Route
                    path="/contact"
                    Component={Contact}
                />

            </Routes>

            <Footer />

        </BrowserRouter>

    );
}

export default App;
