import axios from 'axios'

const itineraryActions = {
    pedirItinerariosPorCiudad: (id)=>{
        return (dispatch, getState)=> {
            axios.get('http://localhost:4000/api/itinerarios/'+id)
            .then(response => dispatch({type: 'PEDIR_ITINERARIO', payload: response.data.respuesta}))
            .catch(error => this.props.history.push('/errorServer'))
        }
    }
}

export default itineraryActions