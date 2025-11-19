import React from 'react'
import './App.css'
import { RouterProvider } from "react-router/dom";
import router from './router/router'

import SmokeyCursor from "./components/lightswind/smokey-cursor.tsx";

function App() {

  return (
    <>
      {/* SmokeyCursor only for production mode   */}
      {
        import.meta.env.PROD && <SmokeyCursor />
      }

      <RouterProvider router={router} />
    </>
  )
}

export default App
