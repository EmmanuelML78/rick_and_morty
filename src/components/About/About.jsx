import React from 'react'
import { Link } from 'react-router-dom'
import abou from "./about.module.css";

const About = () => {
    return (
    <>
        <Link to={`/home`} >
            <button className={abou.btnNa}>Return</button>
        </Link>
        <div className='about'>
          <div>
          <div>
            <img className={abou.imgEmma}
                            src={require('../../imagenes/emma.jpeg')}
                            alt='Cindy Posada'
                ></img>
            <div className={abou.aboutInfotxt}>
              <p><b>Hi! My name is Emmanuel!</b> Soy el creador de esta página, aquí puedes encontrar los personajes de Rick & Mortys, puedes buscarlos por su ID, ¡también puedes consultar información adicional si haces clic en los nombres de los personajes!</p>
              <p>I hope you find it usefull! <b>See you soon!</b></p>
            </div>
          </div>
          <div className={abou.aboutInfo}>
              <div className={abou.txtBox}>
                 <h3 className={abou.aboutTitle}>Status:</h3>
                 <p className={abou.aboutTxt}> Alive </p>
              </div>
              <div className={abou.txtBox}>
                <h3 className={abou.aboutTitle}>Specie:</h3>
                <p className={abou.aboutTxt}>Human</p>
             </div>
             <div className={abou.txtBox}>
              <h3 className={abou.aboutTitle}> Origin:</h3>
              <p className={abou.aboutTxt}>Earth</p>
            </div>
            <div className={abou.txtBox}>
              <h3 className={abou.aboutTitle}>Location:</h3>
              <p className={abou.aboutTxt}>Colombia</p>
            </div>
            <div className={abou.txtBox}>
              <h3 className={abou.aboutTitle}>Episodes</h3>
              <p className={abou.aboutTxt}> 230,865.9554 </p>   
            </div>
          </div>
        </div>
        </div>  
    
    </>
      )
  }

export default About;