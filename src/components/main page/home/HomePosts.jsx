

export const HomePosts = ({ displayedPosts }) => {


    const likesCounter = (post) => {
        if (post.userLikes.length > 0) {
            return post.userLikes.length

        } else {
            return 0
        }
    }


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
                            <div className="title">{post.title}</div>
                            <div className="topic">{post.topic.name}</div>
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