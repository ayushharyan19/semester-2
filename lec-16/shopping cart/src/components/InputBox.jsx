import React, { useState } from "react";
import { motion } from "framer-motion";

const InputBox = ({ addItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) return;

    addItem({
      name,
      price: parseFloat(price),
      quantity: 1,
    });

    setName("");
    setPrice("");
  };

  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <motion.button 
        whileTap={{ scale: 0.9 }} 
        onClick={handleAdd}
      >
        Add
      </motion.button>
    </div>
  );
};

export default InputBox;