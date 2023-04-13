import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/textform";
import Alert from "./components/Alerts";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const[alert ,setalert]=useState(null);
  const showalert =(message,type)=>
  {
      setalert
      ({
      mssg:message,
      tpe : type
     })
     setTimeout(()=>
     {
        setalert(null)
     },1000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor='rgb(1, 15 ,25)';
      document.body.style.color='white';
      showalert("Dark mode has been enabled","success");
    } else {
      setmode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert("Light mode has been enabled","success");
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="Textils"
        Abouttext="AboutMe"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <Textform heading="Enter your text here to analyze" showalert={showalert} />
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
        </Router>
       */}

    </>
  );
}

export default App;
