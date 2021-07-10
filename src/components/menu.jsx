import react from 'react'
import hicoder from '../components/logo-dark.png'
import './components.css/menu.css'
import {CgMenuGridO} from 'react-icons/cg'
import {BiMenu} from 'react-icons/bi'
function Menu() {
    return <>

    <div className="menuBar">

    <div className="imgBox">
        <img src={hicoder} alt="Hicoder logo"/>
    </div>
    <div className="menuBox">

        <ul className="menuItemsList">
            <li className="menuItems">HICODER +</li>
            <li className="menuItems">COURSE +</li>
            <li className="menuItems">HIRE +</li>
            <li className="menuItems" id="applyBtn">APPLY NOW</li>
            <li className="menuItems" id="menuBoxIcon" ><CgMenuGridO/></li>
        </ul>
        <div className="phone-menu-icon">
            <BiMenu/>
        </div>
    </div>
    </div>
    </>
}

export default Menu;