import Home from './pages/Home'
import Cities from './pages/Cities'
import Itinerary from './components/Itinerary'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Error from './components/Error'
import SignUp from './components/SignUp';
import Login from './components/Login';
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';
import Usuario from './components/Usuario';

function App(props) {
  if(!props.userLogged && localStorage.getItem('token')){
    const datosUsuarios = JSON.parse(localStorage.getItem('userLogged'))
    const usuarioLs = {
      token: localStorage.getItem('token'),
      ...datosUsuarios
    }
    props.loginForzadoPorLS(usuarioLs)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/cities' component={Cities}/>
        <Route exact path='/itinerary/:id' component={Itinerary} />
        <Route exact path='/errorServer' component={Error} />
        {props.userLogged && <Route exact path='/user' component={Usuario} />}
        {!props.userLogged && <Route exact path='/signup' component={SignUp}/>}
        {!props.userLogged && <Route exact path='/login' component={Login}/>}
        <Redirect to='/'/>
      </Switch>
    </BrowserRouter> 
  );
}
const mapStateToProps = state =>{
  return{
    userLogged: state.usersReducer.userLogged
  }
}
const mapDispatchToProps = { 
  loginForzadoPorLS: usersActions.loginForzadoPorLS
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
