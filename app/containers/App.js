import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SampleComponents from '../components/SampleComponents';
import SampleComponents0 from '../components/SampleComponents0';
import * as action from '../actions/SampleActions';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 0,
    };
  }

  onClickHandle = () => {
    this.setState({
      title: this.state.title + 1,
    });
    this.props.update(this.state.title);
  }

  render() {
    return (
      <div style={styles.container}>
        1231231223
        <SampleComponents title={this.state.title} />
        <SampleComponents0 title={this.state.title} />
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
