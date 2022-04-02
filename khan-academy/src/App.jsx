<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./Routes/Routes";
import { Profile } from "./Pages/Profile";
import { Left } from "./Components/Left";
import { Courses } from "./Pages/Courses";
=======
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar/navbar'
>>>>>>> 65635a689846338073151c9ef30e1496d7570bbe

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Left /> */}
      <Courses />

      {/* <Profile /> */}
      {/* <AllRoutes /> */}
=======
      <Navbar/>
>>>>>>> 65635a689846338073151c9ef30e1496d7570bbe
    </div>
  );
}

export default App;
