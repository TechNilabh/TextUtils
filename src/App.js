// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  // All component below in return() is called JSX. Advantage of JSX is that we can 
  // write JS inside of it 
  const[mode,setMode] = useState('light'); //Whether dark mode is enabled
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000);
  }
  const toggleMode = ()=>{
      if(mode === 'light')
      { 
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been activated!','success')
      document.title='TextUtils-DarkMode'
      // Below can be used to flash and change the title of the app after an interval 
      // setInterval(()=>{
      //   document.title = "CALL 911";
      // },2000);
      // setInterval(()=>{
      //   document.title = "YOU'RE GOING TO BE ROBBED";
      // },1500);
    }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been activated!','success')
        document.title='TextUtils-LightMode'}
    }  

  return (
    <>
    {/* Below is declaration of props */}
    <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route
               path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}/>}
            ></Route>
          </Routes>
          <Routes>
            <Route  path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
</>
  );
}

export default App;
