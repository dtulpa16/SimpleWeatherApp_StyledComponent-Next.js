export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  const url =`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`;

  const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.WEATHER_API_KEY!,
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const weather = await response.json();
        return Response.json({weather})
    } catch (error) {
        console.error(error);
    }
}
