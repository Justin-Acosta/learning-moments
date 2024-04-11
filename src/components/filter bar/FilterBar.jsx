import { useEffect, useState } from 'react'
import './FilterBar.css'
import { getTopics } from '../../services/filterBarServices.jsx'

export const FilterBar = ({ allPosts, setDisplayedPosts }) => {

    const [topics, setTopics] = useState([])
    const [topicSelect, setTopicSelect] = useState('')
    const [searchInput, setSearchInput] = useState('')


    //---useEffects---

    useEffect(() => {
        getTopics().then((res) => setTopics(res))
    }, [])
   

    useEffect(() => {

        let filterArray = []

        if (parseInt(topicSelect) > 0) {
            const tempArray = allPosts.filter((post) => post.topic.id === parseInt(topicSelect))
            filterArray = tempArray

        } else {
            filterArray = allPosts
        }

        if (searchInput !== '') {
            const tempArray = filterArray.filter(
                (post) =>
                    post.title.toLowerCase().includes(searchInput.toLowerCase()) || post.user.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            filterArray = tempArray
        }
        setDisplayedPosts(filterArray)
    }, [topicSelect, searchInput])


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