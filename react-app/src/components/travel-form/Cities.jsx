import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

class Cities extends React.Component {
  render() {
    const {city1, city2, city3, city4, city5} = this.props;
    return (
      <Select onChange={this.props.show} defaultValue={'Город'} style={{width: '120px'}}>
        <option defaultValue hidden>Город</option>
        {city1 ? <Option>{city1}</Option> : null}
        {city2 ? <Option>{city2}</Option> : null}
        {city3 ? <Option>{city3}</Option> : null}
        {city4 ? <Option>{city4}</Option> : null}
        {city5 ? <Option>{city5}</Option> : null}
      </Select>
    );
  }
}

export default Cities;