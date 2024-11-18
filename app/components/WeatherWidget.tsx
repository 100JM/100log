'use client';

import { useEffect, useState } from "react";
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeTransitionSettings, fadeVariants } from "../utils/framer";

interface RegionInterface {
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

interface WeatherObjectInterface {
    [key: string] : string;
}

const WEATHER_OBJECT: WeatherObjectInterface = {
    Clear: 'ri-sun-line',
    Clouds: 'ri-foggy-line',
    Rain: 'ri-heavy-showers-line',
    Snow: 'ri-snowflake-line',
    Atmosphere: 'ri-mist-fill',
    Thunderstorm: 'ri-flashlight-line'
};

const WeatherWidget: React.FC = () => {
    const [addr, setAddr] = useState<string>('');
    const [weather, setWeather] = useState<{
        main: string;
        description: string;
    }>({
        main: '',
        description: ''
    });
    const weather_api_key = process.env.NEXT_PUBLIC_WEATHER_API;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (geo) => {
            const { latitude, longitude } = geo.coords;

            try {
                const kakaoGeoUrl = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;
                const response = await axios.get(kakaoGeoUrl, {
                    headers: {
                        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
                    }
                });

                if (response.status === 200) {
                    const addressName = response.data.documents.find((i: RegionInterface) => {
                        return i.region_type === 'B'
                    });

                    setAddr(`${addressName.region_1depth_name} ${addressName.region_2depth_name}`);

                    try {
                        if (weather_api_key) {
                            const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&lang=kr`;
                            const weatherResponse = await axios.get(openWeatherUrl);

                            if (weatherResponse.status === 200) {
                                setWeather((prev) => {
                                    return {
                                        ...prev,
                                        main: weatherResponse.data.weather[0].main,
                                        description: weatherResponse.data.weather[0].description,
                                    }
                                });
                            }
                        }
                    } catch (error) {
                        console.log('open weather error :', error);
                    }
                }
            } catch (error) {
                console.log('kakao geo error :', error);
            }
        });


    }, []);

    return (
        <AnimatePresence>
            <motion.div
                key="weather"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={fadeTransitionSettings}
            >
                <p className="text-xs xxs:text-sm">{addr}</p>
                <p>
                    <i className={`${WEATHER_OBJECT[weather?.main]} pr-2`}></i>
                    <span>{weather?.description}</span>
                </p>
            </motion.div>
        </AnimatePresence>
    );
};

export default WeatherWidget;