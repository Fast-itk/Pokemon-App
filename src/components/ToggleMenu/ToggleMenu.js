import React from 'react-router-dom'
import cls from "./ToggleMenu.module.scss";

const ToggleMenu = ({setMenu, isMenu}) => {

    const activeMenu = [cls.ToggleMenu]
    const activeLine = [cls.line]

    if (isMenu) {
        activeMenu.push(cls.ToggleMenuActive)
        activeLine.push(cls.lineActive)
    }


    return (
        <div 
            className={activeMenu.join(' ')}
            onClick={() => setMenu(!isMenu)}
        >
            <div className={activeLine.join(' ')}></div>
            <div className={activeLine.join(' ')}></div>
            <div className={activeLine.join(' ')}></div>
        </div>
    )
}

export default ToggleMenu