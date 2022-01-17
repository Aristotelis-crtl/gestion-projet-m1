import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="absolute bg-blueperso w-full h-3/5 bottom-0 z-999" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={List} />
        <Route path="/apropos" exact component={About} />
        <Route path="/ville/:ville" component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
