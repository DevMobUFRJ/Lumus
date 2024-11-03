import React from "react";
import TopLanding from './TopLanding';
import BottomLanding from "./BottomLanding";
import HomeNav from "./HomeNav";
import navHome from '../Assets/Images/nav-home.svg';
import navGlossario from '../Assets/Images/nav-glossario.svg';
import navLightMatch from '../Assets/Images/nav-lightmatch.svg';
import navFaq from '../Assets/Images/nav-faq.svg';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
    return (
        <AnimatePresence mode='wait'>
            <div className="main-page-container">
                <div className="main-page">
                    <TopLanding
                    />
                    <BottomLanding
                        marginTop={'4rem'}
                    />
                </div>
                <HomeNav
                    imageOne={navHome}
                    imageTwo={navGlossario}
                    imageThree={navLightMatch}
                    imageFour={navFaq}
                />
            </div>
        </AnimatePresence>
    );
};

export default Home;