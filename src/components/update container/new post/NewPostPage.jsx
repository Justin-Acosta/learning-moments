import { useState } from 'react'
import './NewPostPage.css'
import { createPost } from '../../../services/postServices.jsx'
import { useNavigate } from 'react-router-dom'


export const NewPostPage = ({ currentUser, topics }) => {

    const navigate = useNavigate()

    //---Use Params---

    //---Use States---

    const [topicSelect, setTopicSelect] = useState(0)
    const [titleInput, setTitleInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')

    //---Use Effects---

    //---Functions---

    const invokeCreatePost = (event) => {
        event.preventDefault()

        const newPost = {
            topicId: topicSelect,
            userId: currentUser.id,
            title: titleInput,
            body: bodyInput,
            date: new Date()
        }

        if (newPost.title !== '' && newPost.topicId !== 0 && newPost.body !== '') {
            createPost(newPost).then(() => {
                navigate('/my-posts')
                console.log('navigate')
            })
        }

    }

    //---HTML---

    return (
        <div className='container__new-post'>

            <form className="card__new-post">

                <div className='container__new-post--title'>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ceacff161121941.Y3JvcCw1NDAwLDQyMjMsMCwxMDAy.png" alt="" />
                    <div className="title">Create a New Post</div>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ceacff161121941.Y3JvcCw1NDAwLDQyMjMsMCwxMDAy.png" alt="" />
                </div>

                <fieldset className='fieldset__new-post'>
                    <p>Title:</p>
                    <input
                        required
                        type="text"
                        value={titleInput}
                        onChange={(event) => setTitleInput(event.target.value)}
                    />
                </fieldset>

                <fieldset className='fieldset__new-post'>
                    <p>Topic:</p>
                    <select required className='select__filter-bar' onChange={(event) => setTopicSelect(parseInt(event.target.value))}>
                        <option value='0'></option>
                        {topics.map((topic) => (
                            <option key={topic.id} value={topic.id}>{topic.name}</option>
                        ))}
                    </select>
                </fieldset>

                <fieldset className='fieldset__new-post'>
                    <p>Body:</p>
                    <textarea
                        required
                        type="text"
                        value={bodyInput}
                        onChange={(event) => setBodyInput(event.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <button onClick={invokeCreatePost}>Create Post</button>
                </fieldset>

            </form>
        </div>
    )
}