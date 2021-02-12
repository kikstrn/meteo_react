import React, { useEffect, useState, Fragment } from 'react'

export const WeatherCard = (props) => {

    let [donnee, setDonnee] = useState({});

    useEffect( () => {
        console.log("test",props)
        handleDonnee(props.res)
    }, [props] )

    const handleDonnee = (donnee) => {
        setDonnee(donnee)
    }

    const card = 
        (
            <Fragment>
                {(donnee && donnee.weather && donnee.main) &&
                <div className="weatherCard"> 
                     <h2>Ville : <span>{donnee.name}</span></h2>
                        <div className="info">
                            <p><span>{donnee.weather[0].description}</span></p>
                            <p>Température : <span>{donnee.main.temp}</span>°C</p>
                        </div>
                    <hr/>
                        <div>
                            <p>Ressenti : <span>{donnee.main.feels_like}</span>°C</p>
                            <p>Min : <span>{donnee.main.temp_min}</span>°C</p>
                            <p>Max : <span>{donnee.main.temp_max}</span>°C</p>
                            <p>Humidité : <span>{donnee.main.humidity}</span>%</p>
                            <p>Pression : <span>{donnee.main.pressure}</span>hPA</p>
                        </div>
                </div>
            }
            </Fragment>
        )

    return (
        <div>
          {card}  
        </div>        
    )
}
