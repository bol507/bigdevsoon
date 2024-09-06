import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './router/routes'

function App() {


  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes />
      </div>
    </BrowserRouter>
 
  )
}

export default App
