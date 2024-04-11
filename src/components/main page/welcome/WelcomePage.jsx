import './WelcomePage.css'

export const WelcomePage = () => {
    return (
        <div className='container__welcome'>

            <section className="card__welcome-posts">
                <img src="https://i.pinimg.com/originals/ec/45/80/ec4580d525dfafcd8c22a5a8f4d26033.png" alt="" />
                <div>
                    <div className="title">Welcome to the Fireside Study</div>
                    <p className='paragraph'>Grab a torch, unroll a friend's scroll, and read some tips about learning to help you on your adventure.</p>
                </div>
            </section>
        </div>
    )
}