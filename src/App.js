import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login_page/login';
import Ad from './components/ad_page/ad_page';
import { connect } from 'react-redux';
import { getCookie, deleteCookie } from './services/cookies_functions';
import { setUser } from './redux/login_reduser';
import { getAdsThunk } from './redux/ad_reduser';
import AddAdPageContainer from './components/add_ad_page/add_ad_page_container';
import MyAdPageContainer from './components/my_ad_page/my_ad_page_container';
import EditMyAdContainer from './components/edit_my_ad_page/edit_my_ad_container';

let App = (props) => {

  let { userData, setUser, getAdsThunk, adsData } = props;
  //////////////////////////////////////// developer delete cookies button CTRL
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey) {
      deleteCookie('registered')
      deleteCookie('user')
      deleteCookie('idUser')
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.altKey) {
console.log(window.store.getState())
    }
  });
  ////////////////////////////////////////
  useEffect(() => {
    //////// cookies
    if (getCookie('registered') === 'true' && userData.registered === false) {
      let userData = {
        registered: getCookie('registered'),
        name: getCookie('user'),
        idUser: getCookie('idUser')
      }
      setUser(userData);
    };
    ///////// get ads thunk
    if (adsData === null) {
        getAdsThunk();
        console.log('Get adsData');
    }
  });

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='MobileWindow'>
        <Route path='/' exact render={() => userData.registered ? <Ad /> : <Login />} />
        <Route path='/add-ad' render={() => <AddAdPageContainer />} />
        <Route path='/my-ad' render={() => <MyAdPageContainer />} />
        <Route path='/edit_my_ad' render={() => <EditMyAdContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

let mapStateToProps = (state) => {
  return {
    userData: state.loginPage,
    adsData: state.adPage.adsData
  }
};

export default connect(mapStateToProps, { setUser, getAdsThunk })(App);
