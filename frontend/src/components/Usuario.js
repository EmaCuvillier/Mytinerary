import Footer from "./Footer"
import Nav from "./Nav"
import {connect} from 'react-redux'
import usuarioAction from "../redux/actions/usuarioAction"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Usuario = (props)=>{
    
    useEffect(()=>{
        pedirInfo()
    },[])
    const [itinerariosLikeados, setItinerariosLikeados]=useState([])
    const pedirInfo = async ()=>{
        const respuesta = await props.pedirInformacionDelUsuario(props.userLogged.token)
        setItinerariosLikeados(respuesta.respuesta)
    }
    const priceAndDuration = (n)=>{
        let aux = []
        for(let i = 0; i < n; i++){
            aux.push('priceAndDuration')
        }
        return aux
    }
    return (
        <>
            <Nav />
                <main className='mainUsuario' style={{backgroundImage:'url("../assets/paraUsuario.jpg")'}}>
                    <div className='infoDelUsuario'>
                        <div className='fotoDelUsuario' style={{backgroundImage:`url("${props.userLogged.picture}")`}}></div>
                        <h3 className='nombreDelUsuario'>{props.userLogged.firstName}</h3>
                    </div>
                    <div className='contenidoDelUsuario'>
                        <h2 className='tituloUsuarioItinerarios'>Liked Itineraries</h2>
                        {itinerariosLikeados.length > 0 
                            ? itinerariosLikeados.map((itinerario, i) =>{
                                return <div key={i} className='cadaItinerarioEnUsuario'>
                                    <div className='parteFotoUsuario'>
                                        <div className='fotoUsuario' style={{backgroundImage:`url("${itinerario.authorPic}")`}}></div>
                                    </div>
                                    <div className='parteNombres'>
                                        <h3 className='nombreDelAutorDelItinerario'>{itinerario.authorName}</h3>
                                        <h2>{itinerario.title}</h2>
                                    </div>
                                    <div className='partePrecioYDuracion'>  
                                        <div className='precioDiv'>
                                            <p>Price:</p>
                                            {priceAndDuration(itinerario.price).map((precio, i) => <div key={i} className='priceImg' style={{backgroundImage:`url('../assets/dollar.png')`}}></div>)}
                                        </div>
                                        <div className='durationDiv'>
                                            <p>Duration:</p>
                                            {priceAndDuration(itinerario.duration).map((duration, i) => <div key={i} className='durationImg' style={{backgroundImage:`url('../assets/reloj.png')`}}></div>)}
                                        </div>
                                    </div>
                                </div>
                            })
                        : <h2>No has Likeado ningun itinerario aun</h2>}                                    
                    </div>
                    <div className='sugerenciasUsuario'>

                    </div>
                </main>
            <Footer />
        </>
    )
}
const mapStateToProps = state => {
    return{
        userLogged : state.usersReducer.userLogged
    }
}
const mapDispatchToProps = {
    pedirInformacionDelUsuario: usuarioAction.pedirInformacionDelUsuario
}
export default connect (mapStateToProps, mapDispatchToProps)(Usuario)