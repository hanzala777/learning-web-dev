import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div style={{
        display:'flex',
        justifyContent:'center',
        marginTop: '-300px'
      }}>
        <div className="card" style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '50vw'
        }}>
          <button onClick={() => setCount((count) => count + 1)}>
            increament
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            decreament
          </button>
        </div>
      </div>
      <div>
        <button>
          {count}
        </button>
      </div>
    </>
  )
}

export default App
