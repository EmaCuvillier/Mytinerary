import { NavLink } from 'react-router-dom'
import { ImMenu } from "react-icons/im"
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const Nav = (props)=>{
    const userPic = props.userLogged ? props.userLogged.picture : "../assets/baseline_person_white_24dp.png"
    const nombreUsuario = props.userLogged ? props.userLogged.firstName : ''
    return(
        <nav>
            <div className='containerNav'>
                <div className='logoNavbar' style={{display:'flex'}}>
                    <h3 className='logo pointer'>MY<span>tinerary.</span></h3>
                </div>
                <div className='direccionesNav'>
                    <div className='navTodas'>
                        <div className='homeYcitiesNav'>
                            <NavLink exact to='/'><p className='direccionNav'>Home</p></NavLink>
                            <NavLink exact to='/cities'><p className='direccionNav'>Cities</p></NavLink>  
                        </div>
                        <div className='nombreFotoUsuarioNav'>
                            {!props.userLogged && (<><NavLink exact to='/signup'><p className='direccionNav'>Sign Up</p></NavLink> 
                            <NavLink exact to='/login'><p className='direccionNav'>Log in</p></NavLink></>)}
                            {props.userLogged && <h3 className='direccionNav pointer' onClick={props.desloguearUsuario}>Log Out</h3>}
                            <p className='nombreUsuarioNav'>{props.userLogged && `Hi ${nombreUsuario}!`}</p>
                            <NavLink exact to='/user'><div className='imagenUsuarioNav pointer' style={{backgroundImage:`url('${userPic}')`}}></div></NavLink>
                        </div> 
                    </div>
                </div>
            </div>
            <div className ='menuHamburguesa'>
                <nav>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkbtn">
                        <ImMenu />
                    </label>
                    <div className='imagenUsuarioHamburguesa pointer' style={{backgroundImage:`url('${userPic}')`}}></div>
                    <ul className='listaHamburguesa'>
                        <li><NavLink exact to='/'><p className='navHamburguesa'>Home</p></NavLink></li>
                        <li><NavLink exact to='/cities'><p className='navHamburguesa'>Cities</p></NavLink></li>
                        {!props.userLogged && (<><li><NavLink exact to='/signup'><p className='navHamburguesa'>Sign Up</p></NavLink></li> 
                        <li><NavLink exact to='/login'><p className='navHamburguesa'>Log In</p></NavLink></li></>)}
                        {props.userLogged && <p className='navHamburguesaLogOut pointer' onClick={props.desloguearUsuario}>LOG OUT</p>}             
                        <li><h3 className='logoHamburguesa'>MY<span>tinerary.</span></h3></li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}
const mapStateToProps = state => {
    return{
        userLogged : state.usersReducer.userLogged
    }
}
const mapDispatchToProps = {
    desloguearUsuario : usersActions.desloguearUsuario
}
export default connect (mapStateToProps, mapDispatchToProps)(Nav)