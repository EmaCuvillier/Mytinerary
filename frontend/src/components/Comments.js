import commentActions from '../redux/actions/commentActions'
import Comment from './Comment'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import likearActions from '../redux/actions/likearActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = (props)=>{
    const {setModal, tostada, userLogged, itinerary, crearComentario, eliminarUnComentario, editarUnComentario, comentarios, verificarLike} = props
    const [input, setInput] = useState('')
    const [comentariosAMostrar, setComentariosAMostrar] = useState([])
    const [comentariosDelUsuario, setComentariosDelUsuario] = useState([])
    useEffect(()=>{
        setComentariosAMostrar(itinerary.comments)
        setComentariosDelUsuario(comentarios)
    }, [itinerary, comentarios])
    const capturarInput = e =>{
        const comentario = e.target.value
        setInput(comentario)
    }
    if(userLogged){
        var token = userLogged.token
    }
    const verificarLikeComentario = async()=>{
        const respuesta = await verificarLike(itinerary._id, token)
        setComentariosDelUsuario(respuesta.data.comentarios)
    }
    const enviarComentario = async ()=>{
        if(userLogged){
            if(input === '' || input === ' '){
                toast.error('Cannot send an empty comment', tostada)
            }else{
                const respuesta = await crearComentario(itinerary._id, input, userLogged.token)
                setComentariosAMostrar(respuesta.comments)
                setInput('')
                verificarLikeComentario()
            }
            
        }else{
            toast.error('You must be logged in', tostada)
        }
    }
    const borrarComentario = async (idComentario, token)=>{
        if(userLogged){
            const respuesta = await eliminarUnComentario(idComentario, token)
            setComentariosAMostrar(respuesta.respuesta.comments)
        }
    }
    const editarComentario = async (idComentario, token, nuevoComentario)=>{
        const respuesta = await editarUnComentario(idComentario, token, nuevoComentario)
        if(respuesta.success){
            setComentariosAMostrar(respuesta.respuesta.comments)
        }else{
            console.log('no se puede editar')
        }
    }
    return(
        <>
        <div className='contenedorComments' id='contenedorCommentsResponsive'>
            <p className='cerrarPopUp' onClick={()=>setModal()}><FontAwesomeIcon  icon={faTimes} /></p>
            <h2 className='tituloComments'>Comments<FontAwesomeIcon className='iconoTituloComentario' icon={faComments}/></h2>
            <div className='cajaDeComentarios'>    
                {comentariosAMostrar.map((comentario, i) => <Comment key={i} comentariosDelUsuario={comentariosDelUsuario} editarComentario={editarComentario} borrarComentario={borrarComentario} comentario={comentario}/>)}
            </div>
            <div className='divEnviarComentario'>
                <input type='text' className='inputIngresarComentario' placeholder='Leave a message...' value={input} onChange={capturarInput}></input>
                <p  onClick={() => enviarComentario()}><FontAwesomeIcon className='botonEnviarComentario' icon={faPaperPlane}/></p>
            </div>
        </div>
        </>
    )
}
const mapDispatchToProps = {
    crearComentario: commentActions.crearComentario,
    eliminarUnComentario: commentActions.eliminarUnComentario,
    editarUnComentario: commentActions.editarUnComentario,
    verificarLike: likearActions.verificarLike
}
const mapStateToProps = state => {
    return{
        userLogged: state.usersReducer.userLogged,
        itinerarios:state.itinerarioReducer.itinerarios
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)