import React from 'react'
import './components.css/topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { ImLinkedin2 } from 'react-icons/im';
import { GoMail } from 'react-icons/go'
import {AiOutlineClockCircle} from 'react-icons/ai'

function Topbar() {
    return (
        <div className="top">
            <ul>
                <div className="container">
                    <li className="item"><GoMail /></li>
                    <li className="item">admission@hicoder.in</li>
                    <li className="item"><FiPhoneCall /></li>
                    <li className="item">(+91) 9206 980 980</li>
                </div>
            </ul>

            <ul>
                <div className="container">

                    <li className="item"><AiOutlineClockCircle/></li>
                    <li className="item"> Mon - Fri: 10:00am - 06.00pm</li>
                    <li className="item"><FaFacebookF /></li>
                    <li className="item"><FiInstagram /></li>
                    <li className="item"><AiOutlineTwitter /></li>
                    <li className="item"><ImLinkedin2 /></li>
                </div>
            </ul>
        </div>
    )
}
export default Topbar;