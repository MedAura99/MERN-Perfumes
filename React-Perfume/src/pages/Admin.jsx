import React, { useEffect, useState } from "react";
import axios from "axios";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Auth = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const fetchCards = async () => {
    const res = await axios.get("https://mern-perfumes-production.up.railway.app/api/cards");
    setCards(res.data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // DELETE WITH CONFIRM POPUP
  const deleteCard = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (!confirmDelete) return;

    await axios.delete(`https://mern-perfumes-production.up.railway.app/api/cards/${id}`);
    fetchCards();
  };

  return (
    <div className="dashboard">
      <Header />

      {/* TOP BAR */}
      <div className="top-bar">
        <h1>Admin Dashboard</h1>

        <button onClick={() => navigate("/insert")}>
          + Add Card
        </button>
      </div>

      {/* CARDS */}
      <div className="card-container">

        {cards.map((item) => (
          <div className="card" key={item._id}>

            <img
              src={`https://mern-perfumes-production.up.railway.app/uploads/${item.image}`}
              alt={item.name}
            />

            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>

            <div className="btn-group">

              <button
                className="edit"
                onClick={() => navigate(`/insert?id=${item._id}`)}
              >
                Update
              </button>

              <button
                className="delete"
                onClick={() => deleteCard(item._id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Auth;