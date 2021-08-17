/* eslint-disable max-len */
import React from 'react';
// import { PropTypes } from 'prop-types';
import './Ticker.scss';

const demonstration = `
Lying in a Hammock at William Duffy’s Farm in Pine Island, Minnesota/ 

By James Wright/

Over my head, I see the bronze butterfly,/
Asleep on the black trunk,/
Blowing like a leaf in green shadow./
Down the ravine behind the empty house,/  
The cowbells follow one another/
Into the distances of the afternoon./ 
To my right,/
In a field of sunlight between two pines,/ 
The droppings of last year’s horses/
Blaze up into golden stones./
I lean back, as the evening darkens and comes on./   
A chicken hawk floats over, looking for home./
I have wasted my life./
`;

const Ticker = () => {
  const content = demonstration.split('/');
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker__item-title">Welcome to Vantage Writ.</div>
        <div className="ticker__item-title">Here&apos;s our short selection of the month</div>
        <div className="ticker__item-title">Our intern Rhonda worked really hard picking the right piece.</div>
        <div className="ticker__item-title">Don&apos;t shit on it.</div>
        <div className="ticker__item-title">{content[0]}</div>
        <div className="ticker__item-title">{content[1]}</div>
        {content.slice(2).map((verse) => <div className="ticker__item-italic">{verse}</div>)}
      </div>
    </div>
  );
};

// Ticker.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Ticker;
