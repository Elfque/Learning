import { useContext, useState } from "react";
import AlertContext from "../../Context/alertContext/AlertContext";
import Alert from "./Alert";
import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    authorize: localStorage.getItem("token"),
  },
});

const AddCourse = ({ close, opener }) => {
  const { addAlert } = useContext(AlertContext);

  const [newCourse, setNewCourse] = useState({ name: "" });

  const courseCreator = async () => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorize: localStorage.getItem("token"),
    //   },
    // };
    try {
      const res = await instance.post(
        "http://localhost:3200/api/courses",
        newCourse
      );

      addAlert("Course Added Successfully", "good");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const changing = (e) =>
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });

  return (
    <div className={`add_course  ${opener ? "top-[50%]" : "top-[-50%]"}`}>
      <div
        className="closer w-fit right-4 top-2 absolute text-2xl font-semibold cursor-pointer"
        onClick={() => close()}
      >
        &times;
      </div>
      <form action="" onSubmit={courseCreator} className="mt-2 p-4">
        <div className="text-xl text-center mb-4 font-semibold">Add Course</div>
        <Alert />
        <div className="control">
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            className="add_inp"
            name="name"
            onChange={changing}
            required
          />
        </div>
        {/* <div className="control">
          <label htmlFor="courseName">Course Code</label>
          <input
            type="text"
            className="add_inp"
            name="code"
            onChange={changing}
          />
        </div> */}
        <div className="text-end">
          <button
            type="submit"
            className="text-white bg-black rounded-md text-sm"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
