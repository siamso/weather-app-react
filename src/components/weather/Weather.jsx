import React, { useEffect, useState } from "react";
import Search from "../search/Search";

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const API_KEY = "fccdd7e4c7817e5ade9f150dabeb2efc";

  const fecthWeatherData = async (param) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${API_KEY}`
      );

      const data = await response.json();
      console.log(data);

      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);
      console.log(e.message);
    }
  };

  const handleSearch = () => {
    fecthWeatherData(search);
    setSearch("");
  };

  const getDate = () => {
    return new Date().toLocaleDateString("en-us", {
      month: "long",
      weekday: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : loading ? (
        <p>Loading....</p>
      ) : weatherData ? (
        <div className="flex flex-col items-center justify-center bg-green-600 w-4/5 mt-5 rounded-lg">
          <h1 className="text-3xl">
            {weatherData?.name},{weatherData?.sys?.country}
          </h1>
          <p>{getDate()}</p>
          <div>
            <p>Temp: {weatherData?.main?.temp}</p>
            <p>{weatherData?.weather[0]?.main}</p>
          </div>
          <div>
            <div>
              <p>{weatherData?.wind?.speed}</p>
              <p>Wind Speed</p>
            </div>
            <div>
              <p>{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
