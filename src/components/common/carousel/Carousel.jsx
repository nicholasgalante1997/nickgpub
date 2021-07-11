import React, {
  useState, useEffect, createRef,
} from 'react';
import { PropTypes } from 'prop-types';

const Carousel = ({ data }) => {
  const [parentWidth, setParentWidth] = useState();
  const [index, setIndex] = useState(0);
  const scrollRef = createRef();

  const setAndUpdateWidth = () => {
    const parent = document.querySelector('.layout-col');
    setParentWidth(parent.clientWidth);
  };

  // NOTE: set the parentWidth to the width of the parent container
  useEffect(() => {
    setAndUpdateWidth();
  }, []);

  // NOTE: set an event listener to the window resize event
  useEffect(() => {
    function handleResize() {
      const parent = document.querySelector('.layout-col');
      setParentWidth(parent.clientWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setInterval(() => {
      setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 1500);
  }, []);

  return (
    <>Carousel</>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
