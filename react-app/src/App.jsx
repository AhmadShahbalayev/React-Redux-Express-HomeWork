import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Counter from './components/counter/Counter';
import Dice from './components/dice/Dice';
import Slider from './components/slider/Slider';
import UserId from './components/user-id/UserId';
import Confirm from './components/confirm/Confirm';
import Transaction from './components/transaction/Transaction';
import Menu from './components/menu/Menu';
import Login from './components/login/Login';
import CardApp from './components/card-app/CardApp';
import UserNameInput from './components/user-name-input/UserNameInput';
import Dropdown from './components/dropdown/Dropdown';
import Modal from './components/modal/Modal';
import Content from './components/modal/Content';
import CounterRegister from './components/counter-register/CounterRegister';
import SearchAndFilter from './components/search-and-filter/SearchAndFilter';
import MortgageCalc from './components/mortgage-calc/MortgageCalc';
import FeedbackFrom from './components/feedback-form/FeedbackForm';
import BankCardForm from './components/bank-card-form/BankCardForm';
import DialogWindow from './components/dialog-window/DialogWindow';
import TravelForm from './components/travel-form/TravelForm';
import Coins from './components/coins/Coins';
import Backend from './components/backend/Backend';

class App extends React.Component {
  state = {
    active: '',
    visibility: false
  }
  show = () => {
    this.setState({ visibility: !this.state.visibility });
  }
  render() {
    return (
      <BrowserRouter>
        <main id='main-app'>
          <h1 className='main-header'>React Components</h1>
          <nav className="nav-bar">
            <NavLink onClick={this.show} to='/confirm'>Confrim</NavLink>
            <NavLink onClick={this.show} to='/counter'>Counter</NavLink>
            <NavLink onClick={this.show} to='/dice'>Dice</NavLink>
            <NavLink onClick={this.show} to='/slider'>Slider</NavLink>
            <NavLink onClick={this.show} to='/transaction'>Transaction</NavLink>
            <NavLink onClick={this.show} to='/userId'>UserId</NavLink>
            <NavLink onClick={this.show} to='/menu'>Menu</NavLink>
            <NavLink onClick={this.show} to='/login'>Login</NavLink>
            <NavLink onClick={this.show} to='/cardapp'>CardApp</NavLink>
            <NavLink onClick={this.show} to='/usernameinput'>UserNameInput</NavLink>
            <NavLink onClick={this.show} to='/dropdown'>Dropdown</NavLink>
            <NavLink onClick={this.show} to='/modal'>Modal</NavLink>
            <NavLink onClick={this.show} to='/register'>CounterRegister</NavLink>
            <NavLink onClick={this.show} to='/search'>SearchAndFilter</NavLink>
            <NavLink onClick={this.show} to='/mortgage'>MortgageCalc</NavLink>
            <NavLink onClick={this.show} to='/feedback'>FeedbackForm</NavLink>
            <NavLink onClick={this.show} to='/bankcardform'>BankCardForm</NavLink>
            <NavLink onClick={this.show} to='/dialog'>DialogWindow</NavLink>
            <NavLink onClick={this.show} to='/travel'>TravelForm</NavLink>
            <NavLink onClick={this.show} to='/coins'>Coins</NavLink>
            <NavLink onClick={this.show} to='/backend'>Backend</NavLink>
          </nav>
          {this.state.visibility
            ?
            <section className="component-window">
              <button onClick={this.show} className="back">&lsaquo;</button>
              <div className='components'>
                <Route path='/confirm'><Confirm /></Route>
                <Route path='/counter'><Counter /></Route>
                <Route path='/dice'><Dice /><Dice /><Dice /><Dice /><Dice /><Dice /></Route>
                <Route path='/slider'><Slider /></Route>
                <Route path='/transaction'><Transaction /></Route>
                <Route path='/userId'><UserId /></Route>
                <Route path='/menu'><Menu /></Route>
                <Route path='/login'><Login /></Route>
                <Route path='/cardapp'><CardApp /></Route>
                <Route path='/usernameinput'><UserNameInput /></Route>
                <Route path='/dropdown'><Dropdown title={'Frontend developler'} additionalInfo={'Who makes websites looks good'} /></Route>
                <Route path='/dropdown'><Dropdown title={'Backend developler'} additionalInfo={'Who makes websites work good'} /></Route>
                <Route path='/modal'><Modal content={Content} /></Route>
                <Route path='/register'><CounterRegister /></Route>
                <Route path='/search'><SearchAndFilter /></Route>
                <Route path='/mortgage'><MortgageCalc /></Route>
                <Route path='/feedback'><FeedbackFrom /></Route>
                <Route path='/bankcardform'><BankCardForm /></Route>
                <Route path='/dialog'><DialogWindow /></Route>
                <Route path='/travel'><TravelForm /></Route>
                <Route path='/coins'><Coins /></Route>
                <Route path='/backend'><Backend /></Route>
              </div>
            </section>
            : null}
        </main>
      </BrowserRouter>
    );
  }
}

export default App;