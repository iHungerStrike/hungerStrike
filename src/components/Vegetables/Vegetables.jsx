import React, { useState, useEffect } from "react";
import axios from "axios";
import VegeCarousel from "./Carousel/Carousel";
import CardVege from "./CardVege"
// import GoodsDetails from './GoodsDetails';
import './styles.css';
import { NavLink as Link } from "react-router-dom";

const Goods = () => {
  const [goods, setGoods] = useState([]);
  // const [currentSelected, setCurrentSelected] = useState();


  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
      .then((response) => response.data.results)
      .then((data) => setGoods(data));
  }, []);

  // function handleClick(index) {
  //   // console.log(index);
  //   setCurrentSelected(index);
  // }


  return (
    <div>
      <VegeCarousel />
    <div className="ContentGridVege">
        <ul className="Container">
          {goods.map((good) => (
            <Link to={`/vegetables/${good.name}`} 
            >
              <li 
            //   onClick={() => {
            //   const index = good.filter((element) => element.id === good.id);
            //   handleClick(index);
            // }} 
            className="Content">{good.name}</li>
              </Link>
          ))}
        </ul>
      <div className="grid">
        {goods.map((good)=> (
                <CardVege {...good} />
                ))}
      </div>
      {/* <GoodsDetails handleClick={handleClick} /> */}
  </div>
  </div>
  );
};

export default Goods;
