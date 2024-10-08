const apiKey = process.env.NEXT_PUBLIC_API_KEY
const url = `https://api.openweathermap.org/data/2.5/weather?q=nova prata do iguaçu&APPID=${apiKey}&lang=pt_BR`;


export const FetchWeatherData = async (): Promise<WeatherDataProps> => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

