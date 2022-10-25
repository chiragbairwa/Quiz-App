import { useEffect, useState } from 'react'
import axios from 'axios'

const Compiler = () => {
  const [language, setLanguage] = useState('py')
  const [defaultCode, setDefaultCode] = useState('print("Hello World)"')
  const [code, setCode] = useState(defaultCode)

  useEffect(() => {}, [defaultCode])

  const changeLanguage = (e) => {
    setLanguage(e.target.value)

    if (e.target.value === 'py') {
      setDefaultCode(`print("Hello World")`)
    }
    if (e.target.value === 'cpp') {
      setDefaultCode(`#include<stdio.h>\nint main(){\n    return 0;\n}`)
    }
  }

  const submitHandler = async () => {
    axios.post('http://localhost:5000/post', { language: language, code: code })
  }
  return (
    <div>
      <div>
        <select onChange={changeLanguage}>
          <option value="py">Python</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      <textarea value={defaultCode} onChange={() => {}}></textarea>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Compiler
