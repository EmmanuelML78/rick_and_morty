// const axios = require('axios');


// const getCharDetail = (req, res) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     .then(data => {
//         let character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin?.name
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
// }

// const axios = require("axios");
// const URL = 'https://rickandmortyapi.com/api/character/';

// const getCharDetail = (req, res) => {
//     const {id} = req.params;
//     axios(URL + id).then(({data}) => {
//         const character = {
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin,
//             id: data.id,
//         }
//         return res.status(200).json(character);
//     })
//     .catch(error => {
//         res.status(500).send(err.message);
//     });
// };

// module.exports = { getCharDetail };


const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
    const {id} = req.params;
    
    if(id){
        try {
            const response = await axios(URL + id)
            const character = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender,
                status: response.data.status,
                origin: response.data.origin,
            }
            return res.status(200).json(character)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }else {
        return res.status(500).send("Debes proveer un id por parametro")
    }
}

module.exports = { getCharDetail };