import React, { useState, useEffect } from "react";
import axios from "axios";
import CardVege from "./CardVege"
import { NavLink as Link} from "react-router-dom";


import './styles.css';

const Goods = () => {
  const [goods, setGoods] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
      .then((response) => setGoods(response.data.results))

  }, []);

  return (
    <>
       
      <div className="grid">
        {goods.map((good)=> (
          <Link to={`/vegetables/${good.id}`}>
                <CardVege {...good} />
            </Link>
                ))}
        </div>
  </>
  );
};

export default Goods;

