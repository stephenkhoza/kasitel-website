import React from 'react';
import './KasitelIntro.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import phoneImg from '../assets/images/phone.jpg';
import laptopImg from '../assets/images/laptop.jpg';
import tabletImg from '../assets/images/tablet.jpg';
import repairerImg from '../assets/images/repairer.jpg';

function KasitelIntro() {
    return (
        <div className="intro-container">
            <div className="intro-images">
                <img src={phoneImg} alt="Cell Phone" />
                <img src={laptopImg} alt="Laptop" />
                <img src={tabletImg} alt="Tablet" />
                <img src={repairerImg} alt="Repairer" />
            </div>
            <div className="intro-text">
                <h1 className="main-heading">WELCOME TO KASITEL</h1>
                <p className="intro-paragraph">
                    KASITEL (Pty) Ltd is positioned to contribute to the ICT ecosystem with a developmental
                    perspective for the industry in South Africa and the SADC region.
                </p>
                <p>
                    As a member of the ICT Chamber and the South African Mobile Devices Distributors and
                    Repairers Association (SAMDDRA), Kasitel seeks to primarily support previously disadvantaged individuals for the acquisition of knowledge through skilling and incubation initiatives and access to market and manufacturing networks through partnerships.
                </p>
                <p>
                    Kasitel will continually strive to create these valuable relationships to benefit its customers by teaming up with government agencies, state owned companies, private companies, public companies, original equipment manufacturers, SMMEs, individuals and public figures.
                </p>
                <p>
                    The targeted outcome of these linkages is to enable a broader participation in an ICT
                    ecosystem where previously disadvantaged individuals can also meaningfully contribute and extract benefits. In the process, employment opportunities and sustainable jobs can therefore be created.
                </p>

                <h3 className="sub-heading">Services offered by Kasitel include:</h3>
                <ul className="services-list">
                    <li>Sourcing of equipment, parts and components.</li>
                    <li>Organisation of training, coaching and mentoring activities.</li>
                    <li>Project management and consulting.</li>
                </ul>

                <div className="contact-section">
                    <p><strong>Contact Us:</strong></p>
                    <p>
                        <FaPhoneAlt style={{ color: '#20514d', marginRight: '8px' }} />
                        +27 11 655 7000
                    </p>
                    <p>
                        <FaEnvelope style={{ color: '#20514d', marginRight: '8px' }} />
                        info@kasitel.co.za
                    </p>
                    <p>
                        <FaMapMarkerAlt style={{ color: '#20514d', marginRight: '8px' }} />
                        Building 10, Thornhill Office Park, 84 Bekker Road, Vorna Valley, Midrand 1686, Johannesburg, South Africa
                    </p>
                </div>


            </div>
        </div>
    );
}

export default KasitelIntro;
