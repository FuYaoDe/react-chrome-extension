import React, { PropTypes } from 'react';

export default function SampleComponents0(props) {
  return (
    <div>
      BBBBBBBBBBB
      {props.title}
    </div>
  );
}

SampleComponents0.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string,
};

SampleComponents0.defaultProps = {
  title: '',
  uri: '',
  alt: '',
  textColor: '',
};
