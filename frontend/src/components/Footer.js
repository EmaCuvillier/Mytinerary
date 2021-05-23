import { Link } from 'react-router-dom'
import { ImInstagram, ImFacebook2, ImMail2 } from 'react-icons/im';


const Footer = ()=>{
    return (
        <footer>
            <div className='logoFooter'>
                <h3 className='logo pointer'>MY<span>tinerary.</span></h3>
            </div>
            <div className='socialNavigationFooter'>
                <div className='socialFooter'>
                    <h3 className='tituloSeccionFooter'>Social</h3>
                    <div>
                    <ImInstagram className='iconoFooter pointer' />
                    <ImFacebook2 className='iconoFooter pointer' />
                    <ImMail2 className='iconoFooter pointer' />
                    </div>
                </div>
                <div className='navigationFooter'>
                    <h3 className='tituloSeccionFooter'>Site Map</h3>
                    <Link exact to='/'><p className='direccionFooter pointer'>Home</p></Link>
                    <Link exact to='/cities'><p className='direccionFooter pointer'>Cities</p></Link> 
                </div>
            </div>
            <div className='newsletterSuscripcionFooter'>
                <h3 className='tituloSeccionFooter'>Newsletter Suscription</h3>
                <form>
                    <input className='inputFooter' type='text' placeholder='Subscribe to our newsletter'/> 
                    <button className='botonFooter pointer'>Subscribe</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer