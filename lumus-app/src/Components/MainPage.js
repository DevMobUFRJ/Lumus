import React from "react";
import TopLanding from './TopLanding';
import BottomLanding from "./BottomLanding";

const MainPage = () => {
    return (
        <div className="main-page-container">
            <TopLanding
            />
            <BottomLanding
                marginTop={'4rem'}
            />
        </div>
    );
};

export default MainPage;