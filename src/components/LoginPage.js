import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => {
  console.log("Value of startLogin",props)
  return (
    <div className="box-layout">
    <div className="box_image"/>
    
    <div className="box-layout__box">
      <h1 className="box-layout__title"></h1>
      <p>.</p>
      <button onClick={props.startLogin}>Login</button>
    </div>
  </div>

  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
