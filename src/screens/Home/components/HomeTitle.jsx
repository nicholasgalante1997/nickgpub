/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Home.scss';

const delay = 500;

const HomeTitle = () => {
  // this manages the flicker animation of the landing page title
  const [loop, setLoop] = useState(true);
  // this is tracker for our backdoor entrance to the authors side
  const [count, setCount] = useState(0);
  const history = useHistory();

  const styles = useSpring({
    loop,
    delay,
    to: [
      { opacity: 0, color: 'white' },
      { opacity: 1, color: '#add8e6' },
    ],
    from: { opacity: 1, color: '#add8e6' },
  });

  // recursive function to shut off the loop var
  const timer = async (rounds) => {
    const lim = rounds;
    if (lim === 0) { setLoop(false); return; }
    setTimeout(() => {
      timer(lim - 1);
    }, 1000);
  };

  useEffect(() => {
    timer(3);
  }, []);

  // reset the count every 2 seconds
  useEffect(() => {
    const clearCount = setInterval(() => {
      setCount(0);
    }, 2000);

    return clearInterval(clearCount);
  }, []);

  useEffect(() => {
    if (count > 6) {
      history.push('/admin/verify');
      setCount(0);
    }
  }, [count]);

  return (
    <animated.h1 className="home-title" style={styles}>
      Vantage Writ
      <div
        className="home-sharp"
        onClick={() => setCount((prevCount) => prevCount + 1)}
        role="button"
        tabIndex="0"
      />
    </animated.h1>
  );
};

export default HomeTitle;
