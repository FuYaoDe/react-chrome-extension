import React, { PropTypes } from 'react';

export default function SampleComponents(props) {
  return (
    <div>
      AAAAAAA
      {props.title}
    </div>
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
