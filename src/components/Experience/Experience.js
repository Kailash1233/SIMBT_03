import React, { useState } from 'react'
import styles from "./experience.module.css";

const Experience = (Props) => {
  let {data,resumeData,setResumeData} = Props; 
  const [idExp,setIdExp] = useState(1);
  const [editHappen,setEditHappen] = useState(false);
  const [allData,setAllData] = useState({
    id : 0,
    position : "",
    company : "",
    startDate : "",
    endDate : "",
    workSummary : ""
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
    setResumeData({...resumeData,Experience:[...data,allData]});
    setAllData({
      id : idExp,
      position : "",
      company : "",
      startDate : "",
      endDate : "",
      workSummary : ""
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
     setResumeData({...resumeData,Experience:[...filtArr]})
  }

  return (
    <div className={styles.basic_main_container}>
     <div className={styles.Experience_heading} >Projects</div>
     <div className={styles.Experience_already_present_main_div}>{data.length>0 && data?.map((el,i)=>{
       return (
        <div className={styles.Experience_already_present_data} key={i}>
           <div>
             <div>Position : {el.position}</div>
             <div>Start date : {el.startDate}</div>
           </div>
           <div>
             <div>Company : {el.company}</div>
             <div>End Date : {el.endDate}</div>
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
        <label for={"position"} >Project Name</label>
        <input id='position' type='text' placeholder='Enter your Project Name' value={allData.position} onChange={(e)=>{setAllData({...allData,position:e.target.value})}} required/>
       </div>
       <div>
        <label for={"company"} >Technologies Used</label>
        <input id='company' type='text' placeholder='Name the Technologies used' value={allData.company} onChange={(e)=>{setAllData({...allData,company:e.target.value})}} required/>
       </div>
       <div>
        <label for={"start"} >Start Date</label>
        <input id='start' type='date' placeholder='Enter start date here' value={allData.startDate} onChange={(e)=>{setAllData({...allData,startDate:e.target.value})}} required/>
       </div>
       <div>
        <label for={"end"} >End Date</label>
        <input id='end' type='date' placeholder='Enter end date here' value={allData.endDate} onChange={(e)=>{setAllData({...allData,endDate:e.target.value})}} required/>
       </div>
       <div>
        <label for={"work"} >Long Description</label>
        <textarea rows={10} id='work' type='text' placeholder='Write about your Project' value={allData.workSummary} onChange={(e)=>{setAllData({...allData,workSummary:e.target.value})}} required />
       </div>
       <input id={styles.submitButton} type='submit' value={"Save"} />
     </form>
    </div>
  )
}

export default Experience;