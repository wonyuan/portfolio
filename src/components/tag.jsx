import React from 'react';
import PropTypes from 'prop-types';
import './card.css'

const Tag = ({ text }) => (
  <div className="oval-tag">
    <p className="oval-tag-text">{text}</p>
  </div>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;

