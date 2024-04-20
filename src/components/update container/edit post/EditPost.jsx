import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import { useEffect, useState } from 'react'
import { readPostById, updatePost } from '../../../services/postServices.jsx'


export const EditPost = ({ currentUser, topics }) => {

    const navigate = useNavigate()

    //---Use Params---

    const { editPostId } = useParams()

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
    const [updatedPost, setUpdatedPost] = useState(
        {
            id: 0,
            topicId: 0,
            userId: 0,
            title: "",
            body: "",
            date: ""
        }
    )

    //---Use Effects---

    useEffect(() => {
        readPostById(editPostId).then((res) => setCurrentPost(res[0]))
    }, [editPostId])

    useEffect(() => {
        setUpdatedPost(
            {
                id: currentPost.id,
                topicId: currentPost.topicId,
                userId: currentPost.userId,
                title: currentPost.title,
                body: currentPost.body,
                date: currentPost.date
            }
        )
    },[currentPost])

    //---Functions---

    const editPost = (event) => {
        event.preventDefault()
        if (updatedPost.title !== '' && updatedPost.topicId !== 0 && updatedPost.body !== '') {
            updatePost(updatedPost).then(navigate(`/home/${currentPost.id}`))
        }
    }

    //---HTML---

    return (
        <div className='container__edit'>

            <form className="card__edit">

                <div className='container__edit--title'>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ceacff161121941.Y3JvcCw1NDAwLDQyMjMsMCwxMDAy.png" alt="" />
                    <div className="title">Edit Your Post</div>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ceacff161121941.Y3JvcCw1NDAwLDQyMjMsMCwxMDAy.png" alt="" />
                </div>

                <fieldset className='fieldset__edit'>
                    <p>Title:</p>
                    <input
                        required
                        type="text"
                        value={updatedPost.title}
                        // onChange={(event) => {
                        //     const copy = { ...updatedPost }
                        //     copy.title = event.target.value
                        //     setUpdatedupdatedPost(copy)
                        // }}
                        onChange={(event) => setUpdatedPost({ ...updatedPost, title: event.target.value })}
                    />
                </fieldset>

                <fieldset className='fieldset__edit'>
                    <p>Topic:</p>
                    <select
                        required
                        className='select__filter-bar'
                        value={updatedPost.topicId}
                        onChange={(event) => setUpdatedPost({ ...updatedPost, topicId: event.target.value })}
                    >
                        {topics.map((topic) => (
                            <option key={topic.id} value={topic.id}>{topic.name}</option>
                        ))}
                    </select>
                </fieldset>

                <fieldset className='fieldset__edit'>
                    <p>Body:</p>
                    <textarea
                        required
                        type="text"
                        value={updatedPost.body}
                        onChange={(event) => setUpdatedPost({ ...updatedPost, body: event.target.value })}
                    />
                </fieldset>

                <fieldset>
                    <button onClick={editPost}>Edit Post</button>
                </fieldset>

            </form>
        </div>
    )
}