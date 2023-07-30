import React, { useEffect, useState } from 'react'
import styles from "./body.module.css";
import Basic from '../Basic/Basic';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';

const Body = (Props) => {
  const editorHeadings = ["Basic", "Experience", "Education", "Skills"]
  const [activeHeading,setActiveHeading] = useState("Basic");
  const {resumeData,setResumeData} = Props; 

  return (
    <div className={styles.body_container}>
        <h1>Resume Builder</h1>
        <div className={styles.body_resume_build_main_container}>
           <div className={styles.body_resume_build_heading}>
             {editorHeadings.map((el,i)=>{
                return ( 
                <div 
                className={el===activeHeading ? styles.body_resume_heading : styles.body_resume_heading_all} 
                key={i}
                onClick={()=>{setActiveHeading(el)}}
                >
                   {el}
                </div>
                )
             })}
           </div>
           <div className={styles.body_resume_build_body}>
              {activeHeading==="Basic" ? <Basic data={resumeData.Basic} resumeData={resumeData} setResumeData={setResumeData} /> : 
              activeHeading==="Experience" ? <Experience data={[...resumeData.Experience]} resumeData={resumeData} setResumeData={setResumeData} /> :
              activeHeading==="Education" ? <Education data={[...resumeData.Education]} resumeData={resumeData} setResumeData={setResumeData} /> : <Skills data={resumeData.Skills} resumeData={resumeData} setResumeData={setResumeData} /> }
           </div>
        </div>
    </div>
  )
}

export default Body;