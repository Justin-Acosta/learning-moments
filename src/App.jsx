
import './App.css'
import { Routes, Route, Outlet,} from 'react-router-dom'
import { HomePage } from "./components/main page/home/HomePage.jsx"
import { MainNavBar } from "./components/main page/MainNavBar.jsx"
import { useEffect, useState } from "react"
import { getPosts } from "./services/homeServices.jsx"
import { WelcomePage } from './components/main page/welcome/WelcomePage.jsx'

export const App = () => {

  const [allPosts, setAllPosts] = useState([])

  useEffect(() => { getPosts().then((res) => setAllPosts(res)) }, [])

  return (
    <Routes>
      <Route path='/' element={

        <div className="container__main">
          <MainNavBar />

          <div className="container__update-page">
            <Outlet/>
          </div>

        </div>
      }>
        <Route index element={<WelcomePage/>}/>
        <Route path='home' element={<HomePage allPosts={allPosts} />} />
      </Route>
    </Routes>
  )
}









// <div className="container__main">
//     <MainNavBar/>
//     <div className="container__update-page">
//         <HomePage allPosts={allPosts}/>
//     </div>
// </div>