import React, { forwardRef } from 'react'
import styles from "./resume.module.css";

const Resume = forwardRef((Props,ref) => {
    const { resumeData } = Props;

    return (
        <div ref={ref} className={styles.Resume_container}>
            <div className={styles.Resume_Personal_detail_main_div}>
                <div className={styles.Resume_Personal_detail_name_div}>
                    <h1>{resumeData.Basic.name ? resumeData.Basic.name : null}</h1>
                    <h1>{resumeData.Basic.jobtitle ? resumeData.Basic.jobtitle : null}</h1>
                </div>
                <div className={styles.Resume_Personal_detail_address_div}>
                    <p><i className="uil uil-phone"></i>{resumeData.Basic.mobile ? resumeData.Basic.mobile : null}</p>
                    <p><i className="uil uil-envelope"></i> {resumeData.Basic.email ? resumeData.Basic.email : null}</p>
                    <p><i className="uil uil-map-marker"></i> {resumeData.Basic.address ? resumeData.Basic.address : null}</p>
                </div>
            </div>
            <div className={styles.horizontal_line} ></div>
            <div className={styles.Resume_Personal_detail_profile}>{resumeData.Basic.profile ? resumeData.Basic.profile : null}</div>
            <br />
                <div className={styles.Resume_Personal_detail_linkedin}>
                    <p><i className="uil uil-linkedin"></i>{resumeData.Basic.linkedin ? resumeData.Basic.linkedin : null}</p></div>
                <div className={styles.Resume_Personal_detail_github}>
                    <p><i className="uil uil-github"></i>{resumeData.Basic.github ? resumeData.Basic.github : null}</p></div>
            <div className={styles.horizontal_line} ></div>
            <div className={styles.Resume_second_main_div}>
                <div className={styles.Resume_education_skill_main_div}>
                    <div>
                        <div className={styles.Resume_second_div_heading}>Education</div>
                        <div className={styles.horizontal_line_second} ></div>
                        {resumeData.Education.length>0 ? resumeData.Education?.map((el,i)=>{
                            return (
                                <div className={styles.Resume_Education_main_div} key={i}>
                                   <p>{el.school}</p>
                                   <p>{el.degree}</p>
                                   <p>{el.startDate} to {el.endDate}</p>
                                   <p>{el.description ? el.description : null}</p>
                                </div>
                            )
                        }) : null}
                    </div>
                    <div>
                        <div className={styles.Resume_second_div_heading}>Skills</div>
                        <div className={styles.horizontal_line_second} ></div>
                        {resumeData.Skills.length>0 ? resumeData.Skills?.map((el,i)=>{
                            return (
                                <div className={styles.Resume_Skills_main_div} key={i}>
                                    <p>{el.skill}</p>
                                    <p>{el.years} ⭐</p>
                                </div>
                            )
                        }) : null}
                    </div>
                </div>
                <div className={styles.horizontal_line} ></div>
                <div className={styles.Resume_experience_main_div}>
                    <div className={styles.Resume_second_div_heading}>Projects</div>
                    <div className={styles.horizontal_line_second} ></div>
                    {resumeData.Experience.length>0 ? resumeData.Experience?.map((el,i)=>{
                            return (
                                <div className={styles.Resume_Experience_main_div} key={i}>
                                   <p>{el.position}</p>
                                   <p>{el.company}</p>
                                   <p>{el.startDate} to {el.endDate}</p>
                                   <p>{el.workSummary ? el.workSummary : null}</p>
                                </div>
                            )
                        }) : null}
                </div>
            </div>
        </div>
    )
});

export default Resume;