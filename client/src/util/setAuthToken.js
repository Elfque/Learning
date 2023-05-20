import axios from "axios";

const setAuthToken = (token) => {
  axios.defaults.headers.common["authorize"] = token;
};

export default setAuthToken;
