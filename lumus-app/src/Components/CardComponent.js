import React from 'react';
import logo from '../Assets/Images/Union.png'
import './CardComponent.css';
import { motion } from 'framer-motion';

const CardComponent = ({ image, title, description, color, onClick, isActive }) => {
  return (
    <motion.div
      className="card"
      onClick={onClick}
      initial={{ width: isActive ? '20%' : '1%', height: isActive ? '80%' : '80%', borderRadius: isActive ? '25px' : '25px' }}
      animate={{ width: isActive ? '20%' : '1%', height: isActive ? '80%' : '80%', borderRadius: isActive ? '25px' : '25px' }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px',
        margin: '0 5px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isActive ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
        textAlign: 'left',
      }}
    >
      {isActive && (
        <>
          <img src={image} alt={title} style={{ width: '100%', marginBottom: '10px' }} />
          <div
            style={{margin: '-150px 0 -40px 0'}}>
            <img src={logo} alt='Lumos' style={{margin: '0 0 -20px 0'}}/>
            <h2 style={{ color: '#fff', textAlign: 'left', fontSize: '2rem', fontWeight: '400' }}>{title}</h2>
            <p style={{ color: '#fff', textAlign: 'left', fontSize: '1rem', fontWeight: '300', margin: '-20px 0 0 0' }}>{description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CardComponent;