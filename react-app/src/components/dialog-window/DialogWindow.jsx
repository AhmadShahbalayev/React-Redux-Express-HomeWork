import React from 'react';
import Window from './Window';
import 'antd/dist/antd.css';
import { Input } from 'antd';

class DialogWindow extends React.Component {
  state = {
    value: '',
    isVisible: false
  }
  getValue = (e) => this.setState({ value: e.target.value })
  show = () => this.setState({ isVisible: true })
  okHandler = () => this.setState({ isVisible: false, value: '' })
  cancelHandler = () => this.setState({ isVisible: false })
  render() {
    const { value, isVisible } = this.state;
    return (
      <div>
        <Input style={{width: '150px'}} onChange={this.getValue} value={value} type="text" />
        <button onClick={this.show}>Очистить</button>
        {isVisible
          ? <Window value={value} ok={this.okHandler} cancel={this.cancelHandler} />
          : null
        }
      </div>
    );
  }
}

export default DialogWindow;