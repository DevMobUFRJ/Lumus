import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CardComponent from './Components/CardComponent';
import StaticButton from './Components/Buttons';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from './Assets/Images/6082664-removebg-preview 1.png';
import img2 from './Assets/Images/removal 4.png';
import img3 from './Assets/Images/JEMA_GER_1639-09-removebg-preview 1.png';
import imgtest from './Assets/Images/Union.png';
import arrow from './Assets/Images/Vector.svg';
import bg from './Assets/Images/Onboarding 1.png';
import '../src/App.css';
import HomePage from './Components/Home';
import LuzGeral from './Components/LuzGeral';
import Faq from './Components/Faq';

const cardData = [
  {
    image: img1,
    title: 'Ilumine sua casa corretamente',
    description: 'Descubra as informações necessárias para obter a melhor luz geral em cada cômodo de sua residência',
    color: '#BB6402',
  },
  {
    image: img2,
    title: 'Você sabe o que é Luz geral?',
    description: 'Lumos explica! Descubra como identificar a iluminação geral na sua casa',
    color: '#984D08',
  },
  {
    image: img3,
    title: 'Explore mais sobre o mundo da iluminação',
    description: 'Com o Glossário você é capaz de entender a importância das propriedades lumínicas e as informações nas embalagens dos produtos de iluminação',
    color: '#7C3F0B',
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if(currentIndex == 2){
      navigate('/luz-geral');
    } else {
      const nextIndex = currentIndex === cardData.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='backgroundCards'
      >
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            color={card.color}
            onClick={handleNext}
            isActive={index === currentIndex}
          />
        ))}
        <div style={{ position: 'absolute', bottom: '12vw', right: '5vw' }}>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={arrow}/>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/luz-geral" element={<AnimatePresence mode='wait'>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <LuzGeral />
              </motion.div>
            </AnimatePresence>} />
        <Route path="/home" element={<AnimatePresence mode='wait'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <HomePage />
          </motion.div>
        </AnimatePresence>} />
      </Routes>
    </Router>
  );
};


export default App;
