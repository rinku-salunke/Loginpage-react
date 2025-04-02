import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LoginPage/>
      </div>
    </>
  )
}

export default App
