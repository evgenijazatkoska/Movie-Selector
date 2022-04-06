import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function ListMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function getMovies() {
    const movieCollectinRef = collection(db, "movies");
    getDocs(movieCollectinRef)
      .then((response) => {
        const movs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMovies(movs);
      })
      .catch((error) => console.log(error.message));
  }

  function deleteMovie(id) {
    const docRef = doc(db,'movies', id)
    deleteDoc(docRef).then(() => console.log('Document deleted'))
    .catch(error => console.log(error.message))
    
    alert(id)
  }

  return (
    <div>
      <h4>ListMovies</h4>
      <button onClick={() => getMovies()}>Refresh movies</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id}: {movie.data.name}
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
