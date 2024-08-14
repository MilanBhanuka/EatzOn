import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000";

  return (
    <div className='flex'>
      <ToastContainer />
      <Sidebar />

      <div className='flex flex-col w-full '>
        
        <Navbar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
