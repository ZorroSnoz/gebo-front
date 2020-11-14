import React, {FC} from 'react'
import s from './ad_item.module.css'
import { NavLink } from 'react-router-dom'
import plugPicture from '../../../images/peace.jpg'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import {AdDataType} from '../../../types/types'

///////////// types for props
type PropsType = {
    item: AdDataType
    userId: string | null

    // :todo not sure maybe need added types for functions
    editAd?: (item: AdDataType) => void
    deleteAd?: (idItem: string) => void
}

///////////// ad item component
let AdItem: FC<PropsType> = ({ item, userId, editAd, deleteAd}) => {

    // data destructuring
    let { idAd, img, description, autor, autorId, typeClass, typeText, adData }: AdDataType = item;
    let typeClassName: Array<string> = [s.typeAd1, s.typeAd2, s.typeAd3, s.typeAd4]

    //create number type for index array
    typeClass = +typeClass
 
    return <div className={s.adItem}>
            <div>
                {/*if no image paste plugPicture*/}
                <img src={img != null ? img : plugPicture} />
            </div>
            <div>
                <div className={s.adDescript}><p>{description}</p></div>
                <div className={s.adInfo}>
                    <div className={s.adAutor}><p>{autor}</p><p className={s.typeAd + ' ' + typeClassName[typeClass]}>{typeText}</p><p className={s.dataAd}>{adData}</p></div>
                    {/*if userId === autorId show buttongroup for manage ad*/}
                    {userId === autorId
                        ? <div id={s.userButtonBlock}>
                            <NavLink  onClick={()=>{
                                if (editAd) {
                                    editAd(item)
                                }}} to='/edit_my_ad'>
                                <button className={s.editButton}><EditIcon /></button>
                            </NavLink>
                            <button onClick={()=>{
                                if (deleteAd) {
                                    deleteAd(item.idAd)
                                }}}
                                    className={s.deleteButton}><DeleteForeverIcon /></button>
                        </div>
                        : <div>
                            <ButtonGroup
                                orientation="vertical"
                                color="inherit"
                                aria-label="vertical outlined primary button group"
                            >
                                <Button>Написати</Button>
                                <Button><MoreHorizIcon /></Button>
                            </ButtonGroup>
                        </div>}
                </div>
            </div>
        </div>
}

export default AdItem


