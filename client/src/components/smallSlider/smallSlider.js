import React from 'react';
import './smallSlider.scss';

const SmallSlider = ({ partners, links }) => {
  return (
    <div className='card'>
      {partners.map((partner, idx) => (
        <a href={links[idx]} role='navigation' key={partner} target='_blank'>
          <img src={partner} alt='partner' />
        </a>
      ))}
    </div>
  );
};

export default SmallSlider;
