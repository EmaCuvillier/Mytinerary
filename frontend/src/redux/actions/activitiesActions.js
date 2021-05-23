import axios from 'axios'

const activitiesActions = {
    pedirActividadesPorItinerario : (idItinerario)=>{
        return async (dispatch, getState)=> {
            const respuesta = await axios.get('http://localhost:4000/api/itinerario/actividad/'+idItinerario)
            if(respuesta.data.success){
                return respuesta.data.respuesta
            }
        }
    }
}
export default activitiesActions