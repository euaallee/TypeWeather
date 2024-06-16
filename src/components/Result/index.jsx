import React, { useState, useEffect } from 'react';
import logo2 from '/images/Logo2.svg';
import * as WM from '../../utils/weatherMoment';
import * as CD from '../../utils/condition';
import * as Type from '../../utils/type';
import * as C from './style';

export default function Result({ city, currently, description, forecast, dayWeek, date, hours, temp, rain, humidity, windSpeedy, conditionSlug }) {
  const [bg, setBg] = useState(null);
  const [states, setStates] = useState(null);

  const weatherMapping = {
    dia: {
      clear_day: WM.ClearDay,
      cloudly_day: WM.CloudyDay,
      none_day: WM.FewCloudsDay,
      rain: WM.RainDay,
      snow: WM.SnowDay,
      storm: WM.StormDay,
    },
    noite: {
      clear_night: WM.ClearNight,
      cloudly_night: WM.CloudyNight,
      none_night: WM.FewCloudsNight,
      rain: WM.RainNight,
      snow: WM.SnowNight,
      storm: WM.StormNight,
    },
  };

  const getWeatherMoment = (condition, timeOfDay) => {
    return weatherMapping[timeOfDay][condition]?.Moment || null;
  };

  const getWeatherBackground = (condition, timeOfDay) => {
    return weatherMapping[timeOfDay][condition]?.Weather || null;
  };

  useEffect(() => {
    setBg(getWeatherBackground(conditionSlug, currently));
    setStates(getWeatherMoment(conditionSlug, currently));
  }, [conditionSlug, currently]);

  let oneFour = forecast.slice(0, 5);

  return (
    <C.Dash>
      <C.Card>
        <C.Wrapper>
          <C.Home>
            <img src={logo2} alt="Logo 2" />
          </C.Home>
          <C.InputSearch>
            <input placeholder='Buscar local' type="text" name="searchLocal" id="searchLocal" />
          </C.InputSearch>
        </C.Wrapper>
        <C.Display img={bg}>
          <C.DisplatText>
            <C.CityName>
              <p>{city}</p>
              <span>{dayWeek}, {date}</span>
            </C.CityName>
            <C.DisplayTime>
              <p>{hours}</p>
            </C.DisplayTime>
          </C.DisplatText>
          <C.Temp>
            <C.DisplayTemp>
              <h2>{temp}°c</h2>
              <C.DisplayTempInfo>
                <span><strong>32°c / 26°c</strong></span>
                <C.Divider></C.Divider>
                <span>{description}</span>
              </C.DisplayTempInfo>
            </C.DisplayTemp>
            <C.WeatherStates img={states} />
          </C.Temp>
        </C.Display>
      </C.Card>
      <C.CardDetail>
        <C.WeatherDetail>
          <h3>Detalhes do clima hoje</h3>
          <C.WeatherDetailItem>
            <C.TitleDetailItem>
              <img src={Type.thermometerSimpleLight.type} alt="Thermometer" />
              <p>Sensação térmica</p>
            </C.TitleDetailItem>
            <p>{}<span>°c</span></p>
          </C.WeatherDetailItem>
          <C.WeatherDetailItem>
            <C.TitleDetailItem>
              <img src={Type.cloudRainLight.type} alt="DropLight" />
              <p>Probabilidade de chuva</p>
            </C.TitleDetailItem>
            <p>{rain}<span>%</span></p>
          </C.WeatherDetailItem>
          <C.WeatherDetailItem>
            <C.TitleDetailItem>
              <img src={Type.windLight.type} alt="WindLight" />
              <p>Velocidade do vento</p>
            </C.TitleDetailItem>
            <p>{windSpeedy}<span></span></p>
          </C.WeatherDetailItem>
          <C.WeatherDetailItem>
            <C.TitleDetailItem>
              <img src={Type.dropLight.type} alt="Spinner" />
              <p>Umidade do ar</p>
            </C.TitleDetailItem>
            <p>{humidity}<span>%</span></p>
          </C.WeatherDetailItem>
          <C.WeatherDetailItem>
            <C.TitleDetailItem>
              <img src={Type.sunDimLight.type} alt="Sun" />
              <p>Índice UV</p>
            </C.TitleDetailItem>
            <p>{}<span></span></p>
          </C.WeatherDetailItem>
        </C.WeatherDetail>
        <C.NextDays>
          <h3>Previsão para 5 dias</h3>
          <C.Forecast>
            {oneFour.map((day, index) => (
              <C.Day key={index}>
                <p><strong>{day.weekday}-{day.date}</strong></p>
                <img src={CD[day.condition]?.url} alt={day.condition} />
                <p>{day.description}</p>
                <span><strong>{day.max}°c</strong> {day.min}°c</span>
              </C.Day>
            ))}
          </C.Forecast>
        </C.NextDays>
      </C.CardDetail>
    </C.Dash>
  );
}