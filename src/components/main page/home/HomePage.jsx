import { useEffect, useState } from 'react'
import { FilterBar } from '../../filter bar/FilterBar.jsx'
import './HomePage.css'
import { HomePosts } from './HomePosts.jsx'

export const HomePage = ({allPosts}) => {

    const [displayedPosts,setDisplayedPosts] = useState([])
    
    useEffect(() => {
        setDisplayedPosts(allPosts)
    },[allPosts])

    return (
        <div className="container__home">
            <FilterBar allPosts={allPosts} setDisplayedPosts={setDisplayedPosts}/>
            <HomePosts displayedPosts={displayedPosts}/>
        </div>
    )
}