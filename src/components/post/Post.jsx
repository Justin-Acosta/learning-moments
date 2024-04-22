import { Link } from "react-router-dom"
import { LikeButton } from "../like button/LikeButton.jsx"
import { EditButton } from "../edit button/EditButton.jsx"
import './Post.css'
import { DeleteButton } from "../delete button/DeleteButton.jsx"


export const Post = ({ post, currentUser, setAllPosts }) => {

    //---Use Params---

    //---Use States---

    //---Use Effects---

    //---Functions---

    //---HTML---

    return (
                <section className="card__home-posts" key={post.id}>

                    <div className="card__home-name">
                        <img src={post.user.image} alt="" />
                        <div className="name">{post.user.name}</div>
                        <EditButton currentUser={currentUser} postId={post.id}/>
                        <DeleteButton currentUser={currentUser} postId={post.id} setAllPosts={setAllPosts}/>
                    </div>

                    <div className="card__home-title">
                        <img className='container__navbar-header--img' src="https://i.pinimg.com/originals/d4/95/46/d49546b1b2e76cf604c009a84b47d259.gif" alt="" />
                        <div>
                            <div className="title">
                                <Link to={`/home/${post.id}`} className="title">{post.title}</Link>
                            </div>

                            <div>
                                <Link className="topic">{post.topic.name}</Link>
                            </div>
                        </div>
                    </div>

                    <p>{post.body}</p>

                        <LikeButton currentUser={currentUser} postId={post.id} setAllPosts={setAllPosts}/>

                </section>
    )
}