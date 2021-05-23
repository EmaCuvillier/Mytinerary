import Sliders from './Sliders'
import Flickity from 'react-flickity-component'
import '../flickity.css'


const Carrousel = ()=>{

    const todasLasCiudades = [
        [{id:1, name:'Hong Kong', image:'hongkong.jpg'},
        {id:2, name:'Bangkok', image:'bangkok.jpg'},
        {id:3, name:'London', image:'london.jpg'},
        {id:4, name:'Sydney', image:'sydney.jpg'}
        ],
        [
        {id:5, name:'Singapore', image:'singapore.jpg'},
        {id:6, name:'Paris', image:'paris.jpg'}, 
        {id:7, name:'Dubai', image:'dubai.jpg'}, 
        {id: 8, name:'New York', image:'newyork.jpg'}
    ],
        [
        {id: 9, name:'Kuala Lumpur', image:'kualalumpur.jpg'},
        {id: 10, name:'Istanbul', image:'istanbul.jpg'},
        {id: 11, name:'Rome', image:'rome.jpg'},
        {id: 12, name:'Miami', image:'miami.jpg'}
    ]
    ]
    const arrayCiudades = todasLasCiudades.map(array => array.slice(0,2))
    const arrayCiudades2 = todasLasCiudades.map(array => array.slice(2,5))
    const ciudadesEnSeis = arrayCiudades.concat(arrayCiudades2)
    
    const flickityOptions = {
        initialIndex: 1,
        pageDots: true,
        wrapAround: true,
        autoPlay: 4000,
        adaptiveHeight: true
    }

    return(
        <>
        <h1 className='tituloCarousel'>Popular MYtineraries</h1>
        <Flickity className={'carousel'} elementType={'div'} options={flickityOptions} disableImagesLoaded={false} reloadOnUpdate static>

            {window.screen.width < 858 ? ciudadesEnSeis.map((conjuntoDeCiudades, index)=> {
                return <Sliders key={index} ciudades={conjuntoDeCiudades}/>
            })
            : todasLasCiudades.map((conjuntoDeCiudades, index)=> {
                return <Sliders key={index} ciudades={conjuntoDeCiudades}/>
            })
        }


        </Flickity>
        </>
    )
}
export default Carrousel