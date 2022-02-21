
import './App.css';
import About from './Components/About';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Presentation from './Components/Presentation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   <Router>
     <Routes>
     <Route exact path="/" element={<><Header/><Feature/><About/><Presentation/><Contact/></>}></Route>
     <Route exact path="/home" element={<Header/>}></Route>
     <Route exact path="/feature" element={<Feature/>}></Route>
     <Route exact path="/about" element={<About/>}></Route>
     <Route exact path="/presentation" element={<Presentation/>}></Route>
     <Route exact path="/Contact" element={<Contact/>}></Route>
     </Routes>
     </Router>
  );
}

export default App;
