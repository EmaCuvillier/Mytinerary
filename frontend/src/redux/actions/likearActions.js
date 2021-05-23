import axios from 'axios'

const likearActions = {
    likearItinerario : (idItinerario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.get('http://localhost:4000/api/itinerario/like/'+idItinerario, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            return respuesta
        }
    },
    verificarLike: (idItinerario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.get('http://localhost:4000/api/itinerario/likecomentario/'+idItinerario, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            return respuesta
        }
    },
}
export default likearActions