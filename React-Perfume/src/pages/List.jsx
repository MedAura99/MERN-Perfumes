import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const List = () => {
  const navigate = useNavigate();
  const [perfumes, setPerfumes] = useState([]);

  // GET DATA FROM BACKEND
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://localhost:5000/api/cards");
        setPerfumes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        {perfumes.map((item) => (
          <div className="card" key={item._id} onClick={() => navigate(`/desc/${item._id}`)}>
            
            {/* IMAGE FROM BACKEND */}
            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt={item.name}
            />

            <h2>{item.name}</h2>
            <p className="price">${item.price}</p>
            <p className="desc">{item.description}</p>

            <button>Buy Now</button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default List;