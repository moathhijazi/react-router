import  { 

  createBrowserRouter , 
  createRoutesFromElements , 
  Route , 
  Link, 
  Outlet , 
  RouterProvider

} from 'react-router-dom'

import Home from './Home.jsx'
import Data from './Data.jsx'
function App() {
  const Root = () => {

    return(
      <>
        <Link to= '/' >Home</Link>
        <Link to= '/data' >Data</Link>
       
        <div>
          <Outlet />
        </div>
      </>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Root/>} >
        <Route index element ={<Home />} />
        <Route path='/data' element ={<Data />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );

  
  
}

export default App;
