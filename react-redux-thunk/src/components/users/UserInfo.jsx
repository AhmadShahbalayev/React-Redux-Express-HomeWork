import React from 'react';
import { connect } from 'react-redux';

function UserInfo(props){
  // let user = props.user;
  return (
    <section>
      {/* <img src={user.avatar} alt="avatar"/>
      <h2>{user.name}</h2>
      <Link to={`user/${user.id}`}>More info</Link> */}
    </section>
  );
}

const mapStateToProps = (state, ownProps) => {

}

export default connect()(UserInfo);