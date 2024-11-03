import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from "react";
import lampCarousel from '../Assets/Images/frame41.png';
import pencilCarousel from '../Assets/Images/frame43.png';
import chandelierCarousel from '../Assets/Images/frame44.png';
import handCarousel from '../Assets/Images/frame45.png'
import windowCarousel from '../Assets/Images/frame47.png';
import CarouselComponent from './CarouselComponent';
import './Carousel.css';

const Carousel = (() => {
    const carouselDiv = useRef();

    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(carouselDiv.current?.scrollWidth - carouselDiv.current?.offsetWidth)
    }, [])

    var carousel1 = <CarouselComponent
            image={lampCarousel}
            text="Você sabe escolher uma lâmpada?"
            buttonText="Assistir vídeo"
            buttonWidth="10rem"
            buttonHeight="3.2rem"
            buttonBorderRadius="2rem"
    />

    var carousel2 = <CarouselComponent
            image={chandelierCarousel}
            text="Você sabe o que é fluxo luminoso e fluxo energético?"
            buttonText="Assistir vídeo no TikTok"
            buttonWidth="15rem"
            buttonHeight="3.2rem"
            buttonBorderRadius="2rem"
    />
    
    var carousel3 = <CarouselComponent
            image={pencilCarousel}
            text="Jogo da forca - Propriedades Lumínicas"
            buttonText="Acesso o jogo"
            buttonWidth="10rem"
            buttonHeight="3.2rem"
            buttonBorderRadius="2rem"
    />
    
    var carousel4 = <CarouselComponent
            image={windowCarousel}
            text="Você sabe o que é intensidade luminosa?"
            buttonText="Assistir vídeo no TikTok"
            buttonWidth="15rem"
            buttonHeight="3.2rem"
            buttonBorderRadius="2rem"
    />

    var carousel5 = <CarouselComponent
            image={handCarousel}
            text="Jogo da memória dos pictogramas"
            buttonText="Acesse o jogo"
            buttonWidth="10rem"
            buttonHeight="3.2rem"
            buttonBorderRadius="2rem"
    />

    const array = [carousel1, carousel2, carousel3, carousel4, carousel5]

    return (
        <motion.div ref={carouselDiv} className='carousel' whileTap={{ cursor: "grabbing" }}>
            <motion.div className='carousel-inner' drag="x" dragConstraints={{ right: 0, left: -width }}>
                {array.map((object, i) => (
                    <motion.div className='carousel-item' key={i}>
                        {object}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )

})

export default Carousel;