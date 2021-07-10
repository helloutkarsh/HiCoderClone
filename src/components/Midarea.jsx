import React from 'react'
import './components.css/midarea.css'
import {BiCreditCardFront,BiNetworkChart} from 'react-icons/bi'
import {FaPeopleCarry} from 'react-icons/fa'
import {GrDeploy ,GrWorkshop} from 'react-icons/gr'
import {SiGoogleanalytics} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import {ImProfile} from 'react-icons/im'
import image6 from '../components/image6.jpg'
import {FaQuoteLeft} from 'react-icons/fa'
import sidhiv from '../components/sidhiv.jpg'
import stablex from '../components/stablex.jpg'
import adaman from '../components/adaman.jpg'

import mobi from '../components/mobi.jpg'

function Midarea() {
    
    return <>
        <div className="area-1">
            <h3>WHAT YOU LEARN</h3>
            <h2>at HiCoder is useful</h2>
            <h2 className="highlight">Technology, Management & more</h2>
        </div>
        <div class="section group">
            <div class="col span_1_of_4">
                <BiCreditCardFront size={75}/>
                <h1>Front End</h1>
                <h4>Students learn to design, develope the UI following UX with industry standards.</h4>
            </div>
            <div class="col span_1_of_4">
                <BiNetworkChart size={75}/>
                <h1>Backend</h1>
                <h4>Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.</h4>
            </div>
            <div class="col span_1_of_4">
                <FaPeopleCarry size={75}/>
                <h1>Project Management</h1>
                <h4>Students learn to plan, project, and execute development projects with client expectation.</h4>
            </div>
            <div class="col span_1_of_4">
            <GrDeploy size={75}/>
                <h1>Production Deployment</h1>
                <h4>Students learn to create a server, deploy an application following security guidelines.</h4>
            </div>
        </div>


        <div class="section group">
            <div class="col span_1_of_4">
                <SiGoogleanalytics size={75}/>
                <h1>Basic Analytics</h1>
                <h4>Students learn about analytics, usability, and integration of analytics in their production application.</h4>
            </div>
            <div class="col span_1_of_4">
                <GiSkills size={75}/>
                <h1>Soft Skills</h1>

                <h4>Soft skills encourages open communication & enhances corporate skills having corporate attitude.</h4>
            </div>
            <div class="col span_1_of_4">
                <GrWorkshop size={75} />
                <h1>Industry Standards</h1>
                <h4>Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.</h4>
            </div>
            <div class="col span_1_of_4">
                <ImProfile size={75}/>
                <h1>Max Pro Resume</h1>
                <h4>Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.</h4>
            </div>
        </div>

        <div className="area-2">
            <h2>THOUGHTS ON HICODER SYLLABUS</h2>
            <h1>Reviews by Industry Experts</h1>
        </div>


        <div className="area-3">
            <div className="imgBox-6">
                <img src={image6} alt="" />
            </div>

            <div className="area-3-info">
                <FaQuoteLeft size={75}/>
                <h4>

                This is a great opportunity for students from tier 2 tier 3 engineering colleges. HiCoder's syllabus looks wholesome as student will have opportunity to do both frontend as well as backend. Happy to see that IT Industty will have a wave of quality engineers.
                </h4>

                <h2>
                    Ashish Vishwakarma
                </h2>
                <h3>Software Engineer, Bosch</h3>
            </div>
        </div>

        <div className="partner-box">
            <h2>Partner & Associates</h2>
            <div className="partner-img">
                <div>

                <img src={mobi} alt="" />
                <img src={stablex} alt="" />
                <img src={adaman} alt=""/>
                <img src={sidhiv} alt=""/>
                </div>

            </div>
        </div>
        <div className="area-1">
            <h3>NEWS</h3>
            <h2>#COVID19 Demands more full stack developers.</h2>
            <h2 className="highlight">& Industry Updates</h2>
        </div>
    </>
}

export default Midarea;