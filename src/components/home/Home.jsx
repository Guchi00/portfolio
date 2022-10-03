import React from "react"
import "./style.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaPhoneVolume } from "react-icons/fa";
import Resume from "../resume/Resume"

const Home = () => {
  return (
      <>
    <div className="parentCon">
        <h1 className="ugochi">Ugochi Iwuchukwu</h1>
        <div className="ugochiDiv">
            <h1 className="fullStack">Intern/Junior Full-Stack Engineer</h1>
            <h1 className="fullStack">Remote | Hybrid | Onsite</h1>
            <h1 className="lekki">Lekki, Lagos Nigeria | postal code: 101233</h1>
        </div>
        <div className="btnDiv">
            <button className="hireMeBtn">Hire Me</button>
            <button className="referMeBtn">Refer Me</button>
        </div>
        <div className="listDiv">
            <ul className="socialMediaUl">
                <li className="list">
                    <a className="aTag" href=""><FaFacebookF /></a>
                </li>
                <li className="list">
                    <a className="aTag" href=""><FaTwitter /></a>
                </li>
                <li className="list">
                    <a className="aTag" ><FaInstagram/></a>
                </li>
                <li className="list">
                    <a className="aTag" ><FaLinkedinIn/></a>
                </li>
                <li className="list">
                    <a className="aTag"><FaPinterestP /></a>
                </li>
                <li className="list">
                    <a className="aTag"><FaPhoneVolume /></a>
                </li>
            </ul>
        </div> 
    </div>
    <Resume className="resume-body"/>
    </>
  )
}

export default Home