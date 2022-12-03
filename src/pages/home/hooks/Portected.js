import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { Navigate } from "react-router-dom";
export const Protected = () => {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return children;
    }
    return <Navigate to="/login" />;
  };
  return (
    ProtectedRoute
  )

}