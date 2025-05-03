import React from "react";
import TopLanding from './TopLanding';
import BottomLanding from "./BottomLanding";
import NavBar from "./NavBar/NavBar";
import './Home.css';
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
                <NavBar colorFaq={false} colorGlossario={false} colorHome={true} colorLightMatch={false}/>
            </div>
        </AnimatePresence>
    );
};

export default Home;