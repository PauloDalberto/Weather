interface WeatherDataProps {
  weather: {
    description: string;
  }[];

  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };

  wind: {
    speed: number;
  };

  name: string;
  
  sys: {
    country: string
  }
}