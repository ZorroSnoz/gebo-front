import React from 'react';
import s from './ad_item.module.css';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import peacePicture from '../../../images/peace.jpg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

let AdItem = ({ item, userId, editAd, ...props }) => {
    let { idAd, img, description, autor, autorId, typeClass, typeText, adData } = item;
    let typeClassName = [s.typeAd1, s.typeAd2, s.typeAd3, s.typeAd4]
 
    return (
        <div className={s.adItem}>
            <div>
                <img src={img != null ? img : peacePicture} />
            </div>
            <div>
                <div className={s.adDescript}><p>{description}</p></div>
                <div className={s.adInfo}>
                    <div className={s.adAutor}><p>{autor}</p><p className={s.typeAd + ' ' + typeClassName[typeClass]}>{typeText}</p><p className={s.dataAd}>{adData}</p></div>
                    {userId != autorId
                        ? <div>
                            <ButtonGroup
                                orientation="vertical"
                                color="inherit"
                                aria-label="vertical outlined primary button group"
                            >
                                <Button>Написати</Button>
                                <Button><MoreHorizIcon /></Button>
                            </ButtonGroup>
                        </div>
                        : <div id={s.userButtonBlock}>
                            <NavLink onClick={()=>{editAd(item)}}  to='/edit_my_ad'>
                                <button className={s.editButton}><EditIcon /></button>
                            </NavLink>
                            <button className={s.deleteButton}><DeleteForeverIcon /></button>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default AdItem;