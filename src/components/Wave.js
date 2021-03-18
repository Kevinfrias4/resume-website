import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wave = () => {
    return(
       <WaveSvg
            fillOpacity="1"
            id="bg-svg"
            viewBox="0 0 1440 500" 
            xmlns="http://www.w3.org/2000/svg" 
            class="transition duration-300 ease-in-out delay-150"
        >
            <defs><linearGradient 
                id="gradient"><stop offset="5%" stop-color="#fcb90088"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs>
                <motion.path 
                d="M 0,500 C 0,500 0,166 0,166 C 95.43333333333334,151.7051282051282 190.86666666666667,137.4102564102564 271,143 C 351.1333333333333,148.5897435897436 415.9666666666667,174.06410256410254 488,188 C 560.0333333333333,201.93589743589746 639.2666666666667,204.33333333333334 716,187 C 792.7333333333333,169.66666666666666 866.9666666666665,132.6025641025641 953,115 C 1039.0333333333335,97.3974358974359 1136.8666666666668,99.25641025641025 1220,111 C 1303.1333333333332,122.74358974358975 1371.5666666666666,144.37179487179486 1440,166 C 1440,166 1440,500 1440,500 Z"  
                fill="url(#gradient)" 
                class="transition-all duration-300 ease-in-out delay-150"
            ></motion.path>
            <defs><linearGradient 
                id="gradient"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs>
                <motion.path 
                d="M 0,500 C 0,500 0,333 0,333 C 78.28717948717949,318.74615384615385 156.57435897435897,304.4923076923077 242,303 C 327.425641025641,301.5076923076923 419.9897435897435,312.776923076923 506,328 C 592.0102564102565,343.223076923077 671.4666666666668,362.4 743,361 C 814.5333333333332,359.6 878.1435897435897,337.6230769230769 951,319 C 1023.8564102564103,300.3769230769231 1105.9589743589745,285.10769230769233 1189,288 C 1272.0410256410255,290.89230769230767 1356.0205128205127,311.94615384615383 1440,333 C 1440,333 1440,500 1440,500 Z" 
                stroke="none" 
                stroke-width="0" 
                fill="url(#gradient)" 
                class="transition-all duration-300 ease-in-out delay-150"
                >
                
            </motion.path>
        </WaveSvg>
        
        /*<WaveSvg 
            viewBox="0 0 1440 363" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                initial={{ pathLength: 0, pathOffset: 2 }}
                animate={{ pathLength: 1, pathOffset: 0}}
                transition={{ duration: 3.2 }}
                d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
                stroke="darkCyan" 
                strokeOpacity="0.5" 
                strokeWidth="10"
            />
        </WaveSvg>*/
    )
};

const WaveSvg = styled.svg`
    position: absolute;
    left: 0;
    top: 70%;
    z-index: -1;
`;

export default Wave;