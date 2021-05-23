import axios from 'axios'

const citiesActions = {
    pedirTodasCiudades : ()=>{
        return (dispatch, getState)=> {
            axios.get('http://localhost:4000/api/ciudades')
            .then(response => dispatch({type: 'CARGAR_CIUDADES', payload: response.data.respuesta}))
            .catch(error => this.props.history.push('/errorServer'))
        }
    },
    filtrarCiudades: (valor)=>{
        return(dispatch, getState) =>{
            dispatch({type:'FILTRAR_CIUDADES', payload: valor})
        }
    }
}

export default citiesActions