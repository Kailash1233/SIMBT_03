import React from 'react'
import styles from "./header.module.css";
import resumebuilding from "../../assets/resumecreation.png";

const Header = () => {
  return (
    <div className={styles.Header_main_container}>
       <div className={styles.Header_starting_content}>
       Your dream <span>Resume</span> absolutely <span>Free</span> 
       </div>
       <img src={resumebuilding} alt='resume building image' />
    </div>
  )
}

export default Header;