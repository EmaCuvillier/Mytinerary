const Slide = ({city}) =>{
    return (
    <div className='cadaDivCarousel' style={{backgroundImage:`url('./assets/${city.image}')`}}>
        <h1>{city.name}</h1>
    </div>
    )
}
export default Slide