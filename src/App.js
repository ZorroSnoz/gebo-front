import React from 'react';
import './App.css';
import Login from './components/login_page/login';
import Ad from './components/ad_page/ad_page';
import { connect } from 'react-redux';

function App(props) {
let {registered, name } = props.login;

  return (
    <div className="App">
      <div className="MobileWindow">
        {registered ? <Ad /> : <Login />}
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
      login: state.loginPage
  }
};

export default connect(mapStateToProps,null) (App);
