import { Header, Footer } from "./components";
import './index.css';

function App() {
  return (
    <>
      <Header/>
      <body>
      <form>
        <label>
          <input name="name" type="text" placeholder="Enter name:" />
        </label>
        <button type="submit" value="play">Play Game</button>
      </form>
      </body>
      <Footer/>
    </>
  );
}
export default App;
