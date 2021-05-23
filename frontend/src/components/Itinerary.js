import Nav from './Nav'
import MainItinerary from './MainItineray'
import Footer from './Footer'
import { useEffect} from 'react'
import {connect} from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions'



const Itinerary = (props) =>{
    useEffect(()=>{
        window.scrollTo(0, 0)
        props.pedirItinerariosPorCiudad(props.match.params.id)
    }, [])

    let idCiudadPedida = props.match.params.id
    let ciudadPedida = props.ciudades.filter(city => idCiudadPedida == city._id)
    return (
        <>
        <Nav />
        <MainItinerary city={ciudadPedida} itineraries={props.itinerarios}/>
        <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
       ciudades: state.citiesReducer.cities,
       itinerarios: state.itinerarioReducer.itinerarios
    }
}
const mapDispatchToProps = {
    pedirItinerariosPorCiudad: itineraryActions.pedirItinerariosPorCiudad
}


export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)