import { useContext, useEffect } from "react";
import AuthContext from "../../Context/authContext/AuthContext";
import StudentHome from "./StudentHome";
import TeacherHome from "./TeacherHome";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const authCon = useContext(AuthContext);
  const { accountType, user, isAuthenticated, loadUser } = authCon;

  const navigate = useNavigate();

  useEffect(() => {
    loadUser();

    // setTimeout(() => {
    //   if (!isAuthenticated) {
    //     navigate("/signin");
    //     return;
    //   }
    // }, 4000);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* {user && accountType === "Teacher" ? <TeacherHome /> : <StudentHome />} */}
        {user?.accountType === "Teacher" ? <TeacherHome /> : <StudentHome />}
        {/* } */}
      </div>
    </>
  );
};

export default Home;
