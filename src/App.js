import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Resume from './components/Resume/Resume';
import ReactToPrint from 'react-to-print';

function App() {
  const resumeRef = useRef();
  const [resumeData, setResumeData] = useState({
    Basic: {
      address: "",
      email: "",
      jobtitle: "",
      mobile: "",
      name: "",
      profile: ""
    },
    Experience: [],
    Education : [],
    Skills: []
  });

  return (
    <div className="App">
      <Header />
      <Body resumeData={resumeData} setResumeData={setResumeData} />
      <Resume ref={resumeRef} resumeData={resumeData} />
      <ReactToPrint
          trigger={() => {
            
            return <button className='downloadButton'>Download</button>;
          }}
          content={() => resumeRef.current}
        />
      
    </div>
  );
}

export default App;
