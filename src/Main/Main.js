import { defaultClothingItems } from "../Util/Constants";
import WeatherCard from "../WeatherCard/WeatherCrad";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard}/>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
