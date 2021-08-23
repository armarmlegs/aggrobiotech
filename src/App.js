import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/index";
import { Switch, Route } from "react-router-dom";
import ComCrops from "./Pages/CommercialCrops";
import FoodCrops from "./Pages/FoodCrops";
import FruitsVeggies from "./Pages/FruitsVeggies";
import contactForm from "./Pages/contactForm";
import NinjaScroll from "./components/NinjaScroll";
import Services from "./Pages/Services";
import About from "./Pages/About";



const App = () => {
  return (
    <Router>
      
      <NinjaScroll />
      
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ComCrops" component={ComCrops} exact />
        <Route path="/FoodCrops" component={FoodCrops} exact />
        <Route path="/FruitsVeggies" component={FruitsVeggies} exact />
        <Route path="/ContactForm" component={contactForm} exact />
        <Route path="/Services" component={Services} exact />
        <Route path="/About" component={About} exact />
      </Switch>
      
    </Router>
  );
};

export default App;
