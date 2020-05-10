import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

class Countries extends React.Component {
  show = (value) => {
    this.props.show(value)
  }
  render() {
    return (
      <Select onChange={this.show} defaultValue={'Страна'} style={{width: '120px'}}>
        <Option value="italy">Италия</Option>
        <Option value="france">Франция</Option>
        <Option value="germany">Германия</Option>
        <Option value="spain">Испания</Option>
      </Select>
    );
  }
}

export default Countries;