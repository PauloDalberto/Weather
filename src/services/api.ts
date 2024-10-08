const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const FetchWeatherData = async (city: string): Promise<WeatherDataProps> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&lang=pt_BR`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}