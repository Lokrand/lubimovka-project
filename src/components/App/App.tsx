import "./App.module.scss";
import { Performances } from "../Performances/Performances";
import Videos from "../Videos/Videos";
import Header from "../Header/Header";
import { Persons } from "../Persons/Persons";
import { Pieces } from "../Pieces/Pieces";
import YouTubePlayList from "../YouTubePlayList/YouTubePlayList";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import Footer from "../Footer/Footer";
import CooperationProject from "../CooperationProject/CooperationProject";
import Description from "../Description/Description";

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
        <YouTubePlayList/>
        <Gallery />
        <YouTubePlayList />
        <CooperationProject />
      </main>
      <Footer />
    </>
  );
}

export default App;
