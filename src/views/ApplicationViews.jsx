import { useEffect, useState } from "react"
import { getPosts } from "../services/homeServices.jsx"
import { Routes, Route, Outlet } from 'react-router-dom'
import { WelcomePage } from "../components/update container/welcome/WelcomePage.jsx"
import { HomePage } from "../components/update container/home/HomePage.jsx"
import { readUserById } from "../services/userService.jsx"
import { NavBar } from "../components/nav bar/NavBar.jsx"
import { PostDetailsPage } from "../components/update container/post details/PostDetailsPage.jsx"
import { EditPost } from "../components/update container/edit post/EditPost.jsx"
import { NewPostPage } from "../components/update container/new post/NewPostPage.jsx"
import { getTopics } from "../services/filterBarServices.jsx"
import { MyPosts } from "../components/update container/my posts/MyPostsPage.jsx"
import { FavoritesPage } from "../components/update container/favorites/FavoritesPage.jsx"
import { EditProfilePage } from "../components/update container/edit profile/EditProfilePage.jsx"


export const ApplicationViews = () => {

    //---Use States---

    const [allPosts, setAllPosts] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    const [topics, setTopics] = useState([])

    //---Use Effects---

    useEffect(() => { getPosts().then((res) => setAllPosts(res)) }, [])

    useEffect(() => {
        const learningUser = JSON.parse(localStorage.getItem('learning_user'))
        readUserById(learningUser.id).then((res) => setCurrentUser(res))
    }, [])

    useEffect(() => {
        getTopics().then((res) => setTopics(res))
    }, [])

    //---Functions---

    //---HTML---

    return (
        <Routes>
            <Route path='/' element={

                <div className="container__main">
                    <NavBar />

                    <div className="container__update-page">
                        <Outlet />
                    </div>

                </div>
            }>
                <Route index element={<WelcomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />

                <Route path='home'>
                    <Route index element={<HomePage allPosts={allPosts} setAllPosts={setAllPosts} currentUser={currentUser} topics={topics}/>}/>
                    <Route path=':postId' element={<PostDetailsPage currentUser={currentUser} setAllPosts={setAllPosts}/>}/>
                </Route>

                <Route path="my-posts" element={<MyPosts allPosts={allPosts} setAllPosts={setAllPosts} currentUser={currentUser} topics={topics}/>}/>
                <Route path="favorites" element={<FavoritesPage allPosts={allPosts} setAllPosts={setAllPosts} currentUser={currentUser} topics={topics}/>}/>

                <Route path='edit-post'>
                    <Route path=":editPostId" element={<EditPost currentUser={currentUser} topics={topics}/>}/>
                </Route>

                <Route path="new-post" element={<NewPostPage currentUser={currentUser} topics={topics}/>}/>

                <Route path="edit-profile" element={<EditProfilePage currentUser={currentUser}/>}/>

            </Route>
        </Routes>
    )

}