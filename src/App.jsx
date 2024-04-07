import { Header, Footer } from "./components";


function App() {
  return (
    <div className="flex justify-center">
      <div >
      <Header/>
      <body className="out">
      <form>
        <label>
          <input name="name" type="text" placeholder="Enter name:" />
        </label>
        <button className="btn-sam" type="submit" value="play">Play Game</button>
      </form>
      </body>
      <Footer/>
    </div>
    </div>
  );
}
export default App;
