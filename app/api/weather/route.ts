export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  const url =`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}`;

  const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.WEATHER_API_KEY!,
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result)
        return Response.json({result})
    } catch (error) {
        console.error(error);
    }
}
