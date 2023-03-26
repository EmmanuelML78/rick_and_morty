import {useState} from "react";
import validation from "./validation";
import styles from "../Form/form.module.css";
import { Link } from 'react-router-dom'


const Form = ({login}) =>{
    
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (input) =>{
        setUserData({
          ...userData,
            [input.target.name]: input.target.value
        })
        setErrors(validation({
            ...userData,
            [input.target.name]: input.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={styles.container}>
           
            
            <form className={styles.form}onSubmit={handleSubmit}>
            <h1 className={styles.textoH1}>Welcome!</h1>
                <label htmlFor="username" className={styles.labelText}>Username:</label>
                <input className={styles.input} type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                
                <label className={styles.labelText}>Password:</label>
                <input className={styles.input} type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                
                <button className={styles.btnLog} type="submit">LOGIN</button>
                <Link to={`/home`} >
                <button className={styles.btnLog}>Continue as a guest</button>
                </Link>
                {errors.username && <p style={{color: 'white'}}>{errors.username}</p>}
                {errors.password && <p style={{color: 'white'}}>{errors.password}</p>}
            </form>
            
        </div>
    )
}

export default Form;