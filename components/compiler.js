import { useEffect, useState } from 'react'
import axios from 'axios'

const Compiler = () => {
  const [language, setLanguage] = useState('py')
  const [code, setCode] = useState('print("Hello World")')

  const [output, setOutput] = useState('$')

  const submitHandler = async () => {
    axios
      .post('http://localhost:5000/post', { language: language, code: code })
      .then((res) => setOutput(res.data.output))
      .catch((err) => setOutput(err.response.data))
      .catch((err) => console.log(err))
  }
  return (
    <div className="compiler">
      <h1>Online Compiler</h1>
      <div>
        <select onChange={(e) => console.log(e.target.value)}>
          <option value="py">Python</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <textarea
            defaultValue='print("Hello world")'
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <textarea
            // defaultValue="$"
            value={output}
            onChange={(e) => {}}
          ></textarea>
        </div>
        <input type="submit" onClick={submitHandler} value="Submit"></input>
      </form>
    </div>
  )
}

export default Compiler
