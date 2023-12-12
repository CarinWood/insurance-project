import { Card } from "../Card/Card";
import "./ourOffer.css";
import child from '../../assets/img/child.png'
import old from '../../assets/img/old.png'
import adult from '../../assets/img/adult.png'

export const OurOffer = () => {
  return (
    <section className="offer">
      <article className="box-1">
        <h1 className="offer-heading">Your personal financial safety net online.</h1>
        <button className="join-btn">JOIN NOW</button>
      </article>
      <aside className="box-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor
          ligula vel felis cursus egestas. Etiam consectetur finibus facilisis.
          Proin accumsan auctor purus, quis finibus tellus accumsan id. Quisque
          tellus elit, ullamcorper sed mollis ac, interdum vel enim.
          Pellentesque congue felis eget lorem tempor blandit. Mauris hendrerit
          ullamcorper ex quis congue donec vel finibus libero.
        </p>
      </aside>
      <div className="cards">
            <Card title={"Children"} img={child} color={'blue'}/>
            <Card title={"Just right"} img={adult} color={'orange'}/>
            <Card title={"Old fart"} img={old} color={'coral'}/>
      </div>
    </section>
  );
};
