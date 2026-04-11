import React, { useEffect, useState } from "react";
import "./desc.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Desc = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const res = await axios.get(
          `https://mern-perfumes-production.up.railway.app/api/cards/${id}`
        );
        setItem(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSingle();
  }, [id]);

  if (!item) return <h2>Loading...</h2>;

  return (
    <>
      <Header />

      <div className="desc-container">
        <div className="desc-card">
          <img
            src={`https://mern-perfumes-production.up.railway.app/uploads/${item.image}`}
            alt={item.name}
          />

          <div className="desc-info">
            <h1>{item.name}</h1>
            <p className="price">${item.price}</p>
            <p className="description">{item.description}</p>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Desc;