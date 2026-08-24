import { SignInButton, SignOutButton, UserButton, Show, useUser } from '@clerk/react'
import { Routes, Route, Navigate } from "react-router"
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'
import { Toaster } from 'react-hot-toast'


function App() {

  const { isSignedIn } = useUser()
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster toastOptions={{duration: 3000}}/>
    </>
  )
}

export default App

//tw, daisyUi, react-roter, react-hot-toast, => DONE
//  react-query aka tanstack query, axios