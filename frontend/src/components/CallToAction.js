import { ImTelegram } from 'react-icons/im';
import { Link } from 'react-router-dom'

const CallToAction = ()=>{
    return (
        <div>

            <div className='callToAction'>
                <div className='imagenCall' style={{backgroundImage: `url('./assets/familiacomputadora.jpg')`}}>

                </div>
                <div className='textoCall'>
                    <h4 className='tituloCallToAction'>Looking for itineraries?</h4>
                    <h4 className='textoCallToAction'>The best trip is always the next...</h4>
                    <Link to='/cities'>
                    <button className='botonCallToAction' data-hover="click me!"><div>Cities<ImTelegram className='iconoCallToAction'/></div></button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default CallToAction