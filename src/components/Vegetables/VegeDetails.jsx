import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowBack from "@material-ui/icons/ArrowBack";
import "./styles.css";
import {Container, Row, Col} from "react-bootstrap"

const VegeDetails = (props) => {
  // const [goods, setGoods] = useState([]);
  const [good, setGoodsId] = useState([]);

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/fa107af3-65bc-406c-830e-1003fd542f0c`)
      .then((response) => {
        console.log(props.match);
        const selectId = Number(props.match.params.id);

        console.log(selectId);

        const good = response.data.results.filter(
          (good) => good.id === selectId
        );
        // good.id === selectId)

        console.log("good", good[0]);

        setGoodsId(good[0]);
      });
  }, [props.match]);

  useEffect(() => {
    window.scrollTo(250, 250)
  }, [props.match])
  // useEffect(() => {
  //   const selectSpecs =
  // }, [])
  // class VegeDetails extends Component {
  //   state = {
  //     good: {},
  //   };
  //   componentDidMount() {
  //     this.fetchGoods();
  //   }

  return (
    <Container className="Vege-details">
      <Row>
      <Col sm={4} className="IconBack">
        <Link to={`/vegetables`}>
          <ArrowBack fontSize="large" /> Go Back to List
        </Link>
      </Col>
      <Col xs={12} md={8} className="CardDetails">
        <div key={good.id}>
          <h2>{good.name}</h2>
          <img src={good.image} alt={good.name}/>
          <div className="CardContent">
            <p>
              <strong>Species:</strong> {good.species}
            </p>
            <p>
              <strong>Growth:</strong> {good.growth}
            </p>
            <p>
              <strong>Season: </strong>
              {good.season}
               {/* &nbsp;&nbsp; - &nbsp;&nbsp;{" "} */}
              
            </p>
            <p><strong>Harvest:</strong> {good.harvest}</p>
          </div>
        </div>
      </Col>
      </Row>
      {/* <div>
          map cards with same species
          {good.map((species)=> good.species === selectSpecs)}
        </div> */}
    </Container>
  );
};
// }

export default VegeDetails;
