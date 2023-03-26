import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import detal from "./Detail.module.css";


const Detail = () => {
    const  {detailId}  = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
      
        <div className={detal.detailBox}>
          
          <div className={detal.detailImgBox}>
            <img src={character?.image} alt={character?.name} />
            <h1 className={detal.detailCharacterName}>{character?.name}</h1>
          </div>
        <div detailTxtBox>
          <div>
            <h3 className={detal.infoTitle}>Specie:</h3>
            <p className={detal.detailTxt}>{character?.species}</p>
          </div>

          <div>
            <h3 className={detal.infoTitle}>Origin:</h3>
            <p className={detal.detailTxt}>{character.origin && character.origin.name}</p>
          </div>

          <div>
            <h3 className={detal.infoTitle}>Status:</h3>
            <p className={detal.detailTxt}>{character?.status}</p>
          </div>

          <div>
            <h3 className={detal.infoTitle}>Gender:</h3>
            <p className={detal.detailTxt}>{character?.gender}</p>
          </div>
          
          <Link to="/home">
            <button className={detal.btnNav}>Volver</button>
        </Link>
        </div> 
        </div>    
    )
}

export default Detail;