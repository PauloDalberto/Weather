'use client'

import { FetchWeatherData } from "@/services/api";
import { GetDate } from "@/utils/getDate";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { TiWeatherSunny, TiWeatherWindy, TiWeatherCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const { fullYear, fullDate } = GetDate();

  async function handleCity(event: any) {
    event.preventDefault();
    const cityName = event.target.city.value;
    const data = await FetchWeatherData(cityName);
    setWeatherData(data);
  }

  return (
    <main className="grid grid-cols-[2fr_1fr] h-screen max-lg:grid-cols-1">
      <section id="home" className="bg-white h-screen max-lg:h-fit p-8">
        <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-3">
          <div className="max-sm:flex items-center gap-4">
            <h1 className="text-4xl max-sm:hidden font-bold">{fullYear}</h1>
            <h2 className="text-lg max-sm:text-4xl max-sm:font-bold font-medium">{fullDate}</h2>
          </div>
       
          <form className="relative text-gray8 h-fit  focus-within:text-blue1 flex items-center gap-4 max-[420px]:flex-col" onSubmit={handleCity}>
            <MagnifyingGlassIcon width={24} height={24} className="absolute top-2.5 w-5 h-5 left-2"/>
            <input placeholder="Digite a cidade desejada" name="city" className="py-2 placeholder:text-gray8 border border-gray4 text-black bg-gray2 rounded pl-9 pr-2 w-80 font-medium max-sm:w-fit"/>

            <div>
              <button type="submit" className="bg-blue1 text-white font-bold py-2 px-4 rounded">Pesquisar</button>
            </div>
          </form>

          <UserIcon className="cursor-pointer max-md:hidden" width={24} height={24} />
        </nav>

        <hr className="my-6"/>

        <div className="flex flex-row items-center justify-between  max-[420px]:flex-col max-[420px]:items-start">
          <h2 className="font-medium text-lg">Estatística do clima</h2>
          <a href="https://google.com" className="text-blue1 font-medium">Mais detalhes</a>
        </div>

        <div className="grid grid-cols-2 mt-3 gap-4 max-sm:grid-cols-1">
          <div className="w-full bg-gray2 border-gray3 border rounded-lg flex items-center px-6 py-2 gap-4 h-32">
            <TiWeatherSunny  size={72} className="text-blue1"/>

            <div className="flex flex-col gap-2">
              <span className="text-gray7  text-lg font-bold">Céu no momento</span>
              <p className="text-2xl font-bold text-black">{weatherData?.weather[0].description ? weatherData?.weather[0].description : 'Busque por sua cidade'}</p>
            </div>
          </div>

          <div className="w-full bg-gray2 border-gray3 border rounded-lg flex items-center px-6 py-2 gap-4 h-32">
            <TiWeatherWindy size={72} className="text-blue1"/>

            <div className="flex flex-col gap-2">
              <span className="text-gray7 text-lg  font-bold">Velocidade do vento</span>
              <p className="text-2xl font-bold text-black">{weatherData?.wind.speed ? weatherData?.wind.speed : 0}m/s</p>
            </div>
          </div>

          <div className="w-full bg-gray2 border-gray3 border rounded-lg flex items-center px-6 py-2 gap-4 h-32">
            <TiWeatherCloudy size={72} className="text-blue1"/>

            <div className="flex flex-col gap-2">
              <span className="text-gray7  text-lg font-bold">Sensação térmica</span>
              <p className="text-2xl font-bold text-black">{Number((weatherData?.main.feels_like as number) - 273.15).toFixed(1)}ºC</p>
            </div>
          </div>

          <div className="w-full bg-gray2 border-gray3 border rounded-lg flex items-center px-6 py-2 gap-4 h-32">
            <WiHumidity size={72} className="text-blue1"/>

            <div className="flex flex-col gap-2">
              <span className="text-gray7 text-lg  font-bold">Umidade do ar</span>
              <p className="text-2xl font-bold text-black">{weatherData?.main.humidity ? weatherData?.main.humidity : 0}%</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id='weather' className="bg-backgroundBlue h-screen p-8 max-lg:h-[100%]">
        <div>
          <h1 className="text-4xl text-white font-bold">{ weatherData?.name ? weatherData?.name : 'Digite sua cidade'}</h1>
          <h2 className="text-lg text-gray5 font-medium">{weatherData?.sys.country}</h2>
        </div>

        <div className="flex items-center mt-20 gap-2">
          <TiWeatherCloudy  size={96} className="text-blueLight1 "/>
          <h1 className="text-white text-6xl">{Number((weatherData?.main.temp as number) - 273.15).toFixed(1)}ºC</h1>
        </div>

        <hr className="my-6 border-blueLight1"/>
      </section>
    </main>
  );
}

