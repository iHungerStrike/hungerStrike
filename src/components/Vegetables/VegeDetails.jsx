import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import ArrowBack from "@material-ui/icons/ArrowBack";
import './styles.css'


const VegeDetails = (props) => {
  const [goods, setGoods] = useState([]);
  const [goodId, setGoodsId] = useState([]);

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
      .then(response => 
        {
          
            // console.log(props.match.params.id)
            const selectId = Number(props.match.params.id);
            
            console.log(selectId)

const good = response.data.results.filter((good) => good.id === selectId)
            // good.id === selectId)

            console.log('good', good[0])

            setGoodsId(good[0]);
            

        })
        
  }, []);
// class VegeDetails extends Component {
//   state = {
//     good: {},
//   }
//   componentDidMount() {
//     this.fetchGoods();
//     console.log(this.props);
//   }
 
//   // componentDidUpdate(){
//   //   this.fetchGoods();

//   // }
//         fetchGoods=()=> {
//           axios
//                 .get(`https://run.mocky.io/v3/9921d2a2-7077-4a2a-9fd2-747000d6ca76`)
//                 .then(response => 
//                   {
                      
//                       console.log(this.props.match.params.id)
//                       const selectId = Number(this.props.match.params.id);
                      
//                       console.log(selectId)
          
//                       const good = response.data.results.filter((good) => good.id === selectId)
//                       this.setState({ good: good[0] });
//                       // console.log('good', good[0])
      
                    
//         })
//       }
 
  
  // render() {
 
  return (
    <div>
      <div className="IconBack">
       <Link to={`/vegetables`}>
          <ArrowBack fontSize="large" /> Go Back to List
        </Link>
      </div>
    <div className="CardDetails">
          <div key={this.state.good.id}>
          <h2>{this.state.good.name}</h2>
          <img src={this.state.good.image} alt={this.state.good.name} width={450} height={400} />
          <p><strong>Species:</strong> {this.state.good.species}</p>
          <p><strong>Cultivation</strong></p>
          {/* <p><strong>Season: </strong>{this.state.good.cultivation.season}</p>
          <p><strong>Growth:</strong> {this.state.good.cultivation.growth}</p>
          <p><strong>Harvest:</strong> {this.state.good.cultivation.harvest}</p> */}
        </div>
    </div>
    </div>
      )
 
}
// };

export default VegeDetails;
