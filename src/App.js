import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login_page/login';
import Ad from './components/ad_page/ad_page';
import { connect } from 'react-redux';
import { getCookie, deleteCookie } from './cookies_helper/cookies_functions';
import { setUser } from './redux/login_reduser';

let App = (props) => {

  let { userData, setUser } = props;
 //////////////////////////////////////// developer delete cookies button CTRL
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
     deleteCookie('registered')
     deleteCookie('user')
     deleteCookie('idUser')
    }
  });
////////////////////////////////////////
  useEffect(() => {
    if (getCookie('registered') === 'true' && userData.registered === false ) {
      let userData = {
        registered: getCookie('registered'),
        name: getCookie('user'),
        idUser: getCookie('idUser')
      }
      setUser(userData);
    };
  });

  return (
    <div className="App">
      <div className="MobileWindow">
        {userData.registered ? <Ad /> : <Login />}
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    userData: state.loginPage
  }
};

export default connect(mapStateToProps, { setUser })(App);
