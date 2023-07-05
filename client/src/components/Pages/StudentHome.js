import { useContext, useState } from "react";
import CourseContext from "../../Context/courseContext/CourseContext";
import Navbar from "../layout/Navbar";
import CourseList from "../layout/CourseList";
import Overlay from "../layout/Overlay";
import { FaTimes } from "react-icons/fa";

const StudentHome = () => {
  const [joining, setJoining] = useState(false);
  const courseCon = useContext(CourseContext);
  const { courses } = courseCon;

  return (
    <div>
      <Navbar opener={() => setJoining(true)} />
      <div className="grid gap-4 mt-6 grid-cols-courseGrid">
        {courses.map((course) => (
          <CourseList key={course.id} course={course} />
        ))}
      </div>
      {joining && (
        <form
          action=""
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[90%] max-w-sm rounded-lg z-20"
        >
          <FaTimes
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setJoining(false)}
          />
          <div className="text-xl text-center mb-4">Join A Course</div>
          <div>Input your Course Id</div>
          <input
            type="text"
            className="p-2 mt-2 border border-blue-500 w-full"
          />
          <div className="text-center flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 py-1 px-6 rounded-lg flex justify-center gap-3 text-white font-semibold"
            >
              Join
            </button>
          </div>
        </form>
      )}
      {joining && <Overlay closer={() => setJoining(false)} />}
    </div>
  );
};

export default StudentHome;
// grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
