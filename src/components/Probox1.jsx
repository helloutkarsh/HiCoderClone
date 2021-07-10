import React from 'react'
import image1 from '../components/image1.jpg'
import './components.css/probox.css'
import image2 from '../components/image2.jpg'
import image3 from '../components/image3.jpg'
import { IoIosCloudDone } from 'react-icons/io'
import { SiGoogleclassroom } from 'react-icons/si'
import { SiOpslevel } from 'react-icons/si'
import { GiAchievement } from 'react-icons/gi'
import { GiStrong } from 'react-icons/gi'
import { FcCustomerSupport,FcWorkflow } from 'react-icons/fc'
import image4 from '../components/image4.jpg'
import image5 from '../components/image5.jpg'

function Probox() {
    return <>

        <div className="probox1">
            <h2 className="tag1">
                YOUR TIME, OUR EFFORTS
            </h2>
            <h1 className="tag1main">
                Pay After Job Full Stack Development Course
            </h1>
            <div className="know-more-btn">
                <h2>KNOW MORE</h2>
            </div>
        </div>

        <div className="bottom-info">
            NEXT BATCH: 27 July | Apply Now
        </div>

        <div className="main-2">
            <div className="imgBox-2">
                <img src={image2} alt="image 2" />
            </div>
            <div className="main-2-info">
                <h3>HICODER</h3>
                <h2 id="first-line">We help students learn</h2>
                <h2 id="second-line">Full Stack Development.</h2>
                <h4>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</h4>
            </div>
        </div>

        <div className="main-3">
            <div className="main-3-info">
                <h2 id="first-line">Trained on the most in-demand Technology Skills</h2>
                <h3>At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.</h3>

                <ul>
                    <li><IoIosCloudDone /><h4>End to End Project Analysis, Design & Development</h4></li>
                    <li><IoIosCloudDone /><h4>Authentication, Geo Tracking, Payment Gateway</h4></li>
                    <li><IoIosCloudDone /><h4>Authentication, Geo Tracking, Payment Gateway</h4></li>
                    <li><IoIosCloudDone /><h4>Authentication, Geo Tracking, Payment Gateway</h4></li>
                </ul>
            </div>

            <div className="imgBox-3">
                <img src={image3} alt="image 3" />
            </div>


        </div>
        <div className="applyNowBtn">
            <h2>APPLY NOW</h2>
        </div>


        <div className="main-4">
            <div class="grid-item">

                <div className="item-icon">
                    <SiGoogleclassroom size={75} />

                </div>
                <h2>34+</h2>
                <h2>PROJECTS COMPLETED</h2>

            </div>
            <div class="grid-item">
                <div className="item-icon">
                    <SiOpslevel size={75} />
                </div>
                <h2>47+</h2>
                <h2>INDUSTRY EXPERTS</h2>

            </div>
            <div class="grid-item">
                <div className="item-icon">
                    <GiAchievement size={75} />
                </div>

                <h2>30+</h2>
                <h2>QUALITY DEVELOPERS</h2>

            </div>
            <div class="grid-item">
                <div className="item-icon">
                    <GiStrong size={75} />
                </div>
                <h2>4000000+</h2>
                <h2>APPLICATION USERS</h2>

            </div>


        </div>
        <div className="main-5">
            <div className="main-5-info">
                <h2 id="first-line">Why HiCoder?</h2>
                <h4>HiCoder enables students to think about real-world problems, design, and develop the right solution. <a href="#">  know more</a> </h4>

                <div className="inner-info-1">
                    <div className="first-box">
                        <FcCustomerSupport size={100}/>
                    </div>
                    <div className="second-box">
                        <h2>Personalized Training</h2>
                        <h4>We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.</h4>
                    </div>
                   
                </div>
                <div className="inner-info-2">

                <div className="first-box">
                        <FcWorkflow size={100}/>
                    </div>
                    <div className="second-box">
                        <h2>Production Projects</h2>
                        <h4>Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.</h4>
                    </div>
                </div>
            </div>

            <div className="imgBox-5">
                <img src={image5} alt="" />
            </div>
        </div>

        <div className="main-2">
            <div className="imgBox-4">
                <img src={image4} alt="image 2" />
            </div>
            <div className="main-2-info">
                
                <h2 id="first-line">How does  HiCoder help?</h2>
                <h3 className="highlight">HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</h3>
                <h4>HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.</h4>
            <div id="know-more-2" className="know-more-btn"><h2>know more</h2></div>
            </div>
        </div>




    </>
}

export default Probox;