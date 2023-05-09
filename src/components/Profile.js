import ClothesSection from "./ClothesSection";

const Profile = ({ cards, onCardClick, onAddClick }) => {
  return (
    <section className="profile">
      <div className="profile__content">
        <ClothesSection
          cards={cards}
          onCardClick={onCardClick}
          onAddClick={onAddClick}
        />
      </div>
    </section>
  );
};

export default Profile;
