import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Age from '../components/Age';
import * as action from '../actions/SampleActions';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#193441',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: '1993-06-25',
      time: new Date().getTime(),
      year: 0,
      day: 999999999,
    };
  }

  componentWillMount() {
    const time = new Date(this.state.birthday).getTime();
    this.setState({
      time
    });

    const Animate = setInterval(() => {
      const now = new Date().getTime();
      let time = now - this.state.time;
      time = time / 31556900000;
      time = time.toFixed(9).toString().split('.');
      if (this.state.year == time[0]) {
        clearInterval(Animate);
        this.genAge();
        this.setState({
          year: time[0],
          day: time[1],
        });
      } else {
        this.setState({
          year: this.state.year + 1,
          day: time[1],
        });
      }
    }, 15);
  }

  genAge = () => {
    setInterval(() => {
      const now = new Date().getTime();
      let time = now - this.state.time;
      time = time / 31556900000;
      time = time.toFixed(9).toString().split('.');
      this.setState({
        year: time[0],
        day: time[1],
      });
    }, 0);
  }

  render() {
    return (
      <div style={styles.container}>
        <Age year={this.state.year} day={this.state.day} />
      </div>
    );
  }
}

App.propTypes = {
  update: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
