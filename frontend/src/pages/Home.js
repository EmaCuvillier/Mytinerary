import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'

class Home extends React.Component{
    render(){
        return(
            <>
            <Header />
            <MainHome />
            <Footer />
            </>
        )
    }
}

export default Home