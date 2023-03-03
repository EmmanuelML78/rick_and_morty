// const axios = require('axios');

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     .then(data => {
//         let character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species
//         }
//         res
//         .writeHead(200, { 'Content-Type': 'application/json' })
//         .end(JSON.stringify(character));
//     })
//     .catch(err =>
//         res
//         .writeHead(500, { 'Content-Type': 'text/plain' })
//         .end (`El personaje con id ${id} no fue encontrado`)
//         )
// };

// module.exports = getCharById;

const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require("axios")

async function getCharById(req,res){
    const {id} = req.params;

    try {
        const response = await axios(URL + id);
        const character = {
        id: response.data.id,
        name: response.data.name,
        species: response.data.species,
        image: response.data.image,
        gender: response.data.gender,
        };
        res.status(200).json(character);
    } catch (error) {
        res.status(500).send(error.message);
    }

    
    // axios(URL + id).then((response) => {
    //     const character = {
    //         id: response.data.id,
    //         name: response.data.name,
    //         species: response.data.species,
    //         image: response.data.image,
    //         gender: response.data.gender,
    //     };
    //     res.status(200).json(character);
    // }, (err) => {
    //     res.status(500).send(err.message)
    // });
    
}


module.exports = {getCharById};