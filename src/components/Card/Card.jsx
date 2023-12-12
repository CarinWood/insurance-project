import "./card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ title, img, color }) => {
  return (
    <div className="card-frame">
      <div
        className={
          color === "blue"
            ? "img-holder blue"
            : color === "orange"
            ? "img-holder orange"
            : "img-holder coral"
        }
      >
        <img src={img} alt="card" className="card-img" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor
        ligula vel felis cursus egestas. Etiam consectetur finibus facilisis.
        Proin accumsan auctor purus, quis finibus tellus accumsan id.
      </p>
    </div>
  );
};
