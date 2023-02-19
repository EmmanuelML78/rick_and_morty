import './App.css'
import Cards from '../src/components/Cards/Cards.jsx'
import Nav from '../src/components/Nav/Nav.jsx'
import About from '../src/components/About/About'
import Detail from '../src/components/Detail/Detail'
import Form from '../src/components/Form/Form'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Favorites from '../src/components/Favorites/Favorites';



function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "locohumilde@gmail.com";
  const password = "locohumilde1";

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            for (let character of characters){
              if(data.id === character.id){
                return window.alert('Ya tienes ese personaje');
              }
            }
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
  setCharacters(
    characters.filter(characters => characters.id !== id)
  )
 };

  
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
