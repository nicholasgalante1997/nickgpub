import React, { useEffect } from 'react';

const Carousel = () => {
  // const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => console.log(window.innerWidth));
  }, [window]);
  return (
    <>Carousel</>
  );
};

export default Carousel;
