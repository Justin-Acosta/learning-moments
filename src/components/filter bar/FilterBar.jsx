import { useEffect, useState } from 'react'
import './FilterBar.css'

export const FilterBar = ({ filterPosts, setDisplayedPosts, topics }) => {

    //---useState---

    const [topicSelect, setTopicSelect] = useState(0)
    const [searchInput, setSearchInput] = useState('')


    //---useEffects---

    useEffect(() => {

        let filterArray = []

        if (parseInt(topicSelect) > 0) {
            const tempArray = filterPosts.filter((post) => post.topic.id === parseInt(topicSelect))
            setDisplayedPosts(tempArray)

        } else {
            filterArray = filterPosts
        }

        if (searchInput !== '') {
            const tempArray = filterArray.filter(
                (post) =>
                    post.title.toLowerCase().includes(searchInput.toLowerCase()) || post.user.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            filterArray = tempArray
        }
        setDisplayedPosts(filterArray)
    }, [filterPosts,topicSelect, searchInput])


    return (
        <div className='container__filter-bar'>

            <select className='select__filter-bar' onChange={(event) => setTopicSelect(event.target.value)}>
                <option value="0">All Posts</option>
                {topics.map((topic) => (
                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                ))}
            </select>
            <input className='input__filter-bar' type="text" placeholder='Search' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />

        </div>
    )
}