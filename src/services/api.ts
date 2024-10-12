const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const FetchWeatherData = async (city: string, setError: (value: boolean) => void): Promise<WeatherDataProps> => {

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&lang=pt_BR`;
    const response = await fetch(url);

    if(!response.ok){
      setError(true)
      throw new Error();
    }

    const result = await response.json();
    return result;
  
  } catch (error) {
    console.log('erro:', error)
    throw new Error('erro');
  }
}