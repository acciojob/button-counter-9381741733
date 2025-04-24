
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Button clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  )
}

export default App
