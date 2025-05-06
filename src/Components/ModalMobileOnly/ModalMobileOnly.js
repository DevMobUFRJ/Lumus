import React, { useEffect, useState } from "react";
import mainPageHeader from '../../Assets/Images/mainPageHeader.svg';
import bgVector from '../../Assets/Images/bgVector.png';
import './ModalMobileOnly.css';

const isMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
};

export default function MobileOnlyModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isMobileDevice()) {
      setShowModal(true);
    }
  }, []);

  if (!showModal) return null;

  return (
    <div className="overlay">
      <img src={bgVector} alt="Fundo decorativo" className="bg-vector" />
      <div className="modal">
        <div className="icon">
          <img id="main-page-header-image" alt='Lumos' src={mainPageHeader} />
        </div>
        <h2 className="title">Acesse via celular</h2>
        <p className="message">
          Esta aplicação foi desenvolvida para uso exclusivo em dispositivos móveis.
        </p>
      </div>
    </div>
  );
}
