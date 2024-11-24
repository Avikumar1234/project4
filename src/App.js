// import logo from './logo.svg';
import  { useState } from 'react';
import './App.css';
// import About from './COMPONENTS/About';
import Navbar from './COMPONENTS/Navbar';
import TextForm from './COMPONENTS/TextForm';
import Alert from './COMPONENTS/Alert';

function App() {
  const [mode,setMode]=useState("light");

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
  }
 const toggleMode=()=>{
      if(mode ==="light"){
        setMode("dark")
        document.body.style.backgroundColor="gray";
        showAlert("dark mode has been enbled ","success")
      }
      else{
        setMode("light")
        document.body.style.backgroundColor="white";
        showAlert("light mode has been enbled ","success")
      }
  }
  return (
  <>
  
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
 <div className="container">
<TextForm heading="Enter the Text to analyze" heading2="Enter text here"/>
</div> 
{/* <hr />
<h3 className="h3">Dark mode web</h3>
<About/> */}
</>
  );
}

export default App;
