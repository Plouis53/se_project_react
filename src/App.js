import logo from "./logo.svg";
import "./App.css";
import ItemModal from "./ItemModal/ItemModal";
import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCrad";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={false} type="cloudy" />
        <section id="card-section">Card Section </section>
      </main>
    </div>
  );
}

export default App;
