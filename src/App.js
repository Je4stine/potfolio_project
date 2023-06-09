import './App.css';
import FoodAr from './Screens/FoodAr';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Screens/About';
import Faq from './Screens/Faq';
import Dinner from './Screens/Dinner';
import FoodDetails from './Screens/FoodDetails';



function App() {
  return (
    <div className="App">
    <Router>
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/arview" element={<FoodAr/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path ="/faqs" element={<Faq/>}/>
            <Route path ="/dinner" element={<Dinner/>}/>
            <Route path ="/details" element={<FoodDetails/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
