import React, { useState, useEffect } from "react";
import Vegetables from "./Vegetables";
import VegeDetails from "./VegeDetails";
import { NavLink as Link, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import VegeCarousel from "./Carousel/Carousel";
import "./styles.css";
import HomeIcon from "@material-ui/icons/Home";


const MainVege = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/fa107af3-65bc-406c-830e-1003fd542f0c`)
      .then((response) => setGoods(response.data.results));
  }, []);

  return (
    <div>
      <div>
        <VegeCarousel />
          <div className="IconHome">
          <Link to={`/`}>
            <HomeIcon fontSize="large" /> Home
          </Link>
          </div>
        <div className="ContentGridVege">
          <ul className="Container">
            {goods.map((good) => (
              <Link to={`/vegetables/${good.id}`}>
                <li key={good.id} className="Content">{good.name}</li>
              </Link>
            ))}
          </ul>
          <Switch>
            <Route exact path="/vegetables" component={Vegetables} />
            <Route path="/vegetables/:id" component={VegeDetails} />
            <Redirect to="/vegetables" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MainVege;
