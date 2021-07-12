// for dom manipulation

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructure properties 
    const {cityDets , weather} = data;

    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4"></div>
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    `;

    // update images
    // let timesrc = null;
    // if(weather.IsDayTime)
    // {
    //     timesrc = 'img/day.svg';
    // }
    // else
    // {
    //     timesrc = 'img/night.svg';
    // }

    // other way around
    timesrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src',timesrc);
    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconsrc);
    // remove the d-none class
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }
};

const updateCity = async(city) => {
    const cityDets = await getCity(city);
    //console.log(city);
    const weather = await getWeather(cityDets.Key);
    return {
        cityDets: cityDets,
        weather: weather
    };
};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update ui with city value
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});