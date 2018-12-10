import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
  const {profile} = props;
  const firstName = profile.firstName;
  const lastName = profile.lastName;

  return (
    <ul className="right">
        <li> <NavLink to="/create">New Project</NavLink></li>
        <li> < a onClick={props.logOut} to="/">Log Out</a></li>
        <li> <NavLink to="/" className="btn pink lighten-1">{firstName}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    logOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
