import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { readPostById } from '../../services/postServices.jsx'

export const PostDetailsPage = () => {

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

    const likesCounter = (post) => {
        if (post.userLikes.length > 0) {
            return post.userLikes.length

        } else {
            return 0
        }
    }

    //---HTML---

    return (
        <section className="card__home-posts">

        <div className="card__home-name">
            <img src={currentPost.user.image} alt="" />
            <div className="name">{currentPost.user.name}</div>
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
            <button>Like Post</button>
            <div>{likesCounter(currentPost)} Likes</div>
        </div>
    </section>
    )
}