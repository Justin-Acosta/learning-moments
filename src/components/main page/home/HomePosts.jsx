import { Link } from "react-router-dom"


export const HomePosts = ({ displayedPosts }) => {

    //---Use Params---

    //---Use States---

    //---Use Effects---

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
        <div className="container__home-posts">

            {displayedPosts.map(post => (
                <section className="card__home-posts" key={post.id}>

                    <div className="card__home-name">
                        <img src={post.user.image} alt="" />
                        <div className="name">{post.user.name}</div>
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
                    <div className="container__likes">
                        <button>Like Post</button>
                        <div>{likesCounter(post)} Likes</div>
                    </div>
                </section>
            ))}
        </div>
    )
}