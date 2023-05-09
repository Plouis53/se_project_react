import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";

export function Profile({ item, ClothingCard, onSelectCard }) {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__sidebar">
          <SideBar />
        </div>
        <div className="profile__clothes-section">
          <ClothesSection />
          <section className="cards">
            <ul className="cards__list">
              {item.map((card) => (
                <ClothingCard
                  key={card._id}
                  item={card}
                  onSelectCard={onSelectCard}
                  name={card.name}
                  weather={card.weather}
                  id={card.id}
                  link={card.link}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
