import { useContext } from "react";
import CourseContext from "../../Context/courseContext/CourseContext";
import Navbar from "./Navbar";

const JoinCourse = ({}) => {
  const courseCon = useContext(CourseContext);
  const { joinCourse } = courseCon;

  const [courseId, setCourseId] = "";

  const join = (e) => {
    e.preventDefault();
    if (courseId.trim() === "") {
      alert("Id cannot be Empty");
      return;
    }

    setCourseId(courseId.trim());
    joinCourse();
  };

  return (
    <div className="w-4/5 mx-auto">
      <Navbar />
      <div className="flex justify-center mt-6 ">
        <form action="" className="border border-gray-400 p-8 w-80">
          <div className="font-semibold mb-2">Enter Course Id:</div>
          <input
            type="text"
            className="inp min-w-full"
            onChange={(e) => setCourseId(e.target.value)}
          />
          <div className="text-center mt-6">
            <button onClick={join} className="bg-bluish text-white rounded-md">
              Join Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinCourse;
