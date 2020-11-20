import React, { useState, useEffect } from "react";
import axios from "axios";
import CardVege from "./CardVege"
import { NavLink as Link} from "react-router-dom";


import './styles.css';

const Goods = () => {
  const [goods, setGoods] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/fa107af3-65bc-406c-830e-1003fd542f0c`)
      .then((response) => setGoods(response.data.results))

  }, []);

  return (
       
      <div className="grid">
        {goods.map((good)=> (
          <Link to={`/vegetables/${good.id}`}>
                <CardVege key={good.id} {...good} />
            </Link>
                ))}
        </div>
  );
};

export default Goods;

