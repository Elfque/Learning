import Navbar from "../layout/Navbar";
import { useContext, useState } from "react";
import CourseContext from "../../Context/courseContext/CourseContext";
import AddCourse from "../layout/AddCourse";
import Overlay from "../layout/Overlay";
import CourseList from "../layout/CourseList";

const TeacherHome = () => {
  const [addCourse, setAddCourse] = useState(false);

  const courseCon = useContext(CourseContext);
  const { courses } = courseCon;
  return (
    <div>
      <Navbar opener={() => setAddCourse(true)} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {courses.map((course) => (
          <CourseList key={course.id} course={course} />
        ))}
      </div>

      <Overlay closer={() => setAddCourse(false)} open={addCourse} />
      <AddCourse close={() => setAddCourse(false)} opener={addCourse} />
    </div>
  );
};

export default TeacherHome;
