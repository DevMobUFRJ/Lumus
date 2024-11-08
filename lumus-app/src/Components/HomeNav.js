import React from "react";


const HomeNav = ({
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        altOne,
        altTwo,
        altThree,
        altFour
}) => {
    return (
        <div id="home-nav">
            <div className="home-nav-button" id="home-nav-button-home">
                <img 
                    src={imageOne} 
                    alt={altOne ? altOne : 'Home'} 
                    className="nav-image"
                />
            </div>
            <div className="home-nav-button" id="home-nav-button-glossario">
                <img 
                    src={imageTwo} 
                    alt={altTwo ? altTwo : 'Glossário'} 
                    className="nav-image"
                />
            </div>
            <div className="home-nav-button" id="home-nav-button-light-match">
                <img 
                    src={imageThree} 
                    alt={altThree ? altThree : 'Light Match'} 
                    className="nav-image"
                />
            </div>
            <div className="home-nav-button" id="home-nav-button-faq">
                <img 
                    src={imageFour} 
                    alt={altFour ? altFour : 'FAQ'}  
                    className="nav-image"
                />
            </div>
        </div>
    );
};

export default HomeNav;