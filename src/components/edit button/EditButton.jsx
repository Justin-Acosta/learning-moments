import { useEffect, useState } from 'react'
import './EditButton.css'
import { readBasePostById } from '../../services/postServices.jsx'
import { Link } from 'react-router-dom'


export const EditButton = ({ postId, currentUser }) => {

    //---Use Params---


    //---Use States---

    const [currentPost, setCurrentPost] = useState({ userId: 0 })

    //---Use Effects---

    useEffect(() => {
        readBasePostById(postId).then((res) => setCurrentPost(res[0]))
    }, [])

    //---Functions---

    //---HTML---

    return (
        <>
            {currentUser.id === currentPost.userId ? 
                <Link to={`/edit-post/${postId}`} className='button__edit'> 
                    <div>Edit</div> 
                </Link> 

                : null
            }
        </>
    )

}