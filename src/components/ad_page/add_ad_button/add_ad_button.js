import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import s from './add_button.module.css';

let AddAdButton = () => {
    return (
        <div className={s.addButton}>
            <Fab color="primary" size="large" aria-label="add">
                <AddIcon style={{ fontSize: 30 }}  />
            </Fab>
        </div>
    );
};

export default AddAdButton;