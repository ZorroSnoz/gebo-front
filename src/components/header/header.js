import React from 'react';
import s from './header.module.css';
import logo from '../../images/gebo_logo.jpg';
import MenuButton from './nav_button_m_ui';

    let Header = () => {
        return (<>
            <div className={s.headerContainer}>
                <div className={s.logoContainer}>
                    <img src={logo} />
                    <h1>Gebo</h1>
                </div>
                <div className={s.buttonsBar}>     
                <MenuButton/>
                </div>
            </div>
            <div className={s.headerFixedBlock}></div>
        </>);
    };

    export default Header;