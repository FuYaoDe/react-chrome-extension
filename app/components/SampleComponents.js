import React, { PropTypes } from 'react';

export default function SampleComponents(props) {
  return (
    <li style={{ color: props.textColor }}>
      <img src={props.src} alt={props.alt} />
      <div>{props.title}</div>
    </li>
  );
}

SampleComponents.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string,
};

SampleComponents.defaultProps = {
  title: '',
  uri: '',
  alt: '',
  textColor: '',
};
