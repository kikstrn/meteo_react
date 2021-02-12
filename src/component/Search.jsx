import React,{Fragment, useEffect, useState} from 'react';
import { WeatherCard } from './WeatherCard';
import { weatherService } from '../service/WeatherService';

export const Search = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin:"10px",
        alignItems: 'center'
    }

    let [recherche, setRecherche] = useState("");
    let [response, setResponse] = useState({});

    useEffect( () => {
        console.log(response)
    }, [response])

    const handleChange = (event) => {
        setRecherche(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        weatherService.getMeteoByVille(recherche).then(res => {
            setResponse(res)
        })        
    }

    return (
        <Fragment>
        <form style={containerStyle} onSubmit={handleSubmit}>
            <h3 className="searchCity">Rechercher une ville :</h3>
            <input onChange={handleChange} className="inputSearch" type="text" name="search"/>
            <button className="buttonSearch" type="submit">Chercher</button>
        </form>

        <WeatherCard inputRecherche = {recherche} res = {response} />

        </Fragment>
    )
}
