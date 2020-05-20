import React from 'react';
import { Link } from 'react-router-dom';

function User(props){
  let user = props.user;
  return (
    <section>
      <img src={user.avatar} alt="avatar"/>
      <h2>{user.name}</h2>
      <Link to={`user/${user.id}`}>More info</Link>
    </section>
  );
}

export default User;