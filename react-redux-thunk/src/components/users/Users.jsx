import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import { addUsersToStore } from '../../redux/actions';

class Users extends React.Component {
  componentDidMount() {
    this.props.addUsersToStore();
  }
  render() {
    const { users, loading } = this.props;
    return (
      <section className='grid'>
        {loading && <h2 className='loading'>Loading...</h2>}
        {users.map(user => <User key={user.id} user={user} />)}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loading
  };
}

const mapDispatchToProps = {
  addUsersToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);