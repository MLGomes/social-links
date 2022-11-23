import { createBrowserRouter } from 'react-router-dom';

import Home from './Pages/HOME'
import Login from './Pages/LOG'
import Admin from './Pages/ADMIN'
import Error from './Pages/OTHER/ERROR'

import Private from './Routes/private'
import Networks from './Pages/NETWORKS';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '/admin/social',
    element: <Private> <Networks/></Private>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export {router};