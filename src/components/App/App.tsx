import "./App.module.scss";
import { Performances } from "../Performances/Performances";
import Videos from "../Videos/Videos";
import Header from "../Header/Header";
import { Persons } from "../Persons/Persons";
import { Pieces } from "../Pieces/Pieces";
<<<<<<< HEAD
import YouTubePlayList from "../YouTubePlayList/YouTubePlayList";
=======
import Head from "../Head/Head";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
>>>>>>> 7bb8088d0900f86b4fc482977e1bcefc688ff045

function App() {
  return (
    <>
      <Header />
      <main>
        <Head />
        <About />
        <Videos />
        <Performances />
        <Pieces />
        <Persons />
<<<<<<< HEAD
        <YouTubePlayList/>
=======
        <Gallery />
>>>>>>> 7bb8088d0900f86b4fc482977e1bcefc688ff045
      </main>
    </>
  );
}

export default App;
