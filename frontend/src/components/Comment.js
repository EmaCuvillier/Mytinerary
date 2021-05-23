import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMarker, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

const Comment = ({comentario, userLogged, borrarComentario, editarComentario, comentariosDelUsuario})=>{
    const [valorInput, setValorInput] = useState(comentario.comment)
    const [comentarioDelUsuario, setComentarioDelUsuario]=useState([])
    useEffect(()=>{
        comentariosDelUsuario.length > 0 && setComentarioDelUsuario(comentariosDelUsuario)
    })
    const inputEditar = e =>{
        var value = e.target.value
        setValorInput(value)
    }
    const checkComentario = comentarioDelUsuario.some(idComentario => idComentario === comentario._id)
    const [mostrarEditar, setMostrarEditar] = useState(false)
    const displayEditar = {
        display : !mostrarEditar ? 'none' : 'flex'
    }
    const noDisplayEditar = {
        display: !mostrarEditar ? 'flex' : 'none'
    }
    const [displayEliminar, setDisplayEliminar] = useState(false)
    const mostrarEliminar ={
        display : !displayEliminar ? 'none' : 'flex'
    }
    const noMostrarEliminar ={
        display: !displayEliminar ? 'flex' : 'none'
    }
    return(
        <>
           <div className='cadaComentario '>
               <div className='fotoComentario'>
                    <div className='imagenUsuarioEnComentario' style={{backgroundImage:`url('${comentario.userId.picture}')`}}></div>
                    
               </div>
               <div className='contenidoDelComentario'>
                   <div className='nombreYComentario'>
                        <p className='nombreEnComentario'>{comentario.userId.firstName} :</p>
                        <p className='textoComentario' style={noDisplayEditar}>{comentario.comment}</p>
                        {checkComentario && <input type='text' value={valorInput} onChange={inputEditar} style={displayEditar}></input>}
                   </div>
                    <div >
                        {checkComentario && 
                            <div className='borrarEditarComentario'>
                                <p onClick={()=>editarComentario(comentario._id, userLogged.token, valorInput)}><FontAwesomeIcon onClick={()=>setMostrarEditar(!mostrarEditar)} style={displayEditar} className='confirmarEdicion' icon={faCheckCircle}/></p>
                                <p ><FontAwesomeIcon onClick={()=>setMostrarEditar(!mostrarEditar)} className='cancelarEdicion' icon={faTimesCircle} style={displayEditar}/></p>
                                <p style={noDisplayEditar} onClick={()=>setMostrarEditar(!mostrarEditar)}><FontAwesomeIcon style={noMostrarEliminar} icon={faMarker} className='iconoEditar'/></p>
                                <p style={noDisplayEditar}  onClick={()=>setDisplayEliminar(!displayEliminar)}><FontAwesomeIcon style={noMostrarEliminar} className='iconoBorrar' icon={faTrash}/></p>
                                <div style={mostrarEliminar}>
                                    <p className='textoPreguntaEliminar'>Are you sure you want to delete?</p>
                                    <FontAwesomeIcon onClick={()=>borrarComentario(comentario._id, userLogged.token)} className='confirmarEdicion' icon={faCheckCircle}/>
                                    <FontAwesomeIcon onClick={()=>setDisplayEliminar(!displayEliminar)} className='cancelarEdicion' icon={faTimesCircle} />
                                </div>
                            </div>
                        }
                    </div>
               </div>
                
                
                
            </div>    
        </>
    )
}

const mapStateToProps = state => {
    return{
        userLogged: state.usersReducer.userLogged,
    }
}
export default connect(mapStateToProps)(Comment)