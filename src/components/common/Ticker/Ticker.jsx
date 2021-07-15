/* eslint-disable max-len */
import React from 'react';
import { PropTypes } from 'prop-types';
import './Ticker.scss';

const Ticker = ({ data }) => {
  console.log(data);
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker__item">Letterpress chambray brunch.</div>
        <div className="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
        <div className="ticker__item">Ugh PBR&B kale chips Echo Park.</div>
        <div className="ticker__item">Gluten-free mumblecore chambray mixtape food truck. </div>
        <div className="ticker__item">Authentic bitters seitan pug single-origin coffee whatever.</div>
        <div className="ticker__item">Letterpress chambray brunch.</div>
        <div className="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
        <div className="ticker__item">Ugh PBR&B kale chips Echo Park.</div>
        <div className="ticker__item">Gluten-free mumblecore chambray mixtape food truck. </div>
        <div className="ticker__item">Authentic bitters seitan pug single-origin coffee whatever.</div>
      </div>
    </div>
  );
};

Ticker.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ticker;