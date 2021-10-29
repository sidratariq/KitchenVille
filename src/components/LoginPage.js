import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
  return (
    <div className="box-layout">
    
    <div className="box-layout__box">
    <div className="box_image"/>

      <h1 className="box-layout__title"></h1>
      <button className="button" onClick={props.startLogin}>Login With Google</button>
    </div>
  </div>

  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
