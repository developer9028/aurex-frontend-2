import React from 'react'
import './App.css'
import { RouterProvider } from "react-router/dom";
import router from './router/router'
import { Web3Provider } from './providers/Web3Provider'

import SmokeyCursor from "./components/lightswind/smokey-cursor.tsx";

function App() {

  return (
    <Web3Provider>
      {/* SmokeyCursor only for production mode   */}
      {
        import.meta.env.PROD && <SmokeyCursor />
      }

      <RouterProvider router={router} />
    </Web3Provider>
  )
}

export default App
