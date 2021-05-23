import { useEffect, useState } from 'react';
import Activities from './Activities'
import Comments from './Comments'
import '../styles/CardItinerary.css'
import activitiesActions from '../redux/actions/activitiesActions';
import { connect } from 'react-redux'
import likearActions from '../redux/actions/likearActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardItinerary = ({itinerary, pedirActividadesPorItinerario, userLogged, likearItinerario, verificarLike})=>{
    const priceAndDuration = (n)=>{
        let aux = []
        for(let i = 0; i < n; i++){
            aux.push('priceAndDuration')
        }
        return aux
    }
    if(userLogged){
        var token = userLogged.token
    }
    const [modal, setModal] = useState(false)
    const display = {
        display: modal ? 'flex' : 'none',
    }
    const [activities, setActivities] = useState([])
    useEffect(()=>{
        modal &&  pedirActividades()
    }, [modal])
    const pedirActividades = async()=>{
        const respuesta = await pedirActividadesPorItinerario(itinerary._id)
        setActivities(respuesta)
    }
    const [numeroLikes, setNumeroLikes]=useState(itinerary.likes)
    const likear = async() =>{
        if(userLogged){
            setColorCorazon(!colorCorazon)
            const respuesta = await likearItinerario(itinerary._id, token)
            setNumeroLikes(respuesta.data.respuesta)
        }else{
            toast.error('You must be logged in', tostada)
        }
    }
    const tostada = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const [colorCorazon, setColorCorazon]=useState(false)
    const likeado ={
        color: !colorCorazon ? 'rgba(128, 128, 128, 0.767)' : 'red'
    }
    const [comentarioDelUsuario, setComentarioDelUsuario]=useState([])
    const verificarLikeComentario = async()=>{
        const respuesta = await verificarLike(itinerary._id, token)
        setColorCorazon(respuesta.data.liked)
        setComentarioDelUsuario(respuesta.data.comentarios)
    }
    useEffect(()=>{
        userLogged && verificarLikeComentario()
    }, [])
    return(<>
            <div className='divItinerarios' id='divItinerarios' style={{display: modal ? 'none' : 'block'}}>
                <div className='parteUsuario'>
                    <div className='contenedorImagen'>
                        <div className='imagenUsuario' id='imagenUsuario' style={{backgroundImage:`url('${itinerary.authorPic}')`}}></div>
                    </div>
                    <div className='espacioUsuario' id='espacioUsuario'>
                        <h3 className='nombreUsuarioItinerario' id='nombreUsuarioItinerario'>{itinerary.authorName}</h3>
                        <h2 className='nombreDelItinerario' id='titleItinerario'>{itinerary.title}</h2>
                    </div>
                </div>
                <div className='todoContenidoItinerario'>
                    <div className='infoItinerario'>
                        <div className='precioDiv'>
                            <p>Price: </p>
                            {priceAndDuration(itinerary.price).map((precio, i) => <FontAwesomeIcon key={i} className='billetesItinerario' icon={faMoneyBillAlt} />)}
                        </div>
                        <div className='durationDiv'>
                            <p>Duration:</p>
                            {priceAndDuration(itinerary.duration).map((duration, i) => <FontAwesomeIcon key={i} className='relojesItinerario' icon={faClock} />)}
                        </div>
                        <div className='likesDiv'>
                            <FontAwesomeIcon icon={faHeart} style={likeado} className='corazon' onClick={likear}/>
                            <p>{numeroLikes}</p>
                        </div>
                    </div>
                    <div className='hashtags'>
                        {itinerary.hashtag.map((hashtag, i) =>{
                        return <p key={i} className='hashtag'>#{hashtag}</p>})}
                    </div>
                    <div className='viewMore' onClick={()=>setModal(!modal)}>
                        {display.display ? 'View More' : 'View Less'}
                    </div>
                </div>                                                 
            </div>
            <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <div className='activityComment' style={display}><Activities activities={activities} /><Comments tostada={tostada} setModal={setModal} verificarLikeComentario={verificarLikeComentario} itinerary={itinerary} comentarios={comentarioDelUsuario}/></div>
            </>
    )
}
const mapDispatchToProps = {
    pedirActividadesPorItinerario: activitiesActions.pedirActividadesPorItinerario,
    likearItinerario: likearActions.likearItinerario,
    verificarLike: likearActions.verificarLike
}
const  mapStateToProps = state =>{
    return{
        userLogged : state.usersReducer.userLogged
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardItinerary)
