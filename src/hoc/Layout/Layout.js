import React, {useState} from 'react' 
import Backdrop from '../../components/Backdrop/Backdrop'
import Navbar from '../../components/Navbar/Navbar'
import ToggleMenu from '../../components/ToggleMenu/ToggleMenu'
import cls from './Layout.module.scss'

const Layout = ({ children }) => {

    const [menu, setMenu] = useState(false) 

    return (
        <div className={cls.Layout}>
            <Navbar isMenu={menu} setMenu={setMenu} />
            <ToggleMenu setMenu={setMenu} isMenu={menu} />

            {
                menu ? <Backdrop setMenu={setMenu} /> : null
            }

            <main>
                { children }
            </main>
        </div>
    )
    
}

export default Layout