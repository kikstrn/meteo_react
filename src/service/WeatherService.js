const url = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'a3d7c5fc38b1204dd62a403fe6631173'
let HTTpHeaders = new Headers()
let init = {
    method: 'GET',
    headers: HTTpHeaders,
    cache: 'default',
    mode: 'cors'
};

class WeatherService {
    getMeteoByVille = async (ville) => {
        return await fetch(`${url}?q=${ville}&appid=${apiKey}&lang=fr&units=metric`, init).then(res => res.json())
    }
}

export const weatherService = Object.freeze(new WeatherService())