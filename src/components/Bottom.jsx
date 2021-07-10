import React from 'react'
import './components.css/bottom.css'
import hicoder from '../components/logo-dark.png'
function Bottom() {
    return <>
        <div className="bottom">
            <div class="grid-container">
                <div class="grid-item">
                    <img src={hicoder} alt="" />
                    <h4>
                    HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.
                </h4>
                    </div>
                <div class="grid-item"><h1>Info</h1>
                    <div>
                        <h2>Home</h2>

                        <h2>About</h2>

                        <h2>Blog</h2>

                        <h2>FAQ</h2>

                        <h2>Contact</h2>
                    </div>
                </div>
                <div class="grid-item"><h1>Contact</h1>

                    <h4>264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</h4>
                    <h4>(+91) 9206 980 980</h4>
                    <h4>admission@hicoder.in</h4><h4>10:00AM - 06:00PM</h4></div>
<div className="copyright">

       &copy; Copyrights | 2021 HiCoder Pvt. Ltd. | All Rights Reserved. 
       <div className="blue-text">
           Privacy Policy | Terms of Service
       </div>
       <div>
           *Registration Charges Applied
       </div>
</div>
            </div>
           
        </div>



    </>
}

export default Bottom;