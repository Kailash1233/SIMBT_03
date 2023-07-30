import React, { useState, useSyncExternalStore } from 'react'
import styles from "./skills.module.css";

const Skills = (Props) => {
  let {data,resumeData,setResumeData} = Props; 
  const [idExp,setIdExp] = useState(1);
  const [editHappen,setEditHappen] = useState(false);
  const [allData,setAllData] = useState({
    id : 0,
    skill : "",
    years : "",
  });

  
  const getAllBasicData = (e) => {
    e.preventDefault();
    if(editHappen){
      data = data.filter(el=>(
        el.id !== allData.id
      ));
      setEditHappen(!editHappen);
    }else{
      setIdExp((prev)=>prev+1);
    }
    setResumeData({...resumeData,Skills:[...data,allData]});
    setAllData({
      id : idExp,
      skill : "",
      years : "",
    });
  }

  const editExperience  = (el) => {
    setAllData(el);
    setEditHappen(!editHappen);
  }

  const deleteExperience = (id) => {
     let filtArr = data.filter(el=>(
      el.id !== id
     ))
     setResumeData({...resumeData,Skills:[...filtArr]})
  }

  return (
    <div className={styles.basic_main_container}>
     <div className={styles.Experience_heading} >Skills</div>
     <div className={styles.Experience_already_present_main_div}>{data.length>0 && data?.map((el,i)=>{
       return (
        <div className={styles.Experience_already_present_data} key={i}>
           <div>
             <div>Skill : {el.skill}</div>
           </div>
           <div>
             <div>Proficiency out of 10 : {el.years}</div>
           </div>
           <div>
            <i onClick={()=>editExperience(el)} className="uil uil-edit"></i>
            <i onClick={()=>deleteExperience(el.id)} className="uil uil-times"></i>
            </div>
        </div>
       ) 
     })}</div>
     <form onSubmit={getAllBasicData}>
       <div>
        <label for={"skill"} >Skill</label>
        <input id='skill' type='text' placeholder='Enter your Skill here' value={allData.skill} onChange={(e)=>{setAllData({...allData,skill:e.target.value})}} required/>
       </div>
       <div>
       <label htmlFor="years">Rate out of 10</label>
        <input id="years" type="number" placeholder="Level of Proficiency" value={allData.years} onChange={(e) => {const value = Math.min(e.target.value, 10); 
          setAllData({ ...allData, years: value });
        }}
          required max="10" />
       </div>
       <input id={styles.submitButton} type='submit' value={"Save"} />
     </form>
    </div>
  )
}

export default Skills;