import '../styles/CardCity.css'
import City from './City'
import { Link } from 'react-router-dom'
import citiesActions from '../redux/actions/citiesActions'
import {connect} from 'react-redux'


const MainCities = ({ciudades, filtrarCiudades}) => {

    return(
        <main className='mainCities'> 

            <div className='buscadorCiudades'>
                <h3 className='callCity'>Take a look at these cities!</h3>
                <form action="" className="search-bar">
                    <input type="search" name="search" pattern=".*\S.*" required onChange={(e)=>filtrarCiudades(e.target.value)}/>
                    <button className="search-btn">
                        <span>Search</span>
                    </button>
                </form>
            </div>
            
            <div className='contenedorCiudades'>
                {ciudades.length > 0 ? ciudades.map(city =>{
                    return <Link key={city.name} to={`/itinerary/${city._id}`}><City key={city._id} city={city}/></Link>
                    })
                    : <div className='sinCoincidencia' style={{backgroundImage: "url('./assets/aeropuertoCerrado.jpg')"}}> 
                        <h1 className='fraseSinCoincidencia'>No Match</h1>
                    </div>
                }
            </div>        
        </main>
    )
}

const mapStateToProps = state => {
    return {
       ciudades:  state.citiesReducer.ciudadesAMostrar
    }
}
const mapDispatchToProps = {
    filtrarCiudades: citiesActions.filtrarCiudades
}
export default connect(mapStateToProps, mapDispatchToProps)(MainCities)