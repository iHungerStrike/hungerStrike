import React, { useState, useEffect } from "react";
import axios from "axios";
import VegeCarousel from "./Carousel/Carousel";
import CardVege from "./CardVege"
import VegeDetails from './VegeDetails';
import './styles.css';
import { NavLink as Link, Switch, Route } from "react-router-dom";

const Goods = () => {
  const [goods, setGoods] = useState([]);
  const [currentSelected, setCurrentSelected] = useState();
  let [displayedGoods] = useState([]);

  const handleDetails = (index) => {
    // console.log('name: ', name, 'value: ', value)
    setCurrentSelected(() => ({index}));
}

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
      .then((response) => setGoods(response.data.results))

  }, []);

  function handleClick(index) {
    // console.log(index);
    setCurrentSelected(index);
  }

  return (
    <div>
      <VegeCarousel />
    <div className="ContentGridVege">
        <ul className="Container">
          {goods.map((good) => (
            <Link to={`/vegetables/${good.id}`} 
            >
              <li 
              onClick={() => {
                const index = goods.findIndex((element) => element.id === good.id);
                setCurrentSelected(index)
            }} 
            className="Content">{good.name}</li>
              </Link>
          ))}
        </ul>
      <div className="grid">
        {goods.map((good)=> (
                <CardVege {...good} handleClick={handleClick}/>
                ))}
      </div>
        <Switch>
          <Route
              path="/vegetables/:id"
              component={() => <VegeDetails good={displayedGoods[currentSelected]} />}
            />
      </Switch>
  </div>
  </div>
  );
};

export default Goods;
