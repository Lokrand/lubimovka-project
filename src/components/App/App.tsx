import "./App.module.scss";
import { Performances } from "../Performances/Performances";
import Videos from "../Videos/Videos";
import Header from "../Header/Header";
import { Persons } from "../Persons/Persons";
import { Pieces } from "../Pieces/Pieces";
import YouTubePlayList from "../YouTubePlayList/YouTubePlayList";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";


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
        <YouTubePlayList/>
        <Gallery />
      </main>
      <Footer/>
    </>
  );
}

export default App;
