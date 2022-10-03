import React from "react";
import "./style.css";

const Resume = () => {
  return (
    <>
      <div className="currentJob">
        <p className="h1CurrentJob">Current Job</p>
      </div>
      <div className="splitParentDiv">
        <div className="bigSize">
          <div>
            <h2 className="jobD">Job Description</h2>
            <h3 className="h3">
              POSITION: Junior Software Engineer || Full-Stack{" "}
            </h3>
            <h3 className="h3">LOCATION: On-Site</h3>
            <h3 className="h3">COMPANY: Decagon</h3>
            <h3 className="h3">SCHEDULE: Full-Time (10-20h/week)</h3>
          </div>

          <h2 className="aboutMe">About me:</h2>
            <h3 className="aboutMeText">
              I am a budding Software Engineer with 1 year of professional
              experience. I'm currently working with Decagon as an Intern
              Software Engineer. I began my career as a self-taught developer
              and learned enough within a space of 8 months to secure employment
              in the competitive company I mentioned above. I have a basic
              knowledge of software fundamentals and have also worked with
              several tools and technologies prominent of which are HTML, CSS,
              JavaScript (ES6), NodeJS, ExpressJS, ReactJS, Typescript, and
              MongoDB. My strong points include a fierce passion for
              problem-solving using technology, a good sense of user interface
              design, and an ever-growing desire to learn new things. I am
              self-motivated, principled, and have a strong sense of commitment
              to my work. Having said this, I believe that I have made a
              convincing case for myself concerning my qualifications for the
              role of software engineer, and look forward to discussing how my
              skills will contribute to your firm's success in an interview.
            </h3>

          <h2 className="myProfile">My Profile:</h2>
          <ul>  
            <li className="myProfileText">
            Strong communication skills with the ability to discuss any issues
            with a wide variety of individuals and groups</li>
            <li className="myProfileText">Capability to produce
            content on time, with attention to detail, and an emphasis on
            identifying and pitching to a target audience</li>
            <li className="myProfileText">A well-organized team
            player with the ability to perform various tasks, act individually,
            and think creatively </li>
            <li className="myProfileText">Willingness to learn and develop frontend
            development skills</li>
            <li className="myProfileText">Competitive and proactive attitude</li>
            <li className="myProfileText">Capacity to
            stay professional in stressful/dispute situation</li>
            <li className="myProfileText">Fluency in English</li>
            </ul>

            <h3 className="ugochiCommittedMsg">Ugochi Iwuchukwu is committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender, gender identity or expression, or veteran status. I strive to be a more equal opportunity workforce.</h3>

            <button className="resumeHireMeBtn">Hire Me</button>
          
        </div>

        <div className="smallSize">
            <h2 className="jobInfo">Job Information</h2>
            <h3 className="h3">Industry</h3>
            <h3 className="h3-style">Engineering Services</h3>
            <h3 className="h3">Work Experience</h3>
            <h3 className="h3-style">Fresher</h3>
            <h3 className="h3">City</h3>
            <h3 className="h3-style">Lagos</h3>
            <h3 className="h3">State/Province</h3>
            <h3 className="h3-style">Lagos Nigeria</h3>
            <h3 className="h3">Country</h3>
            <h3 className="h3-style">Nigeria</h3>
            <h3 className="h3">Zip/Postal Code</h3>
            <h3 className="h3-style">101233</h3>
        </div>
      </div>
    </>
  );
};
export default Resume;
