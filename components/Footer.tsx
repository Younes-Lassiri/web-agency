import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-between flex-col lg:flex-row footer-section">
      <div className="text-white text-lg logo-site-text-footer"><strong>Tifawin </strong><span>Devs</span></div>
      <p className='text-white text-[12px]'>Copyright © TifawinDevs Studio</p>
    </footer>
  );
};

export default Footer;