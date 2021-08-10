import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Home.scss';

const delay = 500;

const HomeTitle = () => {
  const [loop, setLoop] = useState(true);

  const styles = useSpring({
    loop,
    delay,
    to: [
      { opacity: 0, color: 'white' },
      { opacity: 1, color: '#add8e6' },
    ],
    from: { opacity: 1, color: '#add8e6' },
  });

  const timer = async (rounds) => {
    const lim = rounds;
    if (lim === 0) { setLoop(false); return; }
    setTimeout(() => {
      timer(lim - 1);
    }, 1000);
  };

  useEffect(() => {
    timer(5);
  }, []);

  return (
    <animated.h1 className="home-title" style={styles}>
      Vantage Writ
      <span className="home-sharp">.</span>
    </animated.h1>
  );
};

export default HomeTitle;
