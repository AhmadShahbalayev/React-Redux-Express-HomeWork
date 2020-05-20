import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import Users from './users/Users';
import UsersInfo from './users/UsersInfo';

class App extends React.Component {
  render() {
    return (
      <main>
        <Route path='/' component={Users} />
        <Route path='/users/:id' component={UsersInfo} />
      </main>
    );
  }
}

export default App;