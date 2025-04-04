
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
// import MovieCard from './components/MovieCard/MovieCard'
import Home from './Pages/Home/Home'
import Layout from './components/Layout/Layout'
import Favorite from './Pages/Favorite/Favorite'

function App() {
let router=createBrowserRouter([
  {path:'/',element:<Layout />,children:[
    {index:true,element:<Home />},
    {path:'favorite',element:<Favorite />}
  ]}
])
  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
