import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Megadeth() {
  const [recentlyPlayed, setRecentlyPlayed] = useState("drum n bass"); // setting recentlyPlayed useState to megadeth
  const [recentlyPlayedData, setRecentlyPlayedData] = useState([]); // storing the API reponse in state in an empty array

  async function fetchRecentlyPlayed() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${recentlyPlayed}` // fetching url plus recentlyPlayed query string
      );

      if (response.ok) {
        let results = await response.json();
        setRecentlyPlayedData(results.data); // storing the data in recentlyPlayedData state
        console.log(recentlyPlayedData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRecentlyPlayed(); 
  }, []);

  return (
    <div class="col-12 mt-5">
      <div class="d-flex justify-content-between align-items-center mt-3">
        <h3>Recently played</h3>
        <h6>SEE ALL</h6>
      </div>
      <div class="w-100 recently-played-container">
        {recentlyPlayedData.length > 0 &&
          recentlyPlayedData.map((info, index) => {
            return (
              index < 9 && (
                <Link to={`/artist/${info.artist.name.toLowerCase()}`}>
                  <div
                    key={info.artist.title}
                    class="spotify-card d-flex flex-column"
                  >
                    <div class="p-2">
                      <div>
                        <img class="spotify-card-image" src={info.artist.picture_medium} alt="" />
                      </div>
                      <div class="mt-2">
                        <h6 class="text_clamp_1">{info.artist.name}</h6>
                        <p class="album-title">{info.album.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            );
          })}
      </div>
    </div>
  );
}

export default Megadeth;