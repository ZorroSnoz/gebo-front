import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login_page/login';
import Ad from './components/ad_page/ad_page';
import { connect } from 'react-redux';
import { getCookie } from './services/cookies_functions';
import { setUser } from './redux/login_reduser';
import AddAdPageContainer from './components/add_ad_page/add_ad_page_container';
import MyAdPageContainer from './components/my_ad_page/my_ad_page_container';
import EditMyAdContainer from './components/edit_my_ad_page/edit_my_ad_container';
import { developerFun } from './services/developer_functions';

let App = ({ userData, setUser }) => {

  /// developer delete cookies button CTRL and ALT get state
  developerFun();
  ////////////////////////////////////////


  //////// cookies
  if (getCookie('registered') === 'true' && userData.registered === false) {
    let userData = {
      registered: getCookie('registered'),
      name: getCookie('user'),
      idUser: getCookie('idUser')
    }
    setUser(userData);
  };


  return (
    <BrowserRouter>
      <div className='App'>
        <div className='MobileWindow'>
          <Route path='/' exact render={() => userData.registered ? <Ad /> : <Login />} />
          <Route path='/add-ad' render={() => <AddAdPageContainer />} />
          <Route path='/my-ad' render={() => <MyAdPageContainer />} />
          <Route path='/edit_my_ad' render={() => <EditMyAdContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

let mapStateToProps = (state) => {
  return {
    userData: state.loginPage,
  }
};

export default connect(mapStateToProps, { setUser })(App);
