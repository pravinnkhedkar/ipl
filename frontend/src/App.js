import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [images,setImages] = useState([])
console.log(images)
  useEffect(() => {
    axios.get("http://localhost:2000/").then(res=>setImages(res.data))
  }, [])

  return (
    <div className="App">
      <div className='row'>
      {images.map(imageUrl=>{
        return <img src={imageUrl} alt="IPL Teams"/>
      })}
      </div>
    </div>
  );
}

export default App;