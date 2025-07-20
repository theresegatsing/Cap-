import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import APIForm from './components/APIForm.jsx';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [count, setCount] = useState(0)
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  const submitForm = () => {}

  return (
    <div className='whole-page'>
      <h1> Build Your Own Screenshot! </h1>

      <APIForm
      inputs={inputs}
      handleChange={(e) =>
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value.trim(),
        }))
      }
      onSubmit={submitForm}
      />
      <br></br>

    </div>
    
  )
}

export default App