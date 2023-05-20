import { useContext } from "react";
import CourseContext from "../../Context/courseContext/CourseContext";

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
    <div className="flex justify-center">
      <form action="">
        <div>Enter Course Id</div>
        <input
          type="text"
          className="inp"
          onChange={(e) => setCourseId(e.target.value)}
        />
        <button onClick={join} className="bg-gray-500">
          Join Course
        </button>
      </form>
    </div>
  );
};

export default JoinCourse;
