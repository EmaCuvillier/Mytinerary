import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarked } from '@fortawesome/free-solid-svg-icons'

const Activities = ({activities})=>{
    return (
        <div className='containerActivities' id='activitiesResponsive'>
            <div className='tituloActivities'>
                <h2>Activities <FontAwesomeIcon className='iconoTituloActivities' icon={faMapMarked} /></h2>
            </div>
            <div className='mostarLasActivities'>
                <div className="carousel-wrapper-Activities" id='contenedorActivitiesResponsive'>
                    <div className="carousel-container-Activities" id='carouselContendorResponsive'>
                        <div className="carousel-Activities">
                            {activities.length > 0 && activities.map((activity, i) => {
                                return <div key={i} className="image-one" style={{backgroundImage:`url('${activity.activityPic}')`}}  ><p className='tituloActivityCarousel'>{activity.title}</p></div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (Activities)