import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { readPostById } from '../../../services/postServices.jsx'
import { LikeButton } from '../../like button/LikeButton.jsx'
import { EditButton } from '../../edit button/EditButton.jsx'
import { DeleteButton } from '../../delete button/DeleteButton.jsx'

export const PostDetailsPage = ({currentUser, setAllPosts}) => {

    //---Use Params---

    const { postId } = useParams()
    
    //---Use States---

    const [currentPost, setCurrentPost] = useState(
            {
              id: 0,
              topicId: 0,
              userId: 0,
              title: "",
              body: "",
              date: "",
              userLikes: [],
              user: {
                id: 0,
                name: "",
                email: "",
                image: "",
                cohort: 0
              },
              topic: {
                id: 0,
                name: "",
                description: ""
              }
            } 
    )

    //---Use Effects---
 
    useEffect(() => {
        readPostById(postId).then((res) => setCurrentPost(res[0]))
    },[postId])

    //---Functions---

    //---HTML---

    return (
            <section className="card__home-posts">

            <div className="card__home-name">
                <img src={currentPost.user.image} alt="" />
                <div className="name">{currentPost.user.name}</div>
                <EditButton currentUser={currentUser} postId={postId}/>
                <DeleteButton currentUser={currentUser} postId={postId} setAllPosts={setAllPosts}/>
            </div>

            <div className="card__home-title">
                <img className='container__navbar-header--img' src="https://i.pinimg.com/originals/d4/95/46/d49546b1b2e76cf604c009a84b47d259.gif" alt="" />
                <div>
                    <div className="title">{currentPost.title}</div>
                    <div className="topic">{currentPost.topic.name}</div>
                </div>
            </div>

            <p>{currentPost.body}</p>
            <div className="container__likes">
                <LikeButton currentUser={currentUser} postId={postId}/>
            </div>
        </section>
    )
}