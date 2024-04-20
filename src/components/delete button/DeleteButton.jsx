import './DeleteButton.css'
import { useEffect, useState } from 'react'
import { deletePost, readBasePostById } from '../../services/postServices.jsx'
import { getPosts } from '../../services/homeServices.jsx'


export const DeleteButton = ({ postId, currentUser, setAllPosts }) => {

    //---Use Params---

    //---Use States---

    const [currentPost,setCurrentPost] = useState({ userId: 0 })

    //---Use Effects---

    useEffect(() => {
        readBasePostById(postId).then((res) => setCurrentPost(res[0]))
    }, [])


    //---Functions---

    const invokeDeletePost = async () => {
        await deletePost(postId)
        await getPosts().then((res) => setAllPosts(res))
    }

    //---HTML---

    return (
        <>
            {currentUser.id === currentPost.userId ? 
                <button onClick={invokeDeletePost} className='button__delete'> 
                    <div>Delete</div> 
                </button> 

                : null
            }
        </>
    )

}