import "./App.module.scss";
import { Performances } from "../Performances/Performances";
import Videos from "../Videos/Videos";
import Header from "../Header/Header";
import { Persons } from "../Persons/Persons";
import { Pieces } from "../Pieces/Pieces";
import YouTubePlayList from "../YouTubePlayList/YouTubePlayList";
import Gallery from "../Gallery/Gallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Videos />
        <Performances />
        <Pieces />
        <Persons />
        <YouTubePlayList/>
        <Gallery />
      </main>
    </>
  );
}

export default App;
