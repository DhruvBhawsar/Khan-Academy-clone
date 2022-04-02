import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./Routes/Routes";
import { Profile } from "./Pages/Profile";
import { Left } from "./Components/Left";
import { Courses } from "./Pages/Courses";

function App() {
  return (
    <div className="App">
      {/* <Left /> */}
      <Courses />

      {/* <Profile /> */}
      {/* <AllRoutes /> */}
    </div>
  );
}

export default App;
