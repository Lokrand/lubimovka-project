import "./App.module.scss";
import { Performances } from "../Performances/Performances";
import Videos from "../Videos/Videos";
import Header from "../Header/Header";
import { Persons } from "../Persons/Persons";
import { Pieces } from "../Pieces/Pieces";
<<<<<<< HEAD
<<<<<<< HEAD
import YouTubePlayList from "../YouTubePlayList/YouTubePlayList";
=======
import Head from "../Head/Head";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
>>>>>>> 7bb8088d0900f86b4fc482977e1bcefc688ff045
=======
import YouTubePlayList from "../YouTubePlayList/YouTubePlayList";
import Footer from "../Footer/Footer";
import CooperationProject from "../CooperationProject/CooperationProject";
import Description from "../Description/Description";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
>>>>>>> 8cc1a408ada1066d62f40b76fd358dad8e776415

function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <About />
        <Videos />
        <Gallery />
        <Performances />
        <Pieces />
        <Persons />
<<<<<<< HEAD
<<<<<<< HEAD
        <YouTubePlayList/>
=======
        <Gallery />
>>>>>>> 7bb8088d0900f86b4fc482977e1bcefc688ff045
=======
        <YouTubePlayList />
        <CooperationProject />
>>>>>>> 8cc1a408ada1066d62f40b76fd358dad8e776415
      </main>
      <Footer />
    </>
  );
}

export default App;
