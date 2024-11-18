'use client';

import { useEffect, useState } from "react";
import axios from 'axios';

interface regionInterface {
    address_name: string;
    code: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_4depth_name: string;
    region_type: string;
    x: number;
    y: number;
}

const WeatherWidget: React.FC = () => {
    const [addr, setAddr] = useState<string>('');
    const weather_api_key = process.env.NEXT_PUBLIC_WEATHER_API;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (geo) => {
            const { latitude, longitude } = geo.coords;

            const kakaoGeoUrl = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;

            const response = await axios.get(kakaoGeoUrl, {
                headers: {
                    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
                }
            });

            if (response.status === 200) {
                const addressName = response.data.documents.find((i: regionInterface) => {
                    return i.region_type === 'B'
                });

                setAddr(addressName.address_name);
            }
            
            if (weather_api_key) {

                const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&lang=kr`;
    
                const weatherResponse = await axios.get(openWeatherUrl);
    
                console.log(weatherResponse);
            }
        });


    }, []);

    return (
        <div>
            <p className="text-xs xxs:text-sm">{addr}</p>
            <i className="ri-sun-line"></i>
        </div>
    );
};

export default WeatherWidget;