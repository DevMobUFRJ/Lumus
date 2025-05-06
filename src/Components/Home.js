import React from "react";
import TopLanding from './TopLanding';
import BottomLanding from "./BottomLanding";
import MainPageHeader from './LogoLumos/MainPageHeader';
import NavBar from "./NavBar/NavBar";
import './Home.css';

const Home = () => {
    return (
        <div className="main-page-container">
            <MainPageHeader />
            <div className="main-page">
                <TopLanding
                />
                <BottomLanding
                    marginTop={'4rem'}
                />
            </div>
            <NavBar colorFaq={false} colorGlossario={false} colorHome={true} colorLightMatch={false}/>
        </div>
    );
};

export default Home;