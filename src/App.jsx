import { useState } from 'react'
import Form from './Component/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
    </>
  )
}

export default App
