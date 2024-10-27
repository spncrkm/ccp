import React, { useState } from "react";
import Header from "../landingpage/Header";
import { IClogo, rcorp } from "../assets";
import Footer from "../landingpage/Footer";

const ProjectsPage = () => {
  const [selectedImg, setSelectedImg] = useState("rcorp");

  const handleSelect = (img) => {
    setSelectedImg(img);
  };

  return (
    <>
      <Header />
      <div className='img-container'>
        <div onClick={() => handleSelect("rcorp")}
            className={selectedImg === "rcorp" ? "selected" : ""}>
          <img src={rcorp} alt='R Corp' />
        </div>
        <div onClick={() => handleSelect("IClogo")}
            className={selectedImg === "IClogo" ? "selected" : ""}>
          <img src={IClogo} alt='IC logo' />
        </div>
      </div>
      <div className='text-container'>
        {selectedImg === "rcorp" && (
          <div>
            <p><strong>Program Pitch Title:</strong> Empowering our Rural Communities for Holistic Healing: A Comprehensive SUD/OUD/COD Program</p>
            <p><strong>Introduction:</strong><br />
              We are thrilled to present two groundbreaking programs; BRIDGES & Innovative Pathway aimed at addressing Substance Use Disorder (SUD), Opioid Use Disorder (OUD), and Co-Occurring Disorders (COD) by leveraging the power of Community Health Workers (CHWs) and Peer Recovery Coaches. Our innovative approach focuses on building a supportive community network that fosters lasting recovery and holistic healing.
            </p>
            <p><strong>Program Components:</strong></p>
            <ul>
              <li><strong>Community Health Workers (CHWs):</strong><br />
                Outreach and Education: CHWs will engage with local communities to raise awareness about SUD, OUD, and COD, dispelling myths and reducing stigma.
                <br />Screening and Assessment: Conducting culturally sensitive screenings to identify individuals at risk and connect them with appropriate resources.
              </li>
              <li><strong>Peer Recovery Coaches:</strong><br />
                Emotional Support: Trained Peer Recovery Coaches with lived experience will provide empathetic and understanding support.
                <br />Relapse Prevention: Offering personalized strategies to prevent relapse and support sustained recovery.
              </li>
            </ul>
            <p><strong>Program Impact:</strong><br />
              Reduction in Stigma: By integrating CHWs and Peer Recovery Coaches, we aim to reduce the stigma associated with SUD, OUD, and COD, fostering an environment where individuals feel comfortable seeking help.
            </p>
            {/* Add more sections as needed */}
          </div>
        )}
        {selectedImg === "IClogo" && (
          <div>
            <p><strong>Innovative Communities</strong><br />
              <strong>Summary of the Rural Health Care Services Outreach Program</strong>
            </p>
            <p><strong>Pitch:</strong> The Rural Health Care Services Outreach Program aims to transform healthcare delivery in rural communities by integrating systematic screening, referral, and community navigation services.</p>
            <p><strong>Problem:</strong><br />
              Rural communities face unique healthcare challenges, including limited access to services, scarcity of healthcare providers, and high rates of chronic diseases.
            </p>
            <ul>
              <li>Systematic client screening to identify health-related social needs.</li>
              <li>Referral services to connect clients with appropriate community resources.</li>
              <li>Community navigation services to guide clients through available services.</li>
            </ul>
            <p><strong>Value Proposition:</strong> The program offers a comprehensive approach to healthcare that goes beyond medical treatment.</p>
            {/* Add more sections as needed */}
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default ProjectsPage;
