import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const CurrentWeather = () => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('Tokyo');

  const fetchWeatherData = async () => {
    const api = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api}&units=metric`
    );
    console.log(response);
    const data = await response.json();
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  return (
    <>
      <div>
        <div className="flex flex-row items-center">
          <h3 className="justify-start text-5xl font-extrabold mt-4">
            Weather Now
          </h3>
          <div className="py-4 px-8 ml-96 border rounded-full bg-gray-200 flex flex-row items-center mt-4">
            <AiOutlineSearch />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="都市名を入れてください"
              className="bg-gray-200 ml-1"
            />
          </div>
        </div>

        <div>
          {!location ? (
            <h3>都市名が見つかりません</h3>
          ) : (
            <div>
              <h3>{location}</h3>
              <h3>{weather.main.temp}</h3>
              <h3>{weather.main.feels_like}</h3>
              <h3>{weather.main.temp_min}</h3>
              <h3>{weather.main.temp_max}</h3>
              <h3>{weather.main.humidity}</h3>
              <h3>{weather.main.pressure}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
