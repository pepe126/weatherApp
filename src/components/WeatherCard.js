import React from 'react'

const WeatherCard = (props) => {

    return (
     <div className="card d-flex align-content-center align-items-center flex-wrap">
        <div className= 'd-flex flex-column'>
            <img className = 'd-flex' alt='Icona' src={props.icon}></img>
            <p className ='d-flex'> {props.location} </p>
        </div>        
        <div className= 'd-flex justify-content-between'>
            <span className = "">{props.condition}</span><span className = ''>{props.temperature}°C</span>
        </div> 
     </div>
    )
}


export default WeatherCard;