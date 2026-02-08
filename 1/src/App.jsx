import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apple from './Apple.jsx'
import './Sample.css'
import Sample from './Sample.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Hello World</h2>
      <Apple />
      <Sample />
      <h1>THis is a sample css file</h1>
    </div>
  )
}

export default App
