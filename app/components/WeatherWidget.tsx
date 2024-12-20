'use client';

import useSWR from 'swr';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeTransitionSettings, fadeVariants } from "../utils/framer";

interface WeatherObjectInterface {
    [key: string]: string;
}

interface CoordinatesInterface {
    latitude: number;
    longitude: number;
}

const WEATHER_OBJECT: WeatherObjectInterface = {
    Clear: 'ri-sun-line',
    Clouds: 'ri-foggy-line',
    Rain: 'ri-heavy-showers-line',
    Snow: 'ri-snowflake-line',
    Thunderstorm: 'ri-flashlight-line'
};

const WEATHER_DESC_OBJECT: WeatherObjectInterface = {
    Clear: '맑음',
    Clouds: '흐림',
    Rain: '비',
    Snow: '눈',
    Thunderstorm: '천둥번개'
};

const geolocationfetcher = () => {
    return new Promise<CoordinatesInterface>((res, rej) => {
        navigator.geolocation.getCurrentPosition((geo) => {
            res({
                latitude: geo.coords.latitude,
                longitude: geo.coords.longitude
            });
        },
        (error: GeolocationPositionError) => rej(error)
        );
    });
};

const weatherFetcher = async (url:string, coordinates: CoordinatesInterface) => {
    const { latitude, longitude } = coordinates;
    const response = await axios.get(`${url}?x=${longitude}&y=${latitude}`);

    if (response.data.error) {
        throw new Error(response.data.error);
    }

    return response.data;
};

const WeatherWidget: React.FC = () => {
    const { data: geoData, error: geoError } = useSWR<CoordinatesInterface>(
        'geolocationfetcher',
        geolocationfetcher,
        {
            refreshInterval: 300000,
            revalidateOnFocus: false,
            onErrorRetry(error, _key, _config, revalidate, { retryCount }) {
                if (!error || retryCount > 3) {
                    return;
                }

                setTimeout(() => revalidate({ retryCount }), 3000);
            },
        }
    );

    const { data: weatherData, error: weatherError } = useSWR(
        geoData ? ['/api/weather-api', geoData] : null,
        ([url, geoData]) => weatherFetcher(url, geoData),
        {
            refreshInterval: 300000,
            revalidateOnFocus: false,
            onErrorRetry(error, _key, _config, revalidate, { retryCount }) {
                if (!error || retryCount > 3) {
                    return;
                }
                console.log(retryCount);
                setTimeout(() => revalidate({ retryCount }), 3000);
            },
        }
    );

    if (geoError) {
        console.log('geoLocation error:', geoError);
    }

    if (weatherError) {
        console.log('weather api error:', weatherError);
    }

    if (!geoData || !weatherData) {
        return null;
    }

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
                <p className="text-xs xxs:text-sm">{weatherData.address}</p>
                <p>
                    <i className={`${WEATHER_OBJECT[weatherData.weather.main] ? WEATHER_OBJECT[weatherData.weather.main] : 'ri-mist-fill'} pr-2`}></i>
                    <span>{`${WEATHER_DESC_OBJECT[weatherData.weather.main] ? WEATHER_DESC_OBJECT[weatherData.weather.main] : '안개'} ${weatherData.weather.temp}°`}</span>
                </p>
            </motion.div>
        </AnimatePresence>
    );
};

export default WeatherWidget;