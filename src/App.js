import logo from "./logo.svg";
import "./App.css";
import ItemModal from "./ItemModal/ItemModal";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="weather">
          <div>75F</div>
          <div>
            {" "}
            <img />{" "}
          </div>
        </section>

        <section id="card-section">Card Section </section>
      </main>
    </div>
  );
}

export default App;
