import React, { useState, useEffect } from "react";
import axios from "axios";

const VegeDetails = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
      .then((response) => setGoods(response.data.results));
  }, []);

  return (
    <div>
      {goods.map((good) => (
        <div key={good.id}>
          <h2>{good.name}</h2>
          <img src={good.image} alt={good.name} width={450} height={400} />
          <p><strong>Species:</strong> {good.species}</p>
          <p><strong>Cultivation</strong></p>
          <p><strong>Season: </strong>{good.cultivation.season}</p>
          <p><strong>Growth:</strong> {good.cultivation.growth}</p>
          <p><strong>Harvest:</strong> {good.cultivation.harvest}</p>
        </div>
      ))}
    </div>
  );
};

export default VegeDetails;
