import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get(`/api/jokes`)
    .then((res)=>{
      setJokes(res.data)
  
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  

  return (
    <>
      <h1>Jokes:{jokes.length}</h1>
      {
        jokes.map((el)=>{
         return(
          <div key={el.id}>
                   <p>title:{el.title}</p>
                   <p>id:{el.id}</p>
                   <p>content:{el.content}</p>
          </div>
         )

        })
      }
    </>
  )
}

export default App




        
//        GET http://localhost:3000/jokes net::ERR_FAILED 200 (OK)
// dispatchXhrRequest @ axios.js?v=0219dcda:1680
// xhr @ axios.js?v=0219dcda:1560
// dispatchRequest @ axios.js?v=0219dcda:2035
// _request @ axios.js?v=0219dcda:2240
// request @ axios.js?v=0219dcda:2141
// Axios.<computed> @ axios.js?v=0219dcda:2259
// wrap @ axios.js?v=0219dcda:8
// (anonymous) @ App.jsx:10
// commitHookEffectListMount @ react-dom_client.js?v=0219dcda:16915
// commitPassiveMountOnFiber @ react-dom_client.js?v=0219dcda:18156
// commitPassiveMountEffects_complete @ react-dom_client.js?v=0219dcda:18129
// commitPassiveMountEffects_begin @ react-dom_client.js?v=0219dcda:18119
// commitPassiveMountEffects @ react-dom_client.js?v=0219dcda:18109
// flushPassiveEffectsImpl @ react-dom_client.js?v=0219dcda:19490
// flushPassiveEffects @ react-dom_client.js?v=0219dcda:19447
// (anonymous) @ react-dom_client.js?v=0219dcda:19328
// workLoop @ react-dom_client.js?v=0219dcda:197
// flushWork @ react-dom_client.js?v=0219dcda:176
// performWorkUntilDeadline @ react-dom_client.js?v=0219dcda:384
// Show 18 more frames
// Show lessUnderstand this error
// localhost/:1 Access to XMLHttpRequest at 'http://localhost:3000/jokes' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.Understand this error
// App.jsx:15 AxiosError {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}
// App.jsx:10 
        
        
//        GET http://localhost:3000/jokes net::ERR_FAILED 200 (OK)