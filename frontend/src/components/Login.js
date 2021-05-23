import Footer from "./Footer"
import Nav from "./Nav"
import { NavLink } from 'react-router-dom'
import { useState } from "react"
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import GoogleLogin from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props)=>{
    const [usuarioALoguear, setUsuarioALoguear] = useState({email: '', password: ''})
    const leerInput = (e)=>{
        const campo = e.target.name
        const valor = e.target.value
        setUsuarioALoguear({
            ...usuarioALoguear,
            [campo]: valor
        })
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
    const loguear = async (e = null, userGoogle = null) =>{
        e && e.preventDefault()
        let usuario = e ? usuarioALoguear : userGoogle
        props.loguearUsuario(usuario)
    }
    const respuestaGoogle = (response) => {
        if (response.profileObj.email) {
            loguear(null, {email: response.profileObj.email, password: 'a'+response.profileObj.googleId})
        } else {
            alert("Error al registrarse con google")
        }
    }
    return(
        <>
        <Nav/>
        <main id='mainSignUp' style={{background:'url("https://www.xtrafondos.com/descargar.php?id=3341&resolucion=3840x2160")'}}>
            <div className='contenedorSignUp'>
                <div className='mitadIzquierda'>
                    <h2 className='tituloRegistro'>Log In</h2>
                    <div className='callRegistro'>
                        <h4>You do not have an account?</h4>
                        <NavLink exact to='/signup'><p className='direccionNav redireccionRegistro'>Sign Up here!</p></NavLink>
                    </div>
                    <h3 className='logo pointer'>MY<span>tinerary.</span></h3>
                </div>
                <div className='mitadDerechaLogin'>
                    <div className="form-style-8">
                        <h2 >Login</h2>
                        <form className='formUsuarioLogin'>
                            <div>
                                <input type="email" name="email" placeholder="Email" value={usuarioALoguear.email} onChange={leerInput}/>
                                <input type="password" name="password" placeholder="Password" value={usuarioALoguear.password} onChange={leerInput}/>
                            </div>
                            <div className='botonesFormLogin'>
                                <input type="button" value="Log In" onClick={loguear}/>
                                <GoogleLogin
                                clientId="147929169060-1mm3lp5214g564e0vn115ng10i0qvaae.apps.googleusercontent.com"
                                buttonText="Sign In with Google"
                                onSuccess={respuestaGoogle}
                                onFailure={respuestaGoogle}
                                cookiePolicy={'single_host_origin'}
                                />
                            </div>                           
                        </form>
                    </div>
                </div>

            </div>
        </main>
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
        <Footer/>
        </>
    )
}
const mapDispatchToProps = {
    loguearUsuario: usersActions.loguearUsuario
}
export default connect(null, mapDispatchToProps) (Login)