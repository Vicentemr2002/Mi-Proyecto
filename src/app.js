import React, {useState} from 'react'
import './app.css';
import Home from './Home';
import login from './login';

function App() {
    const [usuario, setUsuario] = useState(null)
    return (
        <div className ="">
         {usuario ? <home/> : <login/>}
        </div>
    )
}

export default App