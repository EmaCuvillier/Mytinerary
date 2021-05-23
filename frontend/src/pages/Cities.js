import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeaderCities from '../components/HeaderCities'
import MainCities from '../components/MainCities'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


class Cities extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.cargarCiudades()
    }

    render(){
        return(
            <div>
                <Nav />
                <HeaderCities />
                <MainCities ciudades={this.props.ciudades} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       ciudades:  state.citiesReducer.cities
    }
}
const mapDispatchToProps = {
    cargarCiudades: citiesActions.pedirTodasCiudades
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities)