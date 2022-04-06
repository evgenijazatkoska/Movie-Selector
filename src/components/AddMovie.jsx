import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/init-firebase";
export default function AddMovie() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      return;
    }

    const moviesCollRef = collection(db, "movies");
    addDoc(moviesCollRef, { name })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    alert(name);
  }
  return (
    <div>
      <h4>AddMovie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Movie Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add movie</button>
      </form>
    </div>
  );
}
