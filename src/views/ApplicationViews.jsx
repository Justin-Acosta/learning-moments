import { useEffect, useState } from "react"
import { getPosts } from "../services/homeServices.jsx"
import { Routes, Route, Outlet } from 'react-router-dom'
import { MainNavBar } from "../components/main page/MainNavBar.jsx"
import { WelcomePage } from "../components/main page/welcome/WelcomePage.jsx"
import { HomePage } from "../components/main page/home/HomePage.jsx"
import { readUserById } from "../services/userService.jsx"
import { PostDetailsPage } from "../components/post details/PostDetailsPage.jsx"


export const ApplicationViews = () => {

    //---Use States---

    const [allPosts, setAllPosts] = useState([])
    const [currentUser, setCurrentUser] = useState('')

    //---Use Effects---

    useEffect(() => { getPosts().then((res) => setAllPosts(res)) }, [])

    useEffect(() => {
        const learningUser = JSON.parse(localStorage.getItem('learning_user'))
        readUserById(learningUser.id).then((res) => setCurrentUser(res))
    }, [])

    //---Functions---

    //---HTML---

    return (
        <Routes>
            <Route path='/' element={

                <div className="container__main">
                    <MainNavBar />

                    <div className="container__update-page">
                        <Outlet />
                    </div>

                </div>
            }>
                <Route index element={<WelcomePage currentUser={currentUser} />} />

                <Route path='home'>
                    <Route index element={<HomePage allPosts={allPosts}/>}/>
                    <Route path=':postId' element={<PostDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    )

}