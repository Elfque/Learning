import { useContext } from "react";
import CourseContext from "../../Context/courseContext/CourseContext";
import Navbar from "../layout/Navbar";
import JoinCourse from "../layout/JoinCourse";
import CourseList from "../layout/CourseList";

const StudentHome = () => {
  const courseCon = useContext(CourseContext);
  const { courses } = courseCon;

  return (
    <div>
      <Navbar />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {courses.map((course) => (
          <CourseList key={course.id} course={course} />
        ))}
      </div>
      <JoinCourse />
    </div>
  );
};

export default StudentHome;
