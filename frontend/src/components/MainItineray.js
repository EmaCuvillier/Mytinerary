import { Link } from 'react-router-dom'
import { ImTelegram } from 'react-icons/im';
import CardItinerary from './CardItinerary'

const MainItinerary = ({city, itineraries})=>{
    
    return (
        <main className='mainItinerary'>
                <div className='headerMainItinerary'>
                    <div className='headerMobile' style={{backgroundImage:`url('${city[0].image}')`}}></div>
                    <div className="fotoCiudadItinerary">
                        <div className="d1" style={{backgroundImage:`url('${city[0].image}')`}}></div>
                        <div className="d2" style={{backgroundImage:`url('${city[0].image}')`}}></div>
                        <div className="d3" style={{backgroundImage:`url('${city[0].image}')`}}>
                            <div className='nameCityPort'>{city[0].name}</div>
                        </div>
                        <div className="d4" style={{backgroundImage:`url('${city[0].image}')`}}></div>
                    </div>
                </div>
                <div className='contenedorItinerarios'>
                    {itineraries.length > 0 
                        ? itineraries.map(itinerary => {
                        return(<CardItinerary key={itinerary._id} itinerary={itinerary}/>)})
                        : <div className='sinItinerarios' style={{backgroundImage:'url("../assets/sinItinerarios.jpg")'}}>
                            <h3 className='textoSinItinearios1'>We don't have any itineraries yet, but you can make the first one!</h3>
                            <h3 className='textoSinItinearios2'> Or...go back to see more cities!</h3>
                        </div>
                }               
                </div>
            
            <Link to='/cities'><button className='botonCallToAction' data-hover="click me!"><div>Cities<ImTelegram className='iconoCallToAction'/></div></button></Link>
        </main>
    )
}
export default MainItinerary
