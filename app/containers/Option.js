import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/SampleActions';
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
    this.updateStorage('birthday', 'date', date.toString());
  }
  onBirthdayColorHandle = (value) => {
    this.updateStorage('birthday', 'color', value);
  }

  onOffWorkHandle = (date) => {
    this.updateStorage('offWork', 'time', date.toString());
  }
  onOffWorkColorHandle = (value) => {
    this.updateStorage('offWork', 'color', value);
  }

  onDueDayDateHandle = (date) => {
    this.updateStorage('dueDay', 'date', date.toString());
  }
  onDueDayTimeHandle = (date) => {
    this.updateStorage('dueDay', 'time', date.toString());
  }
  onDueDayColorHandle = (value) => {
    this.updateStorage('dueDay', 'color', value);
  }

  updateStorage = (type, key, value) => {
    try {
      chrome.storage.sync.get('config', (data) => {
        console.log(data);
        let newData = data.config ? { ...data.config } : {};
        newData[type] = newData[type] ? { ...newData[type] } : {};
        newData[type][key] = value;
        chrome.storage.sync.set({ config: newData }, () => {
          chrome.storage.sync.get('config', (data) => {
            console.log('finish!!', JSON.stringify(data, null, 2));
          });
        });
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="年齡" key="1">
            <div style={styles.row}>
              <div style={styles.inputTitle}>生日: </div>
              <DatePicker format="yyyy/MM/dd" onChange={this.onBirthdayHandle} />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>顏色: </div>
              <Select
                defaultValue="black" style={{ width: 160 }}
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
              <TimePicker defaultValue={'06:30'} format="HH:mm" onChange={this.onOffWorkHandle} />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>顏色: </div>
              <Select
                defaultValue="black" style={{ width: 160 }}
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
              <DatePicker format="yyyy/MM/dd" onChange={this.onDueDayDateHandle} />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>時間: </div>
              <TimePicker
                defaultValue={'06:30'} format="HH:mm"
                onChange={this.onDueDayTimeHandle}
              />
            </div>
            <div style={styles.row}>
              <div style={styles.inputTitle}>顏色: </div>
              <Select
                defaultValue="black" style={{ width: 160 }}
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

export default connect(mapStateToProps, mapDispatchToProps)(Option);
