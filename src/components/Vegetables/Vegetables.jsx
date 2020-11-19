import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

// const Ul = styled.ul`
// @font-face {
//   font-family: "get_schwifty";
//   src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
// }
// //@media (max-width: 768px) 
// {
//   font: 1.1em 'get_schwifty';
//   display: flex;
//   justify-content: center;
//   text-align: center;
//   flex-flow: column nowrap;
//   background-color: #31445E;
//   opacity: 0.85;
//   // position: fixed;
//   transition: transform 0.45s ease-in-out;
//   opacity: ${({ open }) => (open ? 1 : 0)};
//   position: ${({ open }) => (open ? 'absolute' : 'fixed')};
//   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')} ;
//   top: 0;
//   right: 0;
//   height: 30vh;
//   // height:100%;
//   width: 25vw;
//   // width: 100%;
//   padding-top: -0.8rem;
  
// }

//   ul{
//     display:block;
//   }
//   li{
//     justify-content: center;
//     margin-top: 20px;
//     list-style: none;
//     color: #fff;
//     position: relative;

//   }
//   .right{
//     float: right;
//     margin-right:10px;
//   }
//   li a {
//       font-size: 1.5em;
//       color:#fff;
//       text-decoration: none;
//    }
//    li a:hover { 
//       background: #85CCAC;
//       height:50px;
//       border-radius:20px;
//       box-shadow: 6px 5px 11px rgba(51,54,66,.9);
//   } 
//   @media (max-width: 449px) {
//     height: 20vh;
//     font-size:0.6em;
    
//     li{
//       margin-top:0;
//       padding:10px;
//     }
//       }
// `;

// const LeftNav = ({ open }) => (


//   <Ul open={open}>
//     <ul>
//       <li>
//         <Link to="/locations?:id" select>
//           {}
//         </Link>
//       </li>
//     </ul>
//   </Ul>
// );

const Goods = () => {
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
          <h3>{good.name}</h3>
          <img src={good.image} alt={good.name} width={250} height={200} />
        </div>
      ))}
    </div>
  );
};

export default Goods;
