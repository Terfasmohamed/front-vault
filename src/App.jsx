import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './assets/login'
import SignupPage from './assets/signup'
import CreditCardApp from './assets/mainpage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <SignupPage /> */}
{/* <LoginPage></LoginPage> */}
<CreditCardApp></CreditCardApp>
    </>
  )
}

export default App
