import React, {useState} from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState (
    [
      "The Matrix",
      "Lord of the Rings",
      "Avengers"
    ]
  );

  const allMovies = movies.map( (movie, index) => {
    return <li key={index}>{movie}</li>
  });

  const addMovie = () => {
    setMovies(
      [...movies, "Harry Potter"]
    ) 
  };
  
// Function setMovies updates state //
// ...movies adds all movies from its array //


  return (
   <div>

    <ul>
      {allMovies}
    </ul>

    <button onClick={addMovie}>Add Movie</button>

   </div>
  );
}

export default App;
