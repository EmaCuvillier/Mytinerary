import Nav from './Nav'
import Hero from './Hero'


const Header = ()=>{
    return(
        <header >
            <Nav />
            <div className='heroHome'><Hero/></div>
            <div className='headerHome' style={{backgroundImage:'url("./assets/pruebaportada.png")'}}></div>
        </header>
    )
}
export default Header