import React, { useState } from 'react'
import styles from "./education.module.css";

const Education = (Props) => {
  let { data, resumeData, setResumeData } = Props;
  const [idEdu, setidEdu] = useState(1);
  const [editHappen, setEditHappen] = useState(false);
  const [allData, setAllData] = useState({
    id: 0,
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: ""
  });


  const getAllBasicData = (e) => {
    e.preventDefault();
    if (editHappen) {
      data = data.filter(el => (
        el.id !== allData.id
      ));
      setEditHappen(!editHappen);
    } else {
      setidEdu((prev) => prev + 1);
    }
    setResumeData({ ...resumeData, Education: [...data, allData] });
    setAllData({
      id: idEdu,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: ""
    });
  }

  const editEducation = (el) => {
    setAllData(el);
    setEditHappen(!editHappen);
  }

  const deleteEducation = (id) => {
    let filtArr = data.filter(el => (
      el.id !== id
    ))
    setResumeData({ ...resumeData, Education: [...filtArr] })
  }

  return (
    <div className={styles.basic_main_container}>
      <div className={styles.Experience_heading} >Education</div>
      <div className={styles.Experience_already_present_main_div}>{data.length > 0 && data?.map((el, i) => {
        return (
          <div className={styles.Experience_already_present_data} key={i}>
            <div>
              <div>School Name : {el.school}</div>
              <div>Start date : {el.startDate}</div>
            </div>
            <div>
              <div>Degree : {el.degree}</div>
              <div>End Date : {el.endDate}</div>
            </div>
            <div>
              <i onClick={() => editEducation(el)} className="uil uil-edit"></i>
              <i onClick={() => deleteEducation(el.id)} className="uil uil-times"></i>
            </div>
          </div>
        )
      })}</div>
      <form onSubmit={getAllBasicData}>
        <div>
          <label for={"school"} >School Name</label>
          <input id='school' type='text'  placeholder='Enter school name here' value={allData.school} onChange={(e) => { setAllData({ ...allData, school: e.target.value }) }} required />
        </div>
        <div>
          <label for={"degree"} >Degree</label>
          <input id='degree' type='text' placeholder='Enter degree name here' value={allData.degree} onChange={(e) => { setAllData({ ...allData, degree: e.target.value }) }} required />
        </div>
        <div>
          <label for={"start"} >Start Date</label>
          <input id='start' type='date' placeholder='Enter start date here' value={allData.startDate} onChange={(e) => { setAllData({ ...allData, startDate: e.target.value }) }} required />
        </div>
        <div>
          <label for={"end"} >End Date</label>
          <input id='end' type='date' placeholder='Enter end date here' value={allData.endDate} onChange={(e) => { setAllData({ ...allData, endDate: e.target.value }) }} required />
        </div>
        <div>
          <label for={"description"} >Description</label>
          <textarea rows={10} id='description' type='text' placeholder='Write about Work' value={allData.description} onChange={(e) => { setAllData({ ...allData, description: e.target.value }) }} required />
        </div>
        <input id={styles.submitButton} type='submit' value={"Save"} />
        </form>
    </div>
  )
}

export default Education;