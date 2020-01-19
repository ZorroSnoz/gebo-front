import React from 'react';
import { Route } from 'react-router-dom';
// material ui-----------------
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsIcon from '@material-ui/icons/Settings';

export default function MenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
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
                <MenuItem onClick={handleClose}>Профіль</MenuItem>
                <MenuItem onClick={handleClose}>Діалоги</MenuItem>
                <MenuItem onClick={handleClose}>FaQ</MenuItem>
            </Menu>
        </>
    );
}
// ---------------------------------