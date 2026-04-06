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

  // 🔥 GET SINGLE CARD FOR UPDATE
  useEffect(() => {
    const fetchSingleCard = async () => {
      if (id) {
        try {
          const res = await axios.get("http://localhost:5000/api/cards");

          const item = res.data.find((c) => c._id === id);

          if (item) {
            setName(item.name);
            setPrice(item.price);
            setDescription(item.description);
          }
        } catch (err) {
          console.log("Error fetching card:", err);
        }
      }
    };

    fetchSingleCard();
  }, [id]);

  // 🔥 CREATE + UPDATE FUNCTION
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
        // UPDATE
        await axios.put(
          `http://localhost:5000/api/cards/${id}`,
          formData
        );

        alert("Card Updated Successfully!");
      } else {
        // CREATE
        await axios.post(
          "http://localhost:5000/api/cards",
          formData
        );

        alert("Card Created Successfully!");
      }

      // reset form
      setName("");
      setPrice("");
      setDescription("");
      setImage(null);

      // redirect back
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

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={saveCard}>
        {id ? "Update" : "Create"}
      </button>

    </div>
  );
};

export default Insert;