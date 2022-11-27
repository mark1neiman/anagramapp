import React from 'react';
import Anagramfinder from './components/AnagramFinder/Anagramfinder';
import Login from './components/login/Login';
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const App = () => {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return children;;
    }

    return <Navigate to="/login" />;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Anagramfinder />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Anagramfinder />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
