import "./App.module.scss";
import { Performances } from "../Performances/Performances";
import Videos from "../Videos/Videos";
import Header from "../Header/Header";
import { Persons } from "../Persons/Persons";
import { Pieces } from "../Pieces/Pieces";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Videos />
        <Performances />
        <Pieces />
        <Persons />
      </main>
      <Footer/>
    </>
  );
}

export default App;
