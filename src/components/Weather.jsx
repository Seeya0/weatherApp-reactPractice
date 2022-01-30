import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Weather = () => {
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
        <div className="flex flex-row items-center text-2xl">
          <h3 className="justify-start">Weather</h3>
          <div className="p-4 border bg-gray-200 border-lg flex flex-row">
            <AiOutlineSearch />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="都市名を入れてください"
              className="bg-gray-200"
            />
          </div>
        </div>

        <div>
          {!location ? <h3>都市名が見つかりません</h3> : <h3>たまご</h3>}
        </div>
      </div>
    </>
  );
};

export default Weather;
