import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest): Promise<NextResponse> {

    const x = request.nextUrl.searchParams.get('x');
    const y = request.nextUrl.searchParams.get('y');

    if (!x || !y) {
        return NextResponse.json({ error: 'xy is required' }, { status: 200 });
    }

    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${y}&lon=${x}&appid=${process.env.NEXT_WEATHER_API}&lang=kr&units=metric`;
    const response = await axios.get(openWeatherUrl);

    if (response.status === 200) {
        return NextResponse.json(response.data);
    } else {
        return NextResponse.json({ error: response.statusText }, { status: response.status });
    }
};