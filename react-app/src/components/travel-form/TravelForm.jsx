import React from 'react';
import Countries from './Countries';
import Cities from './Cities';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const DIV = styled.div
  `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  text-align: center;
  align-items: center;
`
const BTN = styled.button
  `
  background: #833AE0;
  color: white;
  padding: 5px;
  margin: 0 auto;
  border: none;
  border-radius: 0;
`
const BTNdiv = styled.div
  `
  grid-column: 1/3;
`

class TravelForm extends React.Component {
  state = {
    isVisibleCity: false,
    isVisibleInput: false,
    isVisibleBtn: false,
    country: ''
  }
  showCity = (countryName) => this.setState({ isVisibleCity: true, country: countryName })
  showInput = () => this.setState({ isVisibleInput: true })
  showBtn = () => this.setState({ isVisibleBtn: true })
  render() {
    return (
      <DIV>
        <div>
          <Countries show={this.showCity} />
        </div>
        {
          this.state.isVisibleCity
            ?
            <div>
              {(this.state.country === 'italy') ? <Cities show={this.showInput} city1='Рим' city2='Флоренция' city3='Неаполь' city4='Милан' city5='Турин' /> : null}
              {(this.state.country === 'france') ? <Cities show={this.showInput} city1='Париж' city2='Орлеан' city3='Марсель' city4='Тулуза' /> : null}
              {(this.state.country === 'germany') ? <Cities show={this.showInput} city1='Берлин' city2='Гамбург' city3='Бремен' /> : null}
              {(this.state.country === 'spain') ? <Cities show={this.showInput} city1='Мадрид' city2='Валенсия' city3='Севилья' city4='Малага' /> : null}
            </div>
            : null
        }
        {
          this.state.isVisibleInput
            ?
            <>
              <div>
                Количество дней:
            </div>
              <div>
                <Input style={{width: '115px'}} onChange={this.showBtn} type="number" />
              </div>
            </>
            : null
        }
        {
          this.state.isVisibleBtn
            ?
            <BTNdiv>
              <BTN>Отправить заявку</BTN>
            </BTNdiv>
            : null
        }
      </DIV>
    );
  }
}

export default TravelForm;