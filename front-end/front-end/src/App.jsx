import { BrowserRouter,Router,Route,Navigate, Routes} from 'react-router-dom'
import Customer_register from './components/customer_register'
import Customer_login from './components/customer_login'
import Navbar from './components/Navbar'
import './index.css'
import StockDetails from './components/stock'
import Watchlist from './components/watch_list'

function App() {

  return (
    
    <BrowserRouter >
     <Navbar/>
    <Routes>
      <Route path="/register" element={<Customer_register/>} />
      <Route path="/login" element={<Customer_login/>} />
      <Route path='/stock' element={<StockDetails/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>


    </Routes>
  </BrowserRouter>
  
  )
}

export default App
