import React, {FC} from 'react'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// material ui-----------------
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import FilterListIcon from '@material-ui/icons/FilterList'
import SettingsIcon from '@material-ui/icons/Settings'

// :todo file have any types TS

let MenuButton: FC = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return <>
            <Route path="/" exact render={() => <Button color="inherit"><FilterListIcon style={{ fontSize: 30 }} /></Button>} />
            <Button color="inherit"><SettingsIcon style={{ fontSize: 30 }} /></Button>
            <Button color="inherit" onClick={handleClick}><MenuIcon style={{ fontSize: 30 }} /></Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><NavLink to='/my-ad'>Мої оголошення</NavLink></MenuItem>
                <MenuItem onClick={handleClose}>Діалоги</MenuItem>
                <MenuItem onClick={handleClose}>FaQ</MenuItem>
            </Menu>
        </>
}

export default MenuButton

// ---------------------------------