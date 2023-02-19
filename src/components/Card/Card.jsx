import Cstyle from "./card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../redux/actions";

function Card({ name, gender, onClose, species, image, id }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if(isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    }
    else {
      setIsFav(true);
      dispatch(addFavorite({ name, gender, onClose, species, image, id }));
    }
  };
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={Cstyle.divCard}>
      {
        isFav ? (
            <button onClick={handleFavorite}>❤️</button>
        ) : (
            <button onClick={handleFavorite}>🤍</button>
        )
      }
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
