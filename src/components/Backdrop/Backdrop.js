import React from 'react'
import cls from './Backdrop.module.scss'

const Backdrop = ({ setMenu }) => {
    return(
        <div 
            className={cls.Backdrop}
            onClick={() => setMenu(false)}
        />
    )
}

export default Backdrop