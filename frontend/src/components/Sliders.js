import Slide from './Slide'

const Sliders = ({ciudades})=>{
    return(
        <div className="carousel-cell">
            {ciudades.map(city => {
                return <Slide key={city.name} city={city}/>
            })}
        </div>
    )
}
export default Sliders