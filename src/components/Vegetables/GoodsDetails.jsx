import React, { useState, useEffect } from "react";
import axios from "axios";

const GoodsDetails = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
      .then((response) => response.data.results)
      .then((data) => setGoods(data));
  }, []);

  return (
    <div>
      <h1>List</h1>
      {goods.map((good) => (
        <div key={good.id}>
          <h2>{good.name}</h2>
          <img src={good.image} alt={good.name} width={250} height={200} />
          <p>Species: {good.species}</p>
          <p>Cultivation</p>
          <p>Season: {good.cultivation.season}</p>
          <p>Growth: {good.cultivation.growth}</p>
          <p>Harvest: {good.cultivation.harvest}</p>
        </div>
      ))}
    </div>
  );
};

export default GoodsDetails;
