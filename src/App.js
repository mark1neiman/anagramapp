import React from 'react';
import page from './pages'
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

import {
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const App = () => {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return children;
    }
    return <Navigate to="/login" />;
  };


  const router = createHashRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <page.Home />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <page.Home />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <page.Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;