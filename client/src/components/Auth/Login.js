import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/authContext/AuthContext";
import Alert from "../layout/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AlertContext from "../../Context/alertContext/AlertContext";

const Login = () => {
  const authCon = useContext(AuthContext);
  const alertCon = useContext(AlertContext);

  const { addAlert } = alertCon;
  const { authSuccess, authError, isAuthenticated } = authCon;

  const [logDetails, setLogDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = logDetails;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const logInUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:3200/api/auth",
        formData,
        config
      );
      console.log(res.data);
      if (res.data) {
        navigate("/");
        authSuccess(res);
      }
    } catch (error) {
      console.log(error);
      addAlert(error.response.data.msg);
      authError(error);
    }
  };

  const changing = (e) =>
    setLogDetails({ ...logDetails, [e.target.name]: e.target.value });

  const onLogin = (e) => {
    e.preventDefault();

    logInUser({ email, password });
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form action="" onSubmit={onLogin} className="mx-auto w-fit p-6">
        <Alert />
        <h3 className="text-center pb-4 font-semibold text-2xl">Sign In</h3>
        <div className="form-control mt-6">
          <input
            type="email"
            name="email"
            id="email"
            onChange={changing}
            className="inp"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="password"
            name="password"
            id="password"
            onChange={changing}
            className="inp"
            placeholder="Password"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-black w-3/5 rounded-[20px] p-2 text-white mt-8"
          >
            Sign In
          </button>
        </div>
        <div className="text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link className="text-blue-600" to={"/register"}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
