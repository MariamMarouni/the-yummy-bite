import './App.css'; // Importing the CSS file for styling the App component
import 'bootstrap/dist/css/bootstrap.min.css'; //since I used bootstrap for styling(I used bootstrap classes in my project), I need to import the bootstrap CSS file as well.

import { BrowserRouter } from 'react-router-dom';//I have 4 pages:Home,Menu,About,Contact.  I have used React Router for handling navigation between different pages in my applicationy. so I need to import BrowserRouter from react-router-dom to wrap my application and enable routing functionality.
import { Routes } from 'react-router-dom';//Here I put all the routes of my application.
import { Route } from 'react-router-dom'; //I use the Route component to define individual routes for each page. Each Route specifies a path and the component that should be rendered when the user navigates to that path. For example, when the user goes to "/menu", the Menu component will be rendered.

import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';

import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';

function App() { //This is my main component,My project start here.

    return (

        <BrowserRouter>
         <NavBar />
         <Routes> 
          <Route path="/" Component={Home}/>

          <Route path="/menu" Component={Menu} />

          <Route path="/about" Component={About} />

          <Route path="/contact" Component={Contact}/>
        </Routes>
       
        <Footer /> 
        
        </BrowserRouter>

    );
}

export default App;
//Note:<BrowserRouter> Means the React Router start working.
// <Routes> This is where I define all the routes for my application.So I can move from path to another.
//<NavBar /> showing the navbar ,<Footer /> Show the footer