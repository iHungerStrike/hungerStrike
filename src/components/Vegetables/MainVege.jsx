import React, { useState, useEffect } from "react";
import Vegetables from "./Vegetables";
import VegeDetails from "./VegeDetails";
import { NavLink as Link, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import VegeCarousel from "./Carousel/Carousel";
import "./styles.css";

const MainVege = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
      .then((response) => setGoods(response.data.results));
  }, []);

  return (
    <div>
      <div>
        <VegeCarousel />
        <div className="ContentGridVege">
          <ul className="Container">
            {goods.map((good) => (
              <Link to={`/vegetables/${good.id}`}>
                <li className="Content">{good.name}</li>
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
