import "./App.module.scss";
import { Performances } from "../Performances/Performances";
import Videos from "../Videos/Videos";
import Header from "../Header/Header";
import { Persons } from "../Persons/Persons";
import { Pieces } from "../Pieces/Pieces";
import CooperationProject from "../CooperationProject/CooperationProject";

function App() {
  return (
    <>
      <Header />
      <main>
        <Videos />
        <Performances />
        <Pieces />
        <Persons />

        <CooperationProject/>
      </main>
    </>
  );
}

export default App;
