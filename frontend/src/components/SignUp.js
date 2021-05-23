import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import GoogleLogin from 'react-google-login';

const SignUp = (props)=>{
    const [nuevoUsuario, setNuevoUsuario] = useState({firstName:'', lastName:'',email:'',password:'',picture:'',country:''})
    const [errores, setErrores] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json()
        .then(data => setCountries(data)))
     }, [])
 
    const capturarInput = e =>{
        const campo = e.target.name
        const valor = e.target.value
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: valor
        })
    }
    const enviar = async (e = null, googleUser = null)=>{
        e && e.preventDefault()
        let usuario = e ? nuevoUsuario : googleUser
        const respuesta = await props.crearUsuario(usuario)
        if(respuesta){
            setErrores(respuesta.details)
        }
    }
    const respuestaGoogle = (response) =>{
        const {givenName, email, googleId, imageUrl} = response.profileObj
        enviar(null, {firstName: givenName, lastName:'google', email: email, password: "a"+googleId, picture: imageUrl, country:'google'})
    }
    const respuestaErrores = (label)=>{
        var erroresAMostrar = errores.filter(error => error.context.label === label)
        return <p className='errorInput'>{erroresAMostrar.length > 0 && erroresAMostrar[0].message}</p>
    }
        return(
            <>
                <Nav />
                <main id='mainSignUp' style={{background:'url("https://www.xtrafondos.com/descargar.php?id=3341&resolucion=3840x2160")'}}>
                    <div className='contenedorSignUp'>
                        <div className='mitadIzquierda'>
                            <h2 className='tituloRegistro'>Sign Up</h2>
                            <div className='callRegistro'>
                                <h4 >Already have an account?</h4>
                                <NavLink exact to='/login'><p className='direccionNav redireccionRegistro'>Log in here!</p></NavLink>
                            </div>
                            <h3 className='logo pointer'>MY<span>tinerary.</span></h3>
                        </div>
                        <div className='mitadDerecha'>
                            <div className="form-style-8">
                                <h2>Create account</h2>
                                <form className='formUsuario'>
                                    <div>
                                        <input type="text" name="firstName" placeholder="First Name" value={nuevoUsuario.firstName} onChange={capturarInput}/>
                                        {respuestaErrores('firstName')}
                                        <input type="text" name="lastName" placeholder="Last Name" value={nuevoUsuario.lastName} onChange={capturarInput}/>
                                        {respuestaErrores('lastName')}
                                        <input type="email" name="email" placeholder="Email" value={nuevoUsuario.email} onChange={capturarInput}/>
                                        {respuestaErrores('email')}
                                        <input type="password" name="password" placeholder="Password" value={nuevoUsuario.password} onChange={capturarInput}/>
                                        {respuestaErrores('password')}
                                        <input type="url" name="picture" placeholder="URL of your picture" value={nuevoUsuario.picture} onChange={capturarInput}/>
                                        {respuestaErrores('picture')}
                                        <select name="country" value={nuevoUsuario.country} onChange={capturarInput}>
                                            <option disabled defaultValue value=''>Choose your country</option>
                                            {countries.map(country => <option key={country.numericCode} value={country.name}>{country.name}</option>)}
                                        </select>
                                        {respuestaErrores('country')}
                                    </div>
                                    <div className='botonesForm'>
                                        <input type="button" value="Sign Up" onClick={enviar} />
                                        <p>Or</p>
                                        <GoogleLogin
                                            clientId="147929169060-1mm3lp5214g564e0vn115ng10i0qvaae.apps.googleusercontent.com"
                                            buttonText="Sign Up with Google"
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
                <Footer/>
            </>
        )
}
const mapDispatchToProps = {
    crearUsuario: usersActions.crearUsuario
}
export default connect(null,mapDispatchToProps)(SignUp)