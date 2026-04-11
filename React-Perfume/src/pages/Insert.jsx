import React, { useEffect, useState } from "react";
import axios from "axios";
import "./insert.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Insert = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const navigate = useNavigate();

  // GET SINGLE CARD
  useEffect(() => {
    const fetchSingleCard = async () => {
      if (id) {
        try {
          const res = await axios.get(
            `https://mern-perfumes-production.up.railway.app/api/cards/${id}`
          );

          const item = res.data;

          setName(item.name);
          setPrice(item.price);
          setDescription(item.description);
        } catch (err) {
          console.log("Error fetching card:", err);
        }
      }
    };

    fetchSingleCard();
  }, [id]);

  // SAVE (CREATE / UPDATE)
  const saveCard = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);

      if (image) {
        formData.append("image", image);
      }

      if (id) {
        await axios.put(
          `https://mern-perfumes-production.up.railway.app/api/cards/${id}`,
          formData
        );

        alert("Card Updated Successfully!");
      } else {
        await axios.post(
          "https://mern-perfumes-production.up.railway.app/api/cards",
          formData
        );

        alert("Card Created Successfully!");
      }

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);

      navigate("/admin");
    } catch (err) {
      console.log(err);
      alert("Error saving card");
    }
  };

  return (
    <div className="insert-page">
      <h1>{id ? "Update Card" : "Create Card"}</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <button onClick={saveCard}>{id ? "Update" : "Create"}</button>
    </div>
  );
};

export default Insert;