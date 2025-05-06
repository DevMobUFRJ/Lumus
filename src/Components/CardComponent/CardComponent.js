import React from 'react';
import logo from '../../Assets/Images/Union.png'
import './CardComponent.css';
import { motion } from 'framer-motion';

const CardComponent = ({ image, title, description, color, onClick, isActive }) => {
  return (
    <motion.div
      className="card-component"
      onClick={onClick}
      initial={{ width: isActive ? '60vw' : '0.1vw', height: isActive ? '70vh' : '70vh', borderRadius: isActive ? '40px' : '40px' }}
      animate={{ width: isActive ? '60vw' : '0.1vw', height: isActive ? '70vh' : '70vh', borderRadius: isActive ? '40px' : '40px' }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: color, boxShadow: isActive ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none' }}
    >
      {isActive && (
        <>
          <div className='card-component-image-container'>
            <img className='card-component-image' src={image} alt={title} />
          </div>
          <div className='card-component-text-section-container'>
            <img src={logo} id='card-component-image-lumos' alt='Lumos' />
            <h2 id='card-component-title'>{title}</h2>
            <p id='card-component-paragraph'>{description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CardComponent;