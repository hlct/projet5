import React from 'react'
import '../App.css'
import NavigationMap from '../components/Map/NavigationMap'
import GoogleMap from '../components/Map/GoogleMap'



const Map = () => {
    return (
        <div className='box'>
            <NavigationMap />
            <div className='titremap'>
                <h1>Rechercher un restaurant</h1>
                <p>Venez découvrir les nouveaux restaurant de votre région</p>
            </div>
            <div className="mapinfo">
                <GoogleMap />
           </div>
        </div>
    )
}

export default Map