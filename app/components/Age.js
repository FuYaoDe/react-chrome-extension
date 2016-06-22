import React, { PropTypes } from 'react';

const styles = {
  container: {
    display: 'flex'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex'
  },
  ageNumber: {
    color: '#91AA9D',
    fontSize: '15vh',
  },
  dayNumber: {
    display: 'flex',
    color: '#91AA9D',
    fontSize: '5vh',
    alignItems: 'center',
  },
  text: {
    paddingLeft: '30',
    fontSize: '2vh',
    color: '#3E606F',
  }
};

export default function Age(props) {
  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <div style={styles.text}>
          AGE
        </div>
        <div style={styles.row}>
          <div style={styles.ageNumber}>
            {props.year}
          </div>
          <div style={styles.dayNumber}>
            .{props.day}
          </div>
        </div>
      </div>
    </div>
  );
}

Age.propTypes = {
  year: PropTypes.number,
  day: PropTypes.number,
};

Age.defaultProps = {
  year: 0,
  day: 0
};
