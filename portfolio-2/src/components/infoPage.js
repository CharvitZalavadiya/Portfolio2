import React, { useEffect, useRef, useState } from "react";
import "./infoPage.css";
import photo from "./photo.jpg";
import charvitResume from "./resume.pdf";

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
import fullstackIcon from "./fullstack.png";

import gitIcon from "./git.png";
import gitHubIcon from "./github.png";
import vsCodeIcon from "./vs-code.png";
import postmanapiIcon from "./postman-api.png";

import htmlIcon from "./html.png";
import cssIcon from "./css.png";
import jsIcon from "./javascript.png";
import reactIcon from "./react.png";
import nodeIcon from "./node-js.png";
import expressIcon from "./express-js.png";
import mongoIcon from "./mongo.png";
import tailwindIcon from "./tailwind-css.png";

// projects
import musify from "./musify.png"
import orbital from "./orbital.png"
import ytclone from "./ytclone.png"

// contact me
import phoneIcon from "./call.png";
import gmailIcon from "./gmail.png";
import gitHubContactIcon from "./github-contact.png";
import linkedinIcon from "./linkedin.png";
import facebookIcon from "./facebook.png";
import instagramIcon from "./instagram.png";

function InfoPage() {
  const resume = () => {
    const link = document.createElement("a");
    link.href = charvitResume; // Assuming the file is in the public folder
    link.target = "_blank";
    link.style.display = "none";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

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
  const educationUlliHeading1Ref = useRef();
  const educationUlliDescription1Ref = useRef();
  const educationUlliDatesCity1Ref = useRef();
  const educationUlliHeading2Ref = useRef();
  const educationUlliDescription2Ref = useRef();
  const educationUlliDatesCity2Ref = useRef();
  const educationUlliHeading3Ref = useRef();
  const educationUlliDescription3Ref = useRef();
  const educationUlliDatesCity3Ref = useRef();

  const skillsRef = useRef();
  const headingSkillsRef = useRef();
  const verticalLineSkillsRef = useRef();
  const softskillsHeadingRef = useRef();
  const softskillsContentRef = useRef();
  const technologiesHeadingRef = useRef();
  const technologiesContentRef = useRef();
  const languagesHeadingRef = useRef();
  const languagesContentRef = useRef();

  const projectsRef = useRef();
  const headingProjectsRef = useRef();
  const verticalLineProjectsRef = useRef();
  const websitePreview1Ref = useRef();
  const websiteDescription1Ref = useRef();
  const websitePreview2Ref = useRef();
  const websiteDescription2Ref = useRef();
  const websitePreview3Ref = useRef();
  const websiteDescription3Ref = useRef();

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
    { threshold: 0.2 } // Adjust the threshold as needed
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
    [
      aboutMeRef,
      headingAboutmeRef,
      verticalLineAboutmeRef,
      aboutmeContentRef,

      educationRef,
      headingEducationRef,
      verticalLineEducationRef,
      educationUlliHeading1Ref,
      educationUlliDescription1Ref,
      educationUlliDatesCity1Ref,
      educationUlliHeading2Ref,
      educationUlliDescription2Ref,
      educationUlliDatesCity2Ref,
      educationUlliHeading3Ref,
      educationUlliDescription3Ref,
      educationUlliDatesCity3Ref,

      skillsRef,
      headingSkillsRef,
      verticalLineSkillsRef,
      softskillsHeadingRef,
      softskillsContentRef,
      technologiesHeadingRef,
      technologiesContentRef,
      languagesContentRef,
      languagesHeadingRef,

      projectsRef,
      headingProjectsRef,
      verticalLineProjectsRef,
      websitePreview1Ref,
      websiteDescription1Ref,
      websitePreview2Ref,
      websiteDescription2Ref,
      websitePreview3Ref,
      websiteDescription3Ref,

      contactRef,
      headingContactRef,
      verticalLineContactRef,
      contactContentRef,
      contactSingleLineCallRef,
      contactSingleLineEmailRef,
    ].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  const [isVisibleAboutMe, setIsVisibleAboutMe] = useState(false);
  const [isVisibleHeadingAboutme, setIsVisibleHeadingAboutme] = useState(false);
  const [isVisibleVerticalLineAboutme, setIsVisibleVerticalLineAboutme] =
    useState(false);
  const [isVisibleAboutmeContent, setIsAboutmeContent] = useState(false);

  const [isVisibleEducation, setIsVisibleEducation] = useState(false);
  const [isVisibleHeadingEducation, setIsVisibleHeadingEducation] =
    useState(false);
  const [isVisibleVerticalLineEducation, setIsVisibleVerticalLineEducation] =
    useState(false);
  const [isVisibleEducationUlliHeading1, setIsVisibleEducationUlliHeading1] =
    useState(false);
  const [
    isVisibleEducationUlliDescription1,
    setIsVisibleEducationUlliDescription1,
  ] = useState(false);
  const [
    isVisibleEducationUlliDatesCity1,
    setIsVisibleEducationUlliDatesCity1,
  ] = useState(false);
  const [isVisibleEducationUlliHeading2, setIsVisibleEducationUlliHeading2] =
    useState(false);
  const [
    isVisibleEducationUlliDescription2,
    setIsVisibleEducationUlliDescription2,
  ] = useState(false);
  const [
    isVisibleEducationUlliDatesCity2,
    setIsVisibleEducationUlliDatesCity2,
  ] = useState(false);
  const [isVisibleEducationUlliHeading3, setIsVisibleEducationUlliHeading3] =
    useState(false);
  const [
    isVisibleEducationUlliDescription3,
    setIsVisibleEducationUlliDescription3,
  ] = useState(false);
  const [
    isVisibleEducationUlliDatesCity3,
    setIsVisibleEducationUlliDatesCity3,
  ] = useState(false);

  const [isVisibleSkills, setIsVisibleSkills] = useState(false);
  const [isVisibleHeadingSkills, setIsVisibleHeadingSkills] = useState(false);
  const [isVisibleVerticalLineSkills, setIsVisibleVerticalLineSkills] =
    useState(false);
  const [isVisibleSoftskillsHeading, setIsVisibleSoftskillsHeading] =
    useState(false);
  const [isVisibleSoftskillsContent, setIsVisibleSoftskillsContent] =
    useState(false);
  const [isVisibleTechnologiesHeading, setIsVisibleTechnologiesHeading] =
    useState(false);
  const [isVisibleTechnologiesContent, setIsVisibleTechnologiesContent] =
    useState(false);
  const [isVisibleLanguagesHeading, setIsVisibleLanguagesHeading] =
    useState(false);
  const [isVisibleLanguagesContent, setIsVisibleLanguagesContent] =
    useState(false);

  const [isVisibleProjects, setIsVisibleProjects] = useState(false);
  const [isVisibleHeadingProjects, setIsVisibleHeadingProjects] =
    useState(false);
  const [isVisibleVerticalLineProjects, setIsVisibleVerticalLineProjects] =
    useState(false);
  const [isVisibleWebsitePreview1, setIsVisibleWebsitePreview1] =
    useState(false);
  const [isVisibleWebsiteDescription1, setIsVisibleWebsiteDescription1] =
    useState(false);
  const [isVisibleWebsitePreview2, setIsVisibleWebsitePreview2] =
    useState(false);
  const [isVisibleWebsiteDescription2, setIsVisibleWebsiteDescription2] =
    useState(false);
  const [isVisibleWebsitePreview3, setIsVisibleWebsitePreview3] =
    useState(false);
  const [isVisibleWebsiteDescription3, setIsVisibleWebsiteDescription3] =
    useState(false);

  const [isVisibleContact, setIsVisibleContact] = useState(false);
  const [isVisibleHeadingContact, setIsVisibleHeadingContact] = useState(false);
  const [isVisibleVerticalLineContact, setIsVisibleVerticalLineContact] =
    useState(false);
  const [isVisibleContactContent, setIsVisibleContactContent] = useState(false);
  const [isVisibleSingleLineCall, setIsVisibleSingleLineCall] = useState(false);
  const [isVisibleSingleLineEmail, setIsVisibleSingleLineEmail] =
    useState(false);

  const visibleSection = (sectionId) => {
    switch (sectionId) {
      case "about-me":
        setIsVisibleAboutMe(true);
        setTimeout(() => {
          setIsVisibleVerticalLineAboutme(true);
          setIsVisibleHeadingAboutme(true);
          setIsAboutmeContent(true);
        }, 1);
        break;

      case "education":
        setIsVisibleEducation(true);
        setTimeout(() => {
          setIsVisibleVerticalLineEducation(true);
          setIsVisibleHeadingEducation(true);
        }, 1);
        break;
      case "educationUlliHeading1":
        setIsVisibleEducationUlliHeading1(true);
        setIsVisibleEducationUlliDescription1(true);
        setIsVisibleEducationUlliDatesCity1(true);
        break;
      case "educationUlliHeading2":
        setIsVisibleEducationUlliHeading2(true);
        setIsVisibleEducationUlliDescription2(true);
        setIsVisibleEducationUlliDatesCity2(true);
        break;
      case "educationUlliHeading3":
        setIsVisibleEducationUlliHeading3(true);
        setIsVisibleEducationUlliDescription3(true);
        setIsVisibleEducationUlliDatesCity3(true);
        break;

      case "skills":
        setIsVisibleSkills(true);
        setTimeout(() => {
          setIsVisibleVerticalLineSkills(true);
          setIsVisibleHeadingSkills(true);
        }, 1);
        break;

      case "softskills-heading":
        setIsVisibleSoftskillsHeading(true);
        setIsVisibleSoftskillsContent(true);
        break;

      case "technologies-heading":
        setIsVisibleTechnologiesHeading(true);
        setIsVisibleTechnologiesContent(true);
        break;

      case "languages-heading":
        setIsVisibleLanguagesHeading(true);
        setIsVisibleLanguagesContent(true);
        break;

      case "projects":
        setIsVisibleProjects(true);
        setTimeout(() => {
          setIsVisibleVerticalLineProjects(true);
          setIsVisibleHeadingProjects(true);
        }, 1);
        break;

      case "website-preview1":
        setIsVisibleWebsitePreview1(true);
        setIsVisibleWebsiteDescription1(true);
        break;

      case "website-preview2":
        setIsVisibleWebsitePreview2(true);
        setIsVisibleWebsiteDescription2(true);
        break;

      case "website-preview3":
        setIsVisibleWebsitePreview3(true);
        setIsVisibleWebsiteDescription3(true);
        break;

      case "contact-me":
        setIsVisibleContact(true);
        setTimeout(() => {
          setIsVisibleVerticalLineContact(true);
          setIsVisibleHeadingContact(true);
          setIsVisibleContactContent(true);
        }, 1);
        break;

      case "single-line-call":
        setIsVisibleSingleLineCall(true);
        setIsVisibleSingleLineEmail(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`infoPage`}>
      <div className={`navbar`}>
        <div className="profile-photo">
          <img src={photo} className="photo" alt=" " />
          <span>Charvit Zalavadiya</span>
        </div>
        <ul>
          <li id="about-me">
            <img src={aboutMeIcon} alt=" "></img>
            <span> About Me </span>
          </li>
          <li id="education">
            <img src={educationIcon} alt=" "></img>
            <span> Education </span>
          </li>
          <li id="skills">
            <img src={skillIcon} alt=" "></img>
            <span> Skills </span>
          </li>
          <li id="projects">
            <img src={projectIcon} alt=" "></img>
            <span> Projects </span>
          </li>
          <li id="contact-me">
            <img src={contactIcon} alt=" "></img>
            <span> Contact </span>
          </li>
        </ul>
      </div>

      <div className="container">
        <div
          className={`about-me ${isVisibleAboutMe ? "in-view-about-me" : ""}`}
          ref={aboutMeRef}
          id="about-me"
        >
          <div
            className={`vertical-line ${
              isVisibleVerticalLineAboutme ? "in-view-vertical-line" : ""
            }`}
            id="vertical-line"
            ref={verticalLineAboutmeRef}
          ></div>
          <div
            className={`heading ${
              isVisibleHeadingAboutme ? "in-view-heading" : ""
            }`}
            id="heading"
            ref={headingAboutmeRef}
          >
            <span>ABOUT ME</span>
          </div>
          <div
            className={`content ${
              isVisibleAboutmeContent ? "in-view-aboutme-content" : ""
            }`}
            ref={aboutmeContentRef}
            id="aboutme-content"
          >
            <p>Hello user ! I'm Charvit Zalavadiya.</p>
            <p>
            Currently I am a 2<sup>nd</sup> year student of <b>B.Tech</b> in ICT (Information and Communication Technology) specialization at Pandit Deendayal Energy University, Gandhinagar.
            </p>
            <p>
            I am a Full Stack Web Developer with a passion for creating innovative and interactive web applications. For the Frontend development I uses <b>React JS</b>, <b>HTML</b>, <b>CSS</b>. For Backend development I uses <b>Node JS</b> and <b>ExpressJS</b>. To maintain databases I use <b>MongoDB</b> and still learning other database systems like MySQL, Firebase etc.
            </p>
            <p>
              I also have passion in Wed Designing field and for that I'm exploring <b>Figma</b> and <b>Webflow</b> etc.
            </p>
            <p>
              Communication Languages : <b>Gujarati</b> | <b>Hindi</b> | <b>English</b>
            </p>
            <p>
              <button onClick={resume}>
                <span>RESUME</span>
                <span>Take a Look</span>
              </button>
            </p>
          </div>
        </div>

        {/* education */}

        <div
          className={`education ${
            isVisibleEducation ? "in-view-education" : ""
          }`}
          ref={educationRef}
          id="education"
        >
          <div
            className={`vertical-line ${
              isVisibleVerticalLineEducation ? "in-view-vertical-line" : ""
            }`}
            id="vertical-line"
            ref={verticalLineEducationRef}
          ></div>
          <div
            className={`heading ${
              isVisibleHeadingEducation ? "in-view-heading" : ""
            }`}
            id="heading"
            ref={headingEducationRef}
          >
            <span>EDUCATION</span>
          </div>
          <div className="content">
            <ul>
              <li>
                <p
                  className={`li-heading ${
                    isVisibleEducationUlliHeading1
                      ? "in-view-education-ulli-heading-1"
                      : ""
                  }`}
                  ref={educationUlliHeading1Ref}
                  id="educationUlliHeading1"
                >
                  B.Tech
                </p>
                <p
                  className={`li-description ${
                    isVisibleEducationUlliDescription1
                      ? "in-view-education-ulli-description-1"
                      : ""
                  }`}
                  id="educationUlliDescription1"
                  ref={educationUlliDescription1Ref}
                >
                  Currently I'm pursuing B.Tech Degree in ICT domain at Pandit
                  Deendayal Energy University.
                </p>
                <span
                  className={`li-dates ${
                    isVisibleEducationUlliDatesCity1
                      ? "in-view-education-ulli-dates-city-1"
                      : ""
                  }`}
                  ref={educationUlliDatesCity1Ref}
                  id="educationUlliDatesCity"
                >
                  October, 2022 - Present
                </span>
                <span
                  className={`li-dates ${
                    isVisibleEducationUlliDatesCity1
                      ? "in-view-education-ulli-dates-city-1"
                      : ""
                  }`}
                  ref={educationUlliDatesCity1Ref}
                  id="educationUlliDatesCity1"
                >
                  <i>Gandhinagar</i>
                </span>
              </li>
              <li>
                <p
                  className={`li-heading ${
                    isVisibleEducationUlliHeading2
                      ? "in-view-education-ulli-heading-2"
                      : ""
                  }`}
                  ref={educationUlliHeading2Ref}
                  id="educationUlliHeading2"
                >
                  H.S.C.
                </p>
                <p
                  className={`li-description ${
                    isVisibleEducationUlliDescription2
                      ? "in-view-education-ulli-description-2"
                      : ""
                  }`}
                  id="educationUlliDescription2"
                  ref={educationUlliDescription2Ref}
                >
                  Completed 12th grade with 91% in PCM from AB Higher Secondary
                  School.
                </p>
                <span
                  className={`li-dates ${
                    isVisibleEducationUlliDatesCity2
                      ? "in-view-education-ulli-dates-city-2"
                      : ""
                  }`}
                  ref={educationUlliDatesCity2Ref}
                  id="educationUlliDatesCity2"
                >
                  June, 2021 - April, 2022
                </span>
                <span
                  className={`li-dates ${
                    isVisibleEducationUlliDatesCity2
                      ? "in-view-education-ulli-dates-city-2"
                      : ""
                  }`}
                  ref={educationUlliDatesCity2Ref}
                  id="educationUlliDatesCity2"
                >
                  <i>Navsari</i>
                </span>
              </li>
              <li>
                <p
                  className={`li-heading ${
                    isVisibleEducationUlliHeading3
                      ? "in-view-education-ulli-heading-3"
                      : ""
                  }`}
                  ref={educationUlliHeading3Ref}
                  id="educationUlliHeading3"
                >
                  S.S.C.
                </p>
                <p
                  className={`li-description ${
                    isVisibleEducationUlliDescription3
                      ? "in-view-education-ulli-description-3"
                      : ""
                  }`}
                  id="educationUlliDescription3"
                  ref={educationUlliDescription3Ref}
                >
                  Completed 10th grade with 86% from Sett R.J.J. High School.
                </p>
                <span
                  className={`li-dates ${
                    isVisibleEducationUlliDatesCity3
                      ? "in-view-education-ulli-dates-city-3"
                      : ""
                  }`}
                  ref={educationUlliDatesCity3Ref}
                  id="educationUlliDatesCity3"
                >
                  June, 2019 - March, 2020
                </span>
                <span
                  className={`li-dates ${
                    isVisibleEducationUlliDatesCity3
                      ? "in-view-education-ulli-dates-city-3"
                      : ""
                  }`}
                  ref={educationUlliDatesCity3Ref}
                  id="educationUlliDatesCity3"
                >
                  <i>Navsari</i>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* skills */}

        <div
          className={`skills ${isVisibleSkills ? "in-view-skills" : ""}`}
          ref={skillsRef}
          id="skills"
        >
          <div
            className={`vertical-line ${
              isVisibleVerticalLineSkills ? "in-view-vertical-line" : ""
            }`}
            id="vertical-line"
            ref={verticalLineSkillsRef}
          ></div>
          <div
            className={`heading ${
              isVisibleHeadingSkills ? "in-view-heading" : ""
            }`}
            id="heading"
            ref={headingSkillsRef}
          >
            <span>SKILLS</span>
          </div>
          <div className="content">
            {/* softSkills and technologies */}

            <div className="softSkills-technologies">
              <div className="softSkills">
                <div
                  className={`softSkills-heading ${
                    isVisibleSoftskillsHeading
                      ? "in-view-softskills-heading"
                      : ""
                  }`}
                  ref={softskillsHeadingRef}
                  id="softskills-heading"
                >
                  Skills
                </div>
                <div
                  className={`softSkills-content ${
                    isVisibleSoftskillsContent
                      ? "in-view-softskills-content"
                      : ""
                  }`}
                  ref={softskillsContentRef}
                  id="softskills-content"
                >
                  <div>
                    <span>Fullstack</span>
                    <img src={fullstackIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>UI/UX</span>
                    <img src={uiuxIcon} alt=" "></img>
                  </div>
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
                </div>
              </div>

              <div className="technologies">
                <div
                  className={`softSkills-heading ${
                    isVisibleTechnologiesHeading
                      ? "in-view-technologies-heading"
                      : ""
                  }`}
                  ref={technologiesHeadingRef}
                  id="technologies-heading"
                >
                  Technologies
                </div>
                <div
                  className={`technologies-content ${
                    isVisibleTechnologiesContent
                      ? "in-view-technologies-content"
                      : ""
                  }`}
                  ref={technologiesContentRef}
                  id="technologies-content"
                >
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
                  <div>
                    <img src={postmanapiIcon} alt=" "></img>
                    <span>Postman API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* languages */}

            <div className="languages">
              <div
                className={`softSkills-heading ${
                  isVisibleLanguagesHeading ? "in-view-languages-heading" : ""
                }`}
                ref={languagesHeadingRef}
                id="languages-heading"
              >
                Languages
              </div>
              <div className="languages-content">
                <div
                  className={`languages-content-line-1 ${
                    isVisibleLanguagesContent
                      ? "in-view-languages-content-1"
                      : ""
                  }`}
                  ref={languagesContentRef}
                  id="languages-content"
                >
                  <div>
                    <span>Node JS</span>
                    <img src={nodeIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>MongoDB</span>
                    <img src={mongoIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>HTML</span>
                    <img src={htmlIcon} alt=" "></img>
                  </div>
                  <div>
                    <span>CSS</span>
                    <img src={cssIcon} alt=" "></img>
                  </div>
                </div>
                <div
                  className={`languages-content-line-2 ${
                    isVisibleLanguagesContent
                      ? "in-view-languages-content-2"
                      : ""
                  }`}
                  ref={languagesContentRef}
                  id="languages-content"
                >
                  <div>
                    <img src={reactIcon} alt=" "></img>
                    <span>React JS</span>
                  </div>
                  <div>
                    <img src={expressIcon} alt=" "></img>
                    <span>Express JS</span>
                  </div>
                  <div>
                    <img src={jsIcon} alt=" "></img>
                    <span>JavaScript</span>
                  </div>
                  <div>
                    <img src={tailwindIcon} alt=" "></img>
                    <span>Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* projects */}

        <div
          className={`projects ${isVisibleProjects ? "in-view-projects" : ""}`}
          ref={projectsRef}
          id="projects"
        >
          <div
            className={`vertical-line ${
              isVisibleVerticalLineProjects ? "in-view-vertical-line" : ""
            }`}
            id="vertical-line"
            ref={verticalLineProjectsRef}
          ></div>
          <div
            className={`heading ${
              isVisibleHeadingProjects ? "in-view-heading" : ""
            }`}
            id="heading"
            ref={headingProjectsRef}
          >
            <span>PROJECTS</span>
          </div>
          <div className="content">
            <div className="musify">
              <span
                className={`website-preview ${
                  isVisibleWebsitePreview3 ? "in-view-website-preview-3" : ""
                }`}
                ref={websitePreview3Ref}
                id="website-preview3"
              >
                <a href="https://charvitzalavadiya.github.io/SolarSystem/" target="_blanck">
                <img src={musify}></img>
                </a>
              </span>
              <span
                className={`website-description ${
                  isVisibleWebsiteDescription3
                    ? "in-view-website-description-3"
                    : ""
                }`}
                ref={websiteDescription3Ref}
                id="website-desription1"
              >
                <span className="website-description-heading">Musify</span>
                <span className="website-description-description">
                  I have created this webapp which is connected to your spotify account, and it shows your current data like recently played songs, following artists etc. For that I have used NodeJS, ExpressJS, EJS, and Spotify Api
                </span>
              </span>
            </div>
            <div className="orbital">
              <span
                className={`website-preview ${
                  isVisibleWebsitePreview1 ? "in-view-website-preview-1" : ""
                }`}
                ref={websitePreview1Ref}
                id="website-preview1"
              >
                <a href="https://charvitzalavadiya.github.io/orbital/" target="_blanck">
                <img src={orbital}></img>
                </a>
              </span>
              <span
                className={`website-description ${
                  isVisibleWebsiteDescription1
                    ? "in-view-website-description-1"
                    : ""
                }`}
                ref={websiteDescription1Ref}
                id="website-desription1"
              >
                <span className="website-description-heading">Orbital</span>
                <span className="website-description-description">
                  It is a website that provides information about NASA's
                  marvellous space mission and I created this website in NASA's
                  Global Space Apps Challenge. In this project i have used HTML and CSS as hackathon was 48 hours and I have to present my website.
                </span>
              </span>
            </div>
            <div className="yt-clone">
              <span
                className={`website-preview ${
                  isVisibleWebsitePreview2 ? "in-view-website-preview-2" : ""
                }`}
                ref={websitePreview2Ref}
                id="website-preview2"
              >
                <a href="https://charvitzalavadiya.github.io/ytclone/" target="_blanck">
                <img src={ytclone}></img>
                </a>
              </span>
              <span
                className={`website-description ${
                  isVisibleWebsiteDescription2
                    ? "in-view-website-description-2"
                    : ""
                }`}
                ref={websiteDescription2Ref}
                id="website-desription2"
              >
                <span className="website-description-heading">
                  YouTube Clone
                </span>
                <span className="website-description-description">
                  This is my very first project.
                  I have developed this website to enhance my Frontend using
                  HTML, Tailwind CSS and Vanilla CSS. This is fully responsive website.
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* contact me */}

        <div
          className={`contact-me ${isVisibleContact ? "in-view-contact" : ""}`}
          ref={contactRef}
          id="contact-me"
        >
          <div
            className={`vertical-line ${
              isVisibleVerticalLineContact ? "in-view-vertical-line" : ""
            }`}
            id="vertical-line"
            ref={verticalLineContactRef}
          ></div>
          <div
            className={`heading ${
              isVisibleHeadingContact ? "in-view-heading" : ""
            }`}
            id="heading"
            ref={headingContactRef}
          >
            <span>Connect Me</span>
          </div>
          <div
            className={`content ${
              isVisibleContactContent ? "in-view-contact-content" : ""
            }`}
            ref={contactContentRef}
            id="contact-content"
          >
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
                      href="https://github.com/CharvitZalavadiya"
                      target="_blank"
                    >
                      <img src={gitHubContactIcon} alt=" "></img>
                    </a>
                  </span>
                  <a
                    href="https://github.com/CharvitZalavadiya"
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
              <span
                className={`single-line-call ${
                  isVisibleSingleLineCall ? "in-view-single-line-call" : ""
                }`}
                ref={contactSingleLineCallRef}
                id="single-line-call"
              >
                <img src={phoneIcon} alt=" "></img>
                +91 8849564484
              </span>
              <span
                className={`single-line-email ${
                  isVisibleSingleLineEmail ? "in-view-single-line-Email" : ""
                }`}
                ref={contactSingleLineEmailRef}
                id="single-line-Email"
              >
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
