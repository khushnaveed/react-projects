import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Task Tracker</h1>

    <input type="text" placeholder="Add your tasks here..." />
    <button>Add</button>

    <div className='todo-items'>
      <h2>Mission List</h2>
      <button>
        &#10004;
      </button>
    </div>

    <div className='done-items'>
      <h2>Done and Dusted</h2>
      <button>
        &#10004;
      </button>
    </div>
    </>
  )
}

export default App
