import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { useSwipeable } from 'react-swipeable';

import './heroSlider.en.scss';

const SliderItem = ({ alternateFunc, item, index }) => {
  const alternateRight = index => {
    index === 2 ? alternateFunc(0) : alternateFunc(index + 1);
  };
  const alternateLeft = index => {
    index === 0 ? alternateFunc(2) : alternateFunc(index - 1);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => alternateLeft(index),
    onSwipedRight: () => alternateRight(index),
  });

  return (
    <div {...handlers} className='gronic-heroContainer'>
      <img
        alt={item.heading}
        className='gronic-heroImage'
        src={item.imageURL}
      />
      <div className='gronic-heroImageTint' />
      <h1 className='gronic-sliderHead'>{item.heading}</h1>
      <p className='gronic-sliderP'>{item.description}</p>
      <Link className='gronic-sliderButton' to={item.buttonLink}>
        {item.buttonText}
      </Link>
      <button
        className='gronic-sliderNavr'
        onClick={() => alternateRight(index)}
      >
        {' '}
        &gt;
      </button>
      <button
        className='gronic-sliderNavl'
        onClick={() => alternateLeft(index)}
      >
        {' '}
        &lt;
      </button>
      <div className='gronic-sliderIndicatorGroup'>
        <div
          className={index === 0 ? 'sliderIndicator active' : 'sliderIndicator'}
        />
        <div
          className={index === 1 ? 'sliderIndicator active' : 'sliderIndicator'}
        />
        <div
          className={index === 2 ? 'sliderIndicator active' : 'sliderIndicator'}
        />
      </div>
    </div>
  );
};

const SliderItems = ({ items }) => {
  const [index, setIndex] = useState(0);
  const sliderItems = (
    <SliderItem alternateFunc={setIndex} item={items[index]} index={index} />
  );
  return sliderItems;
};

const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      allHomePageJson {
        nodes {
          heroSlider {
            imageURL
            heading
            description
            buttonText
            buttonLink
          }
        }
      }
    }
  `);
  return (
    <>
      <div className='gronic-heroSlider'>
        <SliderItems items={data.allHomePageJson.nodes[1].heroSlider} />
      </div>
    </>
  );
};

export default HeroSlider;
