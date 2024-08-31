import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

function App() {
  const getAnime = async (name) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    const data = await response.json();
    SetAnimes(data.data);
    console.log(data.data)
  }

  useEffect(() => {
    getAnime("naruto")
  }, [])

  const [animes, SetAnimes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("naruto");
  return (

    <>
      <h1>Anime Search</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search for an anime e.g Naruto"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={() => getAnime(searchQuery)}>Search</button>
      </div>

      <div className="container">
        {animes.length > 0 ?
          animes.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />))
          : (
            <div>Not Found</div>
          )
        }
      </div>
    </>
  )
}

export default App
