const City = ({city}) =>{
    return (
        <div className="blog-card" style={{backgroundImage:`url('${city.image}`}}>
            <div className="title-content" >
                <h3 className='nameCity'>{city.name}</h3>
                <div className="intro"> <p>{city.country}</p> </div>
             </div>
            <div className="card-info">
                <p>{city.description}</p>
            </div>
        </div>
    )
}
export default City