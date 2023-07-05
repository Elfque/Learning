import { Link } from "react-router-dom";

const CourseList = ({ course }) => {
  return (
    <Link to={`course/${course.id}`} className="course">
      {course.cover ? (
        <img src={course.cover} alt="" className="h-40 w-full object-cover" />
      ) : (
        <div className="h-40 bg-stone-500/50 pt-4">
          <img
            src="img/person/class-cover.svg"
            alt=""
            className="h-32 object-cover mx-auto"
          />
        </div>
      )}
      <div className="p-4">
        <div className=" text-2xl">{course.name}</div>
        <div className="text-sm">
          Teacher : <span>{course.creator}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseList;
