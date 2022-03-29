import { Route , Routes } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import ProfileCourses from "../Profile/ProfileCourse";

const AllRoutes = () =>{
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={"Home"} />
                <Route path="/profile/me/courses" element={<ProfileCourses/>} />
                
            </Routes>       
        </>
    )
}

export default AllRoutes;