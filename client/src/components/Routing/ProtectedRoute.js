// import { useNavigate, Route } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../../Context/authContext/AuthContext";

// function PrivateRoute({ path, page }) {
//   const navigate = useNavigate();
//   const authCon = useContext(AuthContext);
//   const { isAuthenticated } = authCon;

//   if (!isAuthenticated) {
//     return <Route path="/login" element={<login />} />;
//   }

//   return <Route path={path} element={page} />;
// }

// export default PrivateRoute;
