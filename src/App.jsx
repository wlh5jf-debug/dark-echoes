 import { useState } from "react";
 import { episodeList } from "./data"

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails(){
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an Episode</p>
        </section>
      )
    }

    return (
      <>
      <section>
      <h2>Episode: {selectedEpisode.id}</h2>
      <div className="details">
      <p>
        {selectedEpisode.title}</p>
        <p>{selectedEpisode.description}</p>
      <button>Watch Now</button>
      </div>
      </section>
      </>
    );
  }
function ListEpisodes(){
  return(
    <section className="listepisodes">
      <h2>Episodes</h2>
      <ul className="roster">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() =>
            setSelectedEpisode(episode)}>
            {episode.title}
            </li>
          
        ))}
      </ul>
    </section>
  )
}

return (
  <>
  <header>
    <h1>
      Dark Echoes
      </h1>
      </header>
      <main>
        <ListEpisodes />
        <EpisodeDetails />
      </main>
      </>
)

}
