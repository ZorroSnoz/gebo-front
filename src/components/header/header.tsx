import React, {FC} from 'react'
import s from './header.module.css'
import logo from '../../images/gebo_logo.jpg'
import MenuButton from './nav_button_m_ui'
import { NavLink } from 'react-router-dom'

///////////// Header app component
let Header: FC = () => {
    return <>
        <div className={s.headerContainer}>
                <div className={s.logoContainer}>
                <NavLink to='/'>
                    <img src={logo} />
                    </NavLink>
                    <h1>Gebo</h1>
                </div> 
            <div className={s.buttonsBar}>
                <MenuButton />
            </div>
        </div>
        <div className={s.headerFixedBlock}/>
    </>
}

export default Header