import { useEffect, useState } from 'react'
import { FilterBar } from '../../filter bar/FilterBar.jsx'
import { Post } from '../../post/Post.jsx'
import '../home/HomePage.css'
import { getPosts } from '../../../services/homeServices.jsx'

export const FavoritesPage = ({allPosts , setAllPosts, currentUser, topics}) => {

    //---Use Params---
    
    //---Use States---

    const [displayedPosts,setDisplayedPosts] = useState([])
    const [filterPosts,setFilterPosts] = useState([])

    //---Use Effects---


    useEffect(() => { getPosts().then((res) => setAllPosts(res)) }, [])

    
    useEffect(() => {
        const userPosts = allPosts.filter((post) => post.userLikes.some((like) => currentUser.id === like.userId))
        setFilterPosts(userPosts)
    },[allPosts])

    //---HTML---

    return (
        <div className="container__home">
            <FilterBar filterPosts={filterPosts} setDisplayedPosts={setDisplayedPosts} topics={topics}/>

            {displayedPosts.map(post => (
            <Post key={post.id} post={post} currentUser={currentUser} setAllPosts={setAllPosts}/>
            ))}
        </div>
    )
}