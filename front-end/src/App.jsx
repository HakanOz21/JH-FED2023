import { useState } from 'react'
import './App.css'
import { getAllBooks } from './lib/api'
function App() {
  const [count, setCount] = useState()


  return (
    <>
      <h1>BookMonkey</h1>
      <div className="card">
        <button onClick={async () => {const allBooks = await getAllBooks()
        setCount(allBooks)}}>
          {JSON.stringify(count,null,4)}
        </button>
      </div>
    </>
  )
}

export default App
