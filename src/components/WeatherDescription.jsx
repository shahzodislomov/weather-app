import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherDescription = ({ value }) => {
  const [weather, setWeather] = useState(null);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const weatherResult = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=323ac639e097649e47abb93d4125d58a&units=metric`
        );
        setWeather(weatherResult.data);
        
        const locationResult = await axios.get(`https://restcountries.com/v3.1/name/${weatherResult.data.sys.country}`);
        setCountry(locationResult.data[0]);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    getWeather();
  }, [value]);

  if (!weather) return <div className="text-center text-2xl min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 pt-24">Please Enter a country or city name !!!</div>;

  const { name, main, wind, coord, timezone } = weather;
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  return (
    <div className="flex flex-col justify-center  items-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 p-4">
      {/* <img src={country?.coatOfArms?.png} alt="" width={40} className="absolute top-[210px] left-[560px]" /> */}
      <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
        Current Weather in {name}
      </h1>
      <div className="bg-white shadow-lg relative rounded-lg p-8 w-full max-w-md">
      <img src={country?.coatOfArms?.png} alt="" width={40} className="absolute top-0 left-0" />
        <div className="text-center mb-4">
          <p className="text-8xl font-bold text-blue-600">{`${main.temp} °C`}</p>
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-4">
          <span>Wind Speed:</span>
          <span>{`${wind.speed} km/h`}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-4">
          <span>Humidity:</span>
          <span>{`${main.humidity}%`}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-4">
          <span>Time:</span>
          <span>{formattedTime}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-4">
          <span>Seconds:</span>
          <span>{`${currentTime.getSeconds()}s`}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-4">
          <span>Coordinates:</span>
          <span>{`(${coord.lat}, ${coord.lon})`}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-lg mb-4">
          <span>Timezone:</span>
          <span>{timezone}</span>
        </div>
        <div className="text-center mt-4">
          <p className="text-xl text-gray-700">{`Country: ${country?.name?.common}`}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDescription;
