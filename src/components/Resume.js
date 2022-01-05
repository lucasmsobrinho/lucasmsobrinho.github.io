import React from 'react';
import './Resume.css';

const education = [{
        name:"IME - USP",
        url: "https://www.ime.usp.br/bcc/",
        role:"Computer Science Bachelor",
        period:"2018 - now",
        description:"Emphasis in Data Science and Artificial Intelligence."
    }
];
const work = [
    {
        name:"Grão Certo",
        url: "https://graocerto.com.br/",
        role:"Software Engineer",
        period:"2019 - 2021",
        description:"I developed a Machine Learning product for evaluate the quality of \
        Soy Beans via Image Processing. Including an Progressive Web App for capturing the \
        image via mobile camera, evaluating image quality and offline model prediction \
        execution using opencvjs and tensorflowjs. I also worked developing the machine \
        learning models used for this solution, and developed an web interface for manual \
        classification using reactjs and django."
    }, {
        name:"MVISIA",
        url: "https://mvisia.com.br/",
        role:"Software Engineer Intern",
        period:"2018 - 2019",
        description:"I applied computer vision algorithms for business/industry problems,\
            helped building some software features of a proprietary smart camera build at \
            MVISIA. I also worked on mobile computer vision application, using OpenCV and \
            C++ compiling for arm toolchain."
    }
];


const Resume = () => { return(
    <section id="resume">
        <ResumeSection sectionName="EDUCATION" items={education}/>
        <ResumeSection sectionName="WORK" items={work}/>
    </section>
)}

const ResumeSection = (props) => {
    const entries = props.items.map(entry => {
        return <ResumeEntry key={entry.name} item={entry}/>
    });
    return(
    <div className="resume-section">
        <div className="resume-id-bar">
            <div className="resume-id-bar-title">{props.sectionName}</div>
        </div>
        <div className="resume-entries">{entries}</div>
    </div>
    )
}

const ResumeEntry = (props) => { return(
    <div className="resume-entry">

        <a href={props.item.url} target="_blank" rel="noreferrer" style={{"text-decoration": "none"}}>
            <div className="resume-entry-name">
                    {props.item.name}
            </div>
        </a>
        <div className="resume-entry-role">{props.item.role} - {props.item.period}</div>
        <div className="resume-entry-description">{props.item.description}</div>
    </div>
)}

export default Resume