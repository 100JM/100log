import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
    const x = request.nextUrl.searchParams.get('x');
    const y = request.nextUrl.searchParams.get('y');

    if (!x || !y) {
        return NextResponse.json({ error: 'xy is required' }, { status: 400 });
    }

    try {
        const [kakaoResponse, weatherResponse] = await Promise.all([
            fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`, {
                headers: {
                    Authorization: `KakaoAK ${process.env.NEXT_KAKAO_REST_API_KEY}`,
                }
            }),
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${y}&lon=${x}&appid=${process.env.NEXT_WEATHER_API}&lang=kr&units=metric`)
        ]);

        const [kakaoData, weatherData] = await Promise.all([
            kakaoResponse.json(),
            weatherResponse.json()
        ]);

        const resultData = {
            address: `${kakaoData.documents[0].region_1depth_name} ${kakaoData.documents[0].region_2depth_name}`,
            weather: {
                main: weatherData.weather[0].main,
                description: weatherData.weather[0].description,
                temp: Math.floor(weatherData.main.temp)
            }
        }

        return NextResponse.json(resultData);
    } catch (error) {
        console.error('weather api error:', error);
        return NextResponse.json({ error: 'fetch weather api was failed' }, { status: 500 });
    }
}