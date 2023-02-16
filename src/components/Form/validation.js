const validation = (userData) => {
    let errors = {};

    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(userData.username)){
        errors.username = "El email ingresado no es valido";
    }
    if(!userData.Username){
        errors.uxsername = "El campo username no puede estar vacio";
    }
    if(!userData.username.length > 35){
        errors.username = "El email no puede tener mas de 35 caracteres";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe tener al menos un numero";
    }
    if(userData.password.length < 6 || userData.password.length > 10)
    {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }
    return errors;
}
export default validation;
