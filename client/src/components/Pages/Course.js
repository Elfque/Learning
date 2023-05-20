import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContext from "../../Context/courseContext/CourseContext";
import Navbar from "../layout/Navbar";
import Message from "../layout/Message";
import { FaEdit } from "react-icons/fa";

const Course = () => {
  const courseCon = useContext(CourseContext);
  const { getCourse, course } = courseCon;

  const { id } = useParams();

  useEffect(() => {
    getCourse(id);
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      {course ? (
        <div className="mt-4 mb-3">
          <div className="flex justify-between course_top items-center">
            <div className="name text-3xl">{course.name}</div>
            <FaEdit className="edit opacity-0 transform duration-500 text-gray-500 cursor-pointer" />
          </div>
          <div className="main_course grid grid-cols-2">
            <Message />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Course;
