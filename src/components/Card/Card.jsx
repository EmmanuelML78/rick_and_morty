import Cstyle from "./card.module.css";
import { Link } from "react-router-dom";

function Card({ name, gender, onClose, species, image, id }) {
  return (
    <div className={Cstyle.divCard}>
      <button className={Cstyle.botonDelete} onClick={onClose}>X</button>
      <br />
      <Link to={`/detail/${id}`}>
        <h2 className={Cstyle.characterName}>{name}</h2>
      </Link>
      
      <img className={Cstyle.characterImg} src={image} alt={name} />
      <h2 className={Cstyle.secondText}>{species}</h2>
      <h2 className={Cstyle.thirdText}>{gender}</h2>
      
    </div>
  );
}

export default Card;

// className= {Cstyle.card}
