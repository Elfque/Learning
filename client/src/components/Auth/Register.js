import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../layout/Alert";
import AuthContext from "../../Context/authContext/AuthContext";
import AlertContext from "../../Context/alertContext/AlertContext";
import axios from "axios";
import Dropzone from "react-dropzone";

const Register = () => {
  const authCon = useContext(AuthContext);
  const { authError } = authCon;

  const alertCon = useContext(AlertContext);
  const { addAlert } = alertCon;

  const navigate = useNavigate();

  const [regDetails, setRegDetails] = useState({
    email: "",
    userName: "",
    password: "",
    password1: "",
    accountType: "Student",
  });

  const [picture, setPicture] = useState(null);

  // const { email, userName, password, password1, accountType } = regDetails;

  const handleImageDrop = (acceptedFiles) => {
    setPicture(acceptedFiles[0]);
  };

  const changing = (e) =>
    setRegDetails({ ...regDetails, [e.target.name]: e.target.value });

  const registerUse = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:3200/api/users",
        regDetails,
        config
      );

      if (res.data.msg === "Success") {
        navigate("/login");
      }
    } catch (error) {
      authError(error);
    }
  };

  const onRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let detail in regDetails) {
      formData.append(detail, regDetails[detail]);
    }
    formData.append("file", picture);

    if (regDetails.password !== regDetails.password1) {
      addAlert("Passwords Don't match");
      return;
    }

    registerUse(formData);
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form action="" onSubmit={onRegister} className="max-w-[20rem]">
        <Alert />
        <h3 className="text-center pb-4 font-semibold text-2xl">Sign Up</h3>
        <div className="form-control mt-4">
          <input
            type="text"
            name="email"
            id="email"
            className="inp"
            onChange={changing}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-control mt-4">
          <input
            type="text"
            name="userName"
            id="userName"
            className="inp"
            onChange={changing}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-control mt-4">
          <input
            type="password"
            name="password"
            id="password"
            className="inp"
            onChange={changing}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-control mt-4">
          <input
            type="password"
            name="password1"
            id="password1"
            className="inp"
            onChange={changing}
            placeholder="Confirm Password"
            required
          />
        </div>

        {/* <div className="type_part flex justify-around mt-4">
          <div className="control text-center border-2 border-black rounded-md p-2 text-sm">
            <label htmlFor="Teacher">Teacher</label>
            <input
              type="radio"
              id="Teacher"
              className="block mx-auto mt-4"
              checked={accountType === "Teacher"}
              name="accountType"
              value="Teacher"
              onChange={changing}
            />
          </div>
          <div className="control text-center border-2 border-black rounded-md p-2 text-sm">
            <label htmlFor="Student">Student</label>
            <input
              type="radio"
              id="Student"
              className="block mx-auto mt-4"
              checked={accountType === "Student"}
              name="accountType"
              value="Student"
              onChange={changing}
            />
          </div>
        </div> */}

        <div className="form-control mt-4">
          <label htmlFor="type">Type (Student or Teacher)</label>
          <select name="type" id="type" className="inp" onSelect={changing}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>

        {/* PICTURE UPLOAD PART */}
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={handleImageDrop}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="drop">
              <input {...getInputProps()} />
              {picture ? (
                <p>{picture.name}</p>
              ) : (
                <p>Drag and drop profile picture here</p>
              )}
            </div>
          )}
        </Dropzone>

        <div className="text-center">
          <button
            type="submit"
            className="bg-black w-3/5 rounded-[20px] p-2 text-white mt-4"
          >
            Sign Up
          </button>
        </div>

        <div className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link className="text-blue-600" to={"/login"}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
