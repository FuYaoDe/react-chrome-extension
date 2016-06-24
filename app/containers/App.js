import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Age from '../components/Age';
import Option from './Option';
import * as action from '../actions/SampleActions';
import axios from 'axios';
import { Popover } from 'antd';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#193441',
  },
  setting: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: '2vh',
    color: '#3E606F',
  },
  optionContainer: {
    height: '200px',
    width: '400px',
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: '1993-06-25',
      time: new Date().getTime(),
      year: 0,
      day: 999999999,
      isOptionOpen: false,
    };
  }

  // componentWillMount() {
  //   const time = new Date(this.state.birthday).getTime();
  //   this.setState({
  //     time
  //   });
  //
  //   const Animate = setInterval(() => {
  //     const now = new Date().getTime();
  //     let time = now - this.state.time;
  //     time = time / 31556900000;
  //     time = time.toFixed(9).toString().split('.');
  //     if (this.state.year == time[0]) {
  //       clearInterval(Animate);
  //       this.genAge();
  //       this.setState({
  //         year: time[0],
  //         day: time[1],
  //       });
  //     } else {
  //       this.setState({
  //         year: this.state.year + 1,
  //         day: time[1],
  //       });
  //     }
  //   }, 15);
  // }
  //
  // genAge = () => {
  //   setInterval(() => {
  //     const now = new Date().getTime();
  //     let time = now - this.state.time;
  //     time = time / 31556900000;
  //     time = time.toFixed(9).toString().split('.');
  //     this.setState({
  //       year: time[0],
  //       day: time[1],
  //     });
  //   }, 0);
  // }

  openOption = () => {
    this.setState({
      isOptionOpen: !this.state.isOptionOpen,
    });
  }

  renderOption = () => {
    return (
      <div style={styles.optionContainer}>
        <Option />
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        <Popover content={this.renderOption()}
          visible={this.state.isOptionOpen}
          trigger="click"
          placement="bottomRight" title="設定"
        >
          <div style={styles.setting} onClick={this.openOption}>
            option
          </div>
        </Popover>
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
