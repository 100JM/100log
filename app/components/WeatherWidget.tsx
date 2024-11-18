'use client';

import { useEffect, useState } from "react";
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeTransitionSettings, fadeVariants } from "../utils/framer";

interface WeatherObjectInterface {
    [key: string]: string;
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

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (geo) => {
            const { latitude, longitude } = geo.coords;

            try {
                const queryParam = `?x=${longitude}&y=${latitude}`;

                const response = await axios.get(`/api/kakao-geo-api${queryParam}`);

                if (response.data.error) {
                    console.log(response.data.error);
                }

                if (response.status === 200) {
                    try {

                        const weatherResponse = await axios.get(`/api/open-weather-api${queryParam}`);

                        if (weatherResponse.data.error) {
                            console.log(response.data.error);
                        } else {
                            setAddr(`${response.data.region_1depth_name} ${response.data.region_2depth_name}`);
                            setWeather((prev) => {
                                return {
                                    ...prev,
                                    main: weatherResponse.data[0].main,
                                    description: weatherResponse.data[0].description,
                                }
                            });
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
        <>
            {
                addr ?
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
                    :
                    null
            }
        </>
    );
};

export default WeatherWidget;