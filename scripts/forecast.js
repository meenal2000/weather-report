// for api handling
const key = 'KKedpAAuKXzlAQD3LjuciPFNVtJ4Z5oL';

// get weather information
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    // console.log(data);
    return data[0];
};

// get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query); // this is gonna return a promise
    const data = await response.json();
    //console.log(data);
    return data[0];
};

// getCity('manchester');
// getCity('Manchester').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

// getWeather("329260");
