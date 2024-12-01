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
      style={{
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '18px',
        margin: '0 5px 15vh',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isActive ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
      }}
    >
      {isActive && (
        <>
          <img src={image} alt={title} style={{ width: '100%', marginBottom: '10px' }} />
          <div
            style={{margin: '-150px 0 -40px 0'}}>
            <img src={logo} alt='Lumos' style={{margin: '0 0 -20px 0'}}/>
            <h2 style={{ color: '#fff', textAlign: 'left', fontSize: '2rem', fontWeight: '400', width: '90%' }}>{title}</h2>
            <p style={{ color: '#fff', textAlign: 'justify', fontSize: '1rem', fontWeight: '300', margin: '-20px 0 0 0', width: '98%' }}>{description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CardComponent;