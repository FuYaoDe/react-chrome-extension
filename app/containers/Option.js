import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/ConfigActions';
import { DatePicker, Tabs, Select, TimePicker, Button } from 'antd';
const TabPane = Tabs.TabPane;
const SelectOption = Select.Option;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  setting: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: '2vh',
    color: '#3E606F',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputTitle: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
  }
};

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBirthdayHandle = (date) => {
    // chrome.storage.sync.clear();
    // this.updateStorage('birthday', 'date', date.toString());
    let newConfig = { ...this.props.config };
    newConfig.birthday.date = date.toString();
    this.props.updateConfig(newConfig);
  }
  onBirthdayColorHandle = (value) => {
    // this.updateStorage('birthday', 'color', value);
    let newConfig = { ...this.props.config };
    newConfig.birthday.color = value;
    this.props.updateConfig(newConfig);
  }

  onOffWorkHandle = (date) => {
    // this.updateStorage('offWork', 'time', date.toString());
    let newConfig = { ...this.props.config };
    newConfig.offWork.time = date.toString();
    this.props.updateConfig(newConfig);
  }
  onOffWorkColorHandle = (value) => {
    // this.updateStorage('offWork', 'color', value);
    let newConfig = { ...this.props.config };
    newConfig.offWork.color = value;
    this.props.updateConfig(newConfig);
  }

  onDueDayDateHandle = (date) => {
    // this.updateStorage('dueDay', 'date', date.toString());
    let newConfig = { ...this.props.config };
    newConfig.dueDay.date = date.toString();
    this.props.updateConfig(newConfig);
  }
  onDueDayTimeHandle = (date) => {
    // this.updateStorage('dueDay', 'time', date.toString());
    let newConfig = { ...this.props.config };
    newConfig.dueDay.time = date.toString();
    this.props.updateConfig(newConfig);
  }
  onDueDayColorHandle = (value) => {
    // this.updateStorage('dueDay', 'color', value);
    let newConfig = { ...this.props.config };
    newConfig.dueDay.color = value;
    this.props.updateConfig(newConfig);
  }
  onChangeTab = (key) => {
    let newConfig = { ...this.props.config };
    newConfig.tabKey = key;
    this.props.updateConfig(newConfig);
  }

  render() {
    // console.log("!!!!!!!!!!!!!!!!!!", this.props.config);
    const { birthday, offWork, dueDay, tabKey } = this.props.config;
    console.log(birthday, offWork, dueDay, tabKey);
    return (
      <div style={styles.container}>
        <Tabs defaultActiveKey={tabKey} onChange={this.onChangeTab}>
          <TabPane tab="年齡" key="1">
            <div style={styles.row}>
              <div style={styles.inputTitle}>生日: </div>
              <DatePicker format="yyyy/MM/dd" defaultValue={new Date(birthday.date)} onChange={this.onBirthdayHandle} />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>顏色: </div>
              <Select
                defaultValue={birthday.color} style={{ width: 160 }}
                onChange={this.onBirthdayColorHandle}
              >
                <SelectOption value="black">black</SelectOption>
                <SelectOption value="pink">pink</SelectOption>
              </Select>
            </div>
            <div style={styles.row}>
              <Button type="primary" >設定</Button>
            </div>
          </TabPane>
          <TabPane tab="下班" key="2">
            <div style={styles.row}>
              <div style={styles.inputTitle}>時間: </div>
              <TimePicker defaultValue={offWork.time} format="HH:mm" onChange={this.onOffWorkHandle} />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>顏色: </div>
              <Select
                defaultValue={offWork.color} style={{ width: 160 }}
                onChange={this.onOffWorkColorHandle}
              >
                <SelectOption value="black">black</SelectOption>
                <SelectOption value="pink">pink</SelectOption>
              </Select>
            </div>
            <div style={styles.row}>
              <Button type="primary" >設定</Button>
            </div>
          </TabPane>
          <TabPane tab="due day" key="3">
            <div style={styles.row}>
              <div style={styles.inputTitle}>日期: </div>
              <DatePicker format="yyyy/MM/dd" defaultValue={new Date(dueDay.date)} onChange={this.onDueDayDateHandle} />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>時間: </div>
              <TimePicker
                defaultValue={dueDay.time} format="HH:mm"
                onChange={this.onDueDayTimeHandle}
              />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>顏色: </div>
              <Select
                defaultValue={dueDay.color} style={{ width: 160 }}
                onChange={this.onDueDayColorHandle}
              >
                <SelectOption value="black">black</SelectOption>
                <SelectOption value="pink">pink</SelectOption>
              </Select>
            </div>
            <div style={styles.row}>
              <Button type="primary" >設定</Button>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

Option.propTypes = {
  updateConfig: React.PropTypes.func,
};

function mapStateToProps({ config }) {
  console.log(config);
  return {
    config,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);
