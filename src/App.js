import Homepage from "./components/Homepage/Homepage";
import Weather from "./components/Weather/Weather";
// import Vegetables from "./components/Vegetables/Vegetables";
import MainVege from "./components/Vegetables/MainVege"
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/weather" component={Weather} />
        {/* <Route path="/vegetables" component={Vegetables} /> */}
        <Route path="/vegetables" component={MainVege} />
        <Redirect to="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
