import { useEffect, useState } from 'react'
import { FilterBar } from '../../filter bar/FilterBar.jsx'
import './HomePage.css'

import { Post } from '../../post/Post.jsx'
import { getPosts } from '../../../services/homeServices.jsx'

export const HomePage = ({allPosts ,setAllPosts, currentUser, topics}) => {

    const [displayedPosts,setDisplayedPosts] = useState([])
    const [filterPosts,setFilterPosts] = useState([])

    useEffect(() => { getPosts().then((res) => setAllPosts(res)) }, [])
    
    useEffect(() => {
        setFilterPosts(allPosts)
    },[allPosts])

    return (
        <div className="container__home">
            <FilterBar filterPosts={filterPosts} setDisplayedPosts={setDisplayedPosts} topics={topics}/>

            {displayedPosts.map(post => (
            <Post key={post.id} post={post} currentUser={currentUser} setAllPosts={setAllPosts}/>
            ))}
        </div>
    )
}