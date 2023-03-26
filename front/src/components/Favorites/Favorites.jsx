import { useSelector, useDispatch } from "react-redux"
import Cstyle from "./favorites.module.css"
import { Link } from "react-router-dom"
import { orderCards, filterCards } from "../redux/actions"



const Favorites = () => {
    const { myFavorites } = useSelector(state => state);
    const dispatch = useDispatch();

    // const handlerOrder = (event) => {
    //     dispatch(orderCards(event.target.value))
    // }

    // const handlerFilter = (event) => {
    //     dispatch(filterCards(event.target.value))
    // }

    return (
        <div>
            {/* <div>
                <select onChange={handlerOrder}>
                    <option value="order" disabled='disable'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                <option value="filter" disabled='disable'>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div> */}
            {
                myFavorites.map((character) =>{
                    return(
                        <div className={Cstyle.divCard}>
                            <Link to={`/detail/${character.id}`}>
                                <h2 className={Cstyle.characterName}>{character.name}</h2>
                            </Link>
                                
                            <img className={Cstyle.characterImg} src={character.image} alt={character.name} />
                            <h2 className={Cstyle.secondText}>{character.species}</h2>
                            <h2 className={Cstyle.thirdText}>{character.gender}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites