import React, { useEffect, useRef, useState } from "react";
import "./infoPage.css";
import photo from "./photo.jpg";

// navbar images
import aboutMeIcon from "./about-me.png";
import educationIcon from "./education.png";
import skillIcon from "./skills.png";
import projectIcon from "./project.png";
import contactIcon from "./contact.png";

// skills images
import communicationIcon from "./communication.png";
import leadershipIcon from "./leadership.png";
import collaborationIcon from "./collaboration.png";
import uiuxIcon from "./ui-ux.png";
import frontendIcon from "./frontend.png";

import gitIcon from "./git.png";
import gitHubIcon from "./github.png";
import vsCodeIcon from "./vs-code.png";

import htmlIcon from "./html.png";
import cssIcon from "./css.png";
import jsIcon from "./javascript.png";
import reactIcon from "./react.png";

// contact me
import phoneIcon from "./call.png";
import gmailIcon from "./gmail.png";
import gitHubContactIcon from "./github-contact.png";
import linkedinIcon from "./linkedin.png";
import facebookIcon from "./facebook.png";
import instagramIcon from "./instagram.png";

function InfoPage() {
  useEffect(() => {
    const navItems = document.querySelectorAll(".navbar ul li");

    // Set the background color of the first navbar list item to red
    navItems[0].style.backgroundColor = "#ee4747";

    navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        // Remove the background color from all navbar list items
        navItems.forEach((item) => {
          item.style.backgroundColor = ""; // Reset the background color
        });

        // Set the background color of the clicked item
        navItem.style.backgroundColor = "#ee4747";

        // Scroll to the section with the className that matches the id of the clicked li
        const section = document.querySelector(`.${navItem.id}`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);



  
  const aboutMeRef = useRef();
  const headingAboutmeRef = useRef();
  const verticalLineAboutmeRef = useRef();
  const aboutmeContentRef = useRef();
  
  const educationRef = useRef();
  const headingEducationRef = useRef();
  const verticalLineEducationRef = useRef();
  const educationUlliHeadingRef = useRef();
  const educationUlliDescriptionRef = useRef();
  const educationUlliDatesCityRef = useRef();
  
  const skillsRef = useRef();
  const headingSkillsRef = useRef();
  const verticalLineSkillsRef = useRef();
  const softskillsHeadingRef = useRef();
  const softskillsContentRef = useRef();
  const technologiesContentRef = useRef();
  const languagesContentRef = useRef();
  
  const projectsRef = useRef();
  const headingProjectsRef = useRef();
  const verticalLineProjectsRef = useRef();
  const websitePreviewRef = useRef();
  const websiteDescriptionRef = useRef();
  
  const contactRef = useRef();
  const headingContactRef = useRef();
  const verticalLineContactRef = useRef();
  const contactContentRef = useRef();
  const contactSingleLineCallRef = useRef();
  const contactSingleLineEmailRef = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          handleSectionIntersection(sectionId);
          visibleSection(sectionId);
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  const handleSectionIntersection = (sectionId) => {
    // Update navigation styles when a section is in view
    const navItem = document.querySelector(`.navbar ul li#${sectionId}`);
    if (navItem) {
      document
        .querySelectorAll(".navbar ul li")
        .forEach((item) => (item.style.backgroundColor = ""));
      navItem.style.backgroundColor = "#ee4747";
    }
  };

  useEffect(() => {
    // Observe each section
    [aboutMeRef, headingAboutmeRef, verticalLineAboutmeRef, aboutmeContentRef,
    
      educationRef, headingEducationRef, verticalLineEducationRef, educationUlliHeadingRef, educationUlliDescriptionRef, educationUlliDatesCityRef, 
    
      skillsRef, headingSkillsRef, verticalLineSkillsRef, softskillsHeadingRef, softskillsContentRef, technologiesContentRef, languagesContentRef,
    
      projectsRef, headingProjectsRef, verticalLineProjectsRef, websitePreviewRef, websiteDescriptionRef,
    
      contactRef,headingContactRef, verticalLineContactRef, contactContentRef, contactSingleLineCallRef, contactSingleLineEmailRef,
    ].forEach(
      (ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      }
    );

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  
  const [isVisibleAboutMe, setIsVisibleAboutMe] = useState(false);
  const [isVisibleHeadingAboutme, setIsVisibleHeadingAboutme] = useState(false);
  const [isVisibleVerticalLineAboutme, setIsVisibleVerticalLineAboutme] = useState(false);
  const [isVisibleAboutmeContent, setIsAboutmeContent] = useState(false);
  
  const [isVisibleEducation, setIsVisibleEducation] = useState(false);
  const [isVisibleHeadingEducation, setIsVisibleHeadingEducation] = useState(false);
  const [isVisibleVerticalLineEducation, setIsVisibleVerticalLineEducation] = useState(false);
  const [isVisibleEducationUlliHeading, setIsVisibleEducationUlliHeading] = useState(false);
  const [isVisibleEducationUlliDescription, setIsVisibleEducationUlliDescription] = useState(false);
  const [isVisibleEducationUlliDatesCity, setIsVisibleEducationUlliDatesCity] = useState(false);
  
  const [isVisibleSkills, setIsVisibleSkills] = useState(false);
  const [isVisibleHeadingSkills, setIsVisibleHeadingSkills] = useState(false);
  const [isVisibleVerticalLineSkills, setIsVisibleVerticalLineSkills] = useState(false);
  const [isVisibleSoftskillsHeading, setIsVisibleSoftskillsHeading] = useState(false);
  const [isVisibleSoftskillsContent, setIsVisibleSoftskillsContent] = useState(false);
  const [isVisibleTechnologiesContent, setIsVisibleTechnologiesContent] = useState(false);
  const [isVisibleLanguagesContent, setIsVisibleLanguagesContent] = useState(false);
  
  const [isVisibleProjects, setIsVisibleProjects] = useState(false);
  const [isVisibleHeadingProjects, setIsVisibleHeadingProjects] = useState(false);
  const [isVisibleVerticalLineProjects, setIsVisibleVerticalLineProjects] = useState(false);
  const [isVisibleWebsitePreview, setIsVisibleWebsitePreview] = useState(false);
  const [isVisibleWebsiteDescription, setIsVisibleWebsiteDescription] = useState(false);
  
  const [isVisibleContact, setIsVisibleContact] = useState(false);
  const [isVisibleHeadingContact, setIsVisibleHeadingContact] = useState(false);
  const [isVisibleVerticalLineContact, setIsVisibleVerticalLineContact] = useState(false);
  const [isVisibleContactContent, setIsVisibleContactContent] = useState(false);
  const [isVisibleSingleLineCall, setIsVisibleSingleLineCall] = useState(false);
  const [isVisibleSingleLineEmail, setIsVisibleSingleLineEmail] = useState(false);

  const visibleSection = (sectionId) => {
    switch (sectionId) {
      case "about-me":
        setIsVisibleAboutMe(true);
        setTimeout(() => {
          setIsVisibleVerticalLineAboutme(true);
          setIsVisibleHeadingAboutme(true);
          setIsAboutmeContent(true);
        }, 1000);
        break;
      case "education":
        setIsVisibleEducation(true);
        setTimeout(() => {
          setIsVisibleVerticalLineEducation(true);
          setIsVisibleHeadingEducation(true);
          setIsVisibleEducationUlliHeading(true);
          setIsVisibleEducationUlliDescription(true);
          setIsVisibleEducationUlliDatesCity(true);
        }, 1000);
        break;
      case "skills":
        setIsVisibleSkills(true);
        setTimeout(() => {
          setIsVisibleVerticalLineSkills(true);
          setIsVisibleHeadingSkills(true);
          setIsVisibleSoftskillsHeading(true);
          setIsVisibleSoftskillsContent(true);
          setIsVisibleTechnologiesContent(true);
          setIsVisibleLanguagesContent(true);
        }, 1000);
        break;
      case "projects":
        setIsVisibleProjects(true);
        setTimeout(() => {
          setIsVisibleVerticalLineProjects(true);
          setIsVisibleHeadingProjects(true);
          setIsVisibleWebsitePreview(true);
          setIsVisibleWebsiteDescription(true);
        }, 1000);
        break;
      case "contact-me":
        setIsVisibleContact(true);
        setTimeout(() => {
          setIsVisibleVerticalLineContact(true);
          setIsVisibleHeadingContact(true);
          setIsVisibleContactContent(true);
          setIsVisibleSingleLineCall(true);
          setIsVisibleSingleLineEmail(true);
        }, 1000);
        break;
      default:
        break;
    }
  };




  


  return (
    <div className={`infoPage`}>
      <div className="navbar">
        <div className="profile-photo">
          <img src={photo} className="photo" alt=" " />
          Charvit Zalavadiya
        </div>
        <ul>
          <li id="about-me">
            <img src={aboutMeIcon} alt=" "></img> About Me
          </li>
          <li id="education">
            <img src={educationIcon} alt=" "></img> Education
          </li>
          <li id="skills">
            <img src={skillIcon} alt=" "></img> Skills
          </li>
          <li id="projects">
            <img src={projectIcon} alt=" "></img> Projects
          </li>
          <li id="contact-me">
            <img src={contactIcon} alt=" "></img> Contact
          </li>
        </ul>
      </div>

      <div className="container">
        <div className={`about-me ${isVisibleAboutMe ? "in-view-about-me" : ""}`} ref={aboutMeRef} id="about-me">
        <div className={`vertical-line ${isVisibleVerticalLineAboutme ? "in-view-vertical-line" : ""}`} id="vertical-line" ref={verticalLineAboutmeRef}></div>
        <div className={`heading ${isVisibleHeadingAboutme ? "in-view-heading" : ""}`} id="heading"
          ref={headingAboutmeRef}>
            <span>ABOUT ME</span>
          </div>
          <div className={`content ${isVisibleAboutmeContent ? "in-view-aboutme-content" : ""}`} ref={aboutmeContentRef} id="aboutme-content">
            <p>Hello friend !</p>
            <p>I'm Charvit Zalavadiya.</p>
            <p>
              I am a Frontend Developer and looking towards to be an successfull
              MERN Stack Developer. Currently I'm a <b>React developer</b>. I am
              always looking for ways to push boundaries and bring innovative
              ideas to life.
            </p>
            <p>
              I also have passion in Wed Designing field and for that I started
              learn about <b>Figma</b> and <b>Webflow</b> etc.
            </p>
            <p>
              Communication Languages : <b>Hindi</b> | <b>English</b>
            </p>
          </div>
        </div>

        {/* education */}

        <div className={`education ${isVisibleEducation ? "in-view-education" : ""}`} ref={educationRef} id="education">
          <div className={`vertical-line ${isVisibleVerticalLineEducation ? "in-view-vertical-line" : ""}`} id="vertical-line" ref={verticalLineEducationRef}></div>
          <div className={`heading ${isVisibleHeadingEducation ? "in-view-heading" : ""}`} id="heading"
          ref={headingEducationRef}>
            <span>EDUCATION</span>
          </div>
          <div className="content">
            <ul>
              <li>
                <p className={`li-heading ${isVisibleEducationUlliHeading ? "in-view-education-ulli-heading" : ""}`} ref={educationUlliHeadingRef} id="educationUlliHeading">Degree</p>
                <p className={`li-description ${isVisibleEducationUlliDescription ? "in-view-education-ulli-description" : ""}`} id="educationUlliDescription" ref={educationUlliDescriptionRef}>
                  Currently I'm pursuing B.Tech Degree in ICT domain at Pandit
                  Deendayal Energy University.
                </p>
                <span className={`li-dates ${isVisibleEducationUlliDatesCity ? "in-view-education-ulli-dates-city" : ""}`} ref={educationUlliDatesCityRef} id="educationUlliDatesCity">October, 2022 - Present</span>
                <span className={`li-dates ${isVisibleEducationUlliDatesCity ? "in-view-education-ulli-dates-city" : ""}`} ref={educationUlliDatesCityRef} id="educationUlliDatesCity">
                  <i>Gandhinagar</i>
                </span>
              </li>
              <li>
              <p className={`li-heading ${isVisibleEducationUlliHeading ? "in-view-education-ulli-heading" : ""}`} ref={educationUlliHeadingRef} id="educationUlliHeading">H.S.C.</p>
              <p className={`li-description ${isVisibleEducationUlliDescription ? "in-view-education-ulli-description" : ""}`} id="educationUlliDescription" ref={educationUlliDescriptionRef}>
                  Completed 12th grade with 91% in PCM from AB Higher Secondary
                  School.
                </p>
                <span className={`li-dates ${isVisibleEducationUlliDatesCity ? "in-view-education-ulli-dates-city" : ""}`} ref={educationUlliDatesCityRef} id="educationUlliDatesCity">June, 2021 - April, 2022</span>
                <span className={`li-dates ${isVisibleEducationUlliDatesCity ? "in-view-education-ulli-dates-city" : ""}`} ref={educationUlliDatesCityRef} id="educationUlliDatesCity">
                  <i>Navsari</i>
                </span>
              </li>
              <li>
              <p className={`li-heading ${isVisibleEducationUlliHeading ? "in-view-education-ulli-heading" : ""}`} ref={educationUlliHeadingRef} id="educationUlliHeading">S.S.C.</p>
              <p className={`li-description ${isVisibleEducationUlliDescription ? "in-view-education-ulli-description" : ""}`} id="educationUlliDescription" ref={educationUlliDescriptionRef}>
                  Completed 10th grade with 86% from Sett R.J.J. High School.
                </p>
                <span className={`li-dates ${isVisibleEducationUlliDatesCity ? "in-view-education-ulli-dates-city" : ""}`} ref={educationUlliDatesCityRef} id="educationUlliDatesCity">June, 2019 - March, 2020</span>
                <span className={`li-dates ${isVisibleEducationUlliDatesCity ? "in-view-education-ulli-dates-city" : ""}`} ref={educationUlliDatesCityRef} id="educationUlliDatesCity">
                  <i>Navsari</i>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* skills */}

        <div className={`skills ${isVisibleSkills ? "in-view-skills" : ""}`} ref={skillsRef} id="skills">
        <div className={`vertical-line ${isVisibleVerticalLineSkills ? "in-view-vertical-line" : ""}`} id="vertical-line" ref={verticalLineSkillsRef}></div>
          <div className={`heading ${isVisibleHeadingSkills ? "in-view-heading" : ""}`} id="heading"
          ref={headingSkillsRef}>
            <span>SKILLS</span>
          </div>
          <div className="content">

            {/* softSkills and technologies */}

            <div className="softSkills-technologies">
              <div className="softSkills">
                <div className={`softSkills-heading ${isVisibleSoftskillsHeading ? "in-view-softskills-heading" : ""}`} ref={softskillsHeadingRef} id="softskills-heading">Skills</div>
                <div className={`softSkills-content ${isVisibleSoftskillsContent ? "in-view-softskills-content" : ""}`} ref={softskillsContentRef}
                id="softskills-content">
                  <div>
                    <span>Communication</span>
                    <img src={communicationIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>Leadership</span>
                    <img src={leadershipIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>Collaboration</span>
                    <img src={collaborationIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>UI/UX</span>
                    <img src={uiuxIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>Frontend</span>
                    <img src={frontendIcon} alt=" "></img>
                  </div>
                </div>
              </div>

              <div className="technologies">
              <div className={`softSkills-heading ${isVisibleSoftskillsHeading ? "in-view-softskills-heading" : ""}`} ref={softskillsHeadingRef} id="softskills-heading">Technologies</div>
                <div className={`technologies-content ${isVisibleTechnologiesContent ? "in-view-technologies-content" : ""}`} ref={technologiesContentRef}
                id="technologies-content">
                  <div>
                    <img src={gitIcon} alt=" "></img>
                    <span>Git</span>
                  </div>
                  <div>
                    <img src={gitHubIcon} alt=" "></img>
                    <span>GitHub</span>
                  </div>
                  <div>
                    <img src={vsCodeIcon} alt=" "></img>
                    <span>VS Code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* languages */}

            <div className="languages">
            <div className={`softSkills-heading ${isVisibleSoftskillsHeading ? "in-view-softskills-heading" : ""}`} ref={softskillsHeadingRef} id="softskills-heading">Languages</div>
              <div className="languages-content">
                <div className={`languages-content-line-1 ${isVisibleLanguagesContent ? "in-view-languages-content-1" : ""}`} ref={languagesContentRef} id="languages-content">
                  <div>
                    <span>HTML</span>
                    <img src={htmlIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>CSS</span>
                    <img src={cssIcon} alt=" "></img>
                  </div>
                </div>
                <div className={`languages-content-line-2 ${isVisibleLanguagesContent ? "in-view-languages-content-2" : ""}`} ref={languagesContentRef} id="languages-content">
                  <div>
                    <img src={jsIcon} alt=" "></img>
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <img src={reactIcon} alt=" "></img>
                    <span>React JS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* projects */}

        <div className={`projects ${isVisibleProjects ? "in-view-projects" : ""}`} ref={projectsRef} id="projects">
        <div className={`vertical-line ${isVisibleVerticalLineProjects ? "in-view-vertical-line" : ""}`} id="vertical-line" ref={verticalLineProjectsRef}></div>
          <div className={`heading ${isVisibleHeadingProjects ? "in-view-heading" : ""}`} id="heading"
          ref={headingProjectsRef}>
            <span>PROJECTS</span>
          </div>
          <div className="content">
            <div className="orbital">
              <span className={`website-preview ${isVisibleWebsitePreview ? "in-view-website-preview" : ""}`} ref={websitePreviewRef} id="website-preview">
                <iframe src="https://charvitzalavadiyaofficial.github.io/orbital/"></iframe>
              </span>
              <span className={`website-description ${isVisibleWebsiteDescription ? "in-view-website-description" : ""}`} ref={websiteDescriptionRef} id="website-desription">
                <span className="website-description-heading">Orbital</span>
                <span className="website-description-description">
                  Orbital is a website that helps people to find the best
                  restaurants in the city.
                </span>
              </span>
            </div>
            <div className="yt-clone">
            <span className={`website-preview ${isVisibleWebsitePreview ? "in-view-website-preview" : ""}`} ref={websitePreviewRef} id="website-preview">
                <iframe src="https://charvitzalavadiyaofficial.github.io/ytclone/"></iframe>
              </span>
              <span className={`website-description ${isVisibleWebsiteDescription ? "in-view-website-description" : ""}`} ref={websiteDescriptionRef} id="website-desription">
                <span className="website-description-heading">
                  YouTube Clone
                </span>
                <span className="website-description-description">
                  YouTube Clone
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* contact me */}

        <div className={`contact-me ${isVisibleContact ? "in-view-contact" : ""}`} ref={contactRef} id="contact-me">
        <div className={`vertical-line ${isVisibleVerticalLineContact ? "in-view-vertical-line" : ""}`} id="vertical-line" ref={verticalLineContactRef}></div>
          <div className={`heading ${isVisibleHeadingContact ? "in-view-heading" : ""}`} id="heading"
          ref={headingContactRef}>
            <span>Connect Me</span>
          </div>
          <div className={`content ${isVisibleContactContent ? "in-view-contact-content" : ""}`} ref={contactContentRef} id="contact-content">
            <ul>
              <li>
                <div className="contact-line">
                  <span className="icon-box cm1i">
                    <a href="tel:8849564484">
                    <img src={phoneIcon} alt=" "></img>
                    </a>
                  </span>
                  <a href="tel:8849564484">
                  <span className="stripe-box cm1s">Phone</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-line">
                  <span className="icon-box cm2i">
                    <a href="mailto:charvitzalavadiya@gmail.com">
                      <img src={gmailIcon} alt=" "></img>
                    </a>
                  </span>
                  <a href="mailto:charvitzalavadiya@gmail.com">
                    <span className="stripe-box cm2s">Email</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-line">
                  <span className="icon-box cm3i">
                    <a
                      href="https://github.com/CharvitZalavadiyaOfficial"
                      target="_blank"
                    >
                      <img src={gitHubContactIcon} alt=" "></img>
                    </a>
                  </span>
                  <a
                    href="https://github.com/CharvitZalavadiyaOfficial"
                    target="_blank"
                  >
                    <span className="stripe-box cm3s">GitHub</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-line">
                  <span className="icon-box cm4i">
                    <a
                      href="https://www.linkedin.com/in/charvit-zalavadiya-1b34b3243/"
                      target="_blank"
                    >
                      <img src={linkedinIcon} alt=" "></img>
                    </a>
                  </span>
                  <a
                    href="https://www.linkedin.com/in/charvit-zalavadiya-1b34b3243/"
                    target="_blank"
                  >
                    <span className="stripe-box cm4s">LinkedIn</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-line">
                  <span className="icon-box cm5i">
                    <a
                      href="https://www.facebook.com/profile.php?id=100086958233907"
                      target="_blank"
                    >
                      <img src={facebookIcon} alt=" "></img>
                    </a>
                  </span>
                  <a
                    href="https://www.facebook.com/profile.php?id=100086958233907"
                    target="_blank"
                  >
                    <span className="stripe-box cm5s">Facebook</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-line">
                  <span className="icon-box cm6i">
                    <a
                      href="https://www.instagram.com/charvit_zalavadiya/?next=%2F"
                      target="_blank"
                    >
                      <img src={instagramIcon} alt=" "></img>
                    </a>
                  </span>
                  <a
                    href="https://www.instagram.com/charvit_zalavadiya/?next=%2F"
                    target="_blank"
                  >
                    <span className="stripe-box cm6s">Instagram</span>
                  </a>
                </div>
              </li>
            </ul>
            <div className="single-line-for-call-email">
              <span className={`single-line-call ${isVisibleSingleLineCall ? "in-view-single-line-call" : ""}`} ref={contactSingleLineCallRef} id="single-line-call">
                <img src={phoneIcon} alt=" "></img>
                +91 8849564484
              </span>
              <span className={`single-line-email ${isVisibleSingleLineEmail ? "in-view-single-line-Email" : ""}`} ref={contactSingleLineEmailRef} id="single-line-Email">
                <img src={gmailIcon} alt=" "></img>
                charvitzalavadiya@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
