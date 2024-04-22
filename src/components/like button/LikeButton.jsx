import { useEffect, useState } from 'react'
import './LikeButton.css'
import { createUserLike, deleteUserLike } from '../../services/likeServices.jsx'
import { readPostWithLikesById } from '../../services/postServices.jsx'
import { getPosts } from '../../services/homeServices.jsx'

export const LikeButton = ({ currentUser, postId, setAllPosts }) => {

    
    //---Use Params---


    //---Use States---


    const [currentPost, setCurrentPost] = useState(
        {
            id: 0,
            userId: 0,
            userLikes: []
        }
    )
    const [likeButton, setLikeButton] = useState(null)
    const [likeCount, setLikeCount] = useState(0)


    //---Use Effects---


    useEffect(() => {
        readPostWithLikesById(postId).then((res) => setCurrentPost(res[0]))
    }, [postId])


    useEffect(() => {
            setLikeCount(currentPost.userLikes.length)
    }, [currentPost,currentUser])


    useEffect(() => {
        if (currentUser.id !== currentPost.userId) {
            if (currentPost.userLikes.some((like) => currentUser.id === like.userId)) {
                setLikeButton(<button className='button__like' onClick={unlikePost}>Unlike</button>)
            } else {
                setLikeButton(<button className='button__like' onClick={likePost}>Like</button>)
            }
        } else {
            setLikeButton(null)
        }
    }, [currentPost,currentUser])


//---Functions---


const unlikePost = async () => {
    const currentUserLike = currentPost.userLikes.find((like) =>
        like.userId === currentUser.id && like.postId === currentPost.id)

    await deleteUserLike(currentUserLike.id)

    await readPostWithLikesById(currentPost.id).then((res) => setCurrentPost(res[0]))

    await getPosts().then((res) => setAllPosts(res))

}

const likePost = async () => {

    await createUserLike(
        {
            userId: currentUser.id,
            postId: currentPost.id
        }
    )

    await readPostWithLikesById(currentPost.id).then((res) => setCurrentPost(res[0]))

    await getPosts().then((res) => setAllPosts(res))
}


//---HTML---


return (

    <div className='container__likes'>
        <div>{likeButton}</div>
        <div>{likeCount} Likes</div>
    </div>
)
}
