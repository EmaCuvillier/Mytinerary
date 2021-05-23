import axios from 'axios'

const commentActions = {
    crearComentario: (idItinerario, comentario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/itinerario/comentario/'+idItinerario, {'comment': comentario}, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            if(respuesta){
                return respuesta.data.respuesta
            }
        }
    },
    editarUnComentario: (idComentario, tokenUsuario, comentarioEditado)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.put('http://localhost:4000/api/itinerario/comentario/'+idComentario, {'comment': comentarioEditado}, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            if(respuesta){
                return respuesta.data
            }
        }
    },
    eliminarUnComentario: (idComentario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.delete('http://localhost:4000/api/itinerario/comentario/'+idComentario, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            if(respuesta){
                return respuesta.data
            }
        }
    }
}

export default commentActions