import React, {FC} from 'react'
import AddIcon from '@material-ui/icons/Add'
import s from './add_button.module.css'
import { NavLink } from 'react-router-dom'

let AddAdButton :FC = () => {
    return <div className={s.addButton}>
            <NavLink to='/add-ad'>
                <button>
                    <AddIcon style={{ fontSize: 30 }} />
                </button>
            </NavLink>
        </div>
}

export default AddAdButton