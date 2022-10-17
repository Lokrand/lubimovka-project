import './App.module.scss';
import { Performances } from '../Performances/Performances';
import Videos from "../Videos/Videos";
import Header from '../Header/Header';


function App() {
  return (
    <>
      <Header/>
      <main>
        <Performances />
          <Videos/>
      </main>
    </>
  );
}

export default App;
