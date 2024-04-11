import { Link } from 'react-router-dom'
import './Main.css'

export const MainNavBar = () => {

    return (
        <div className="container__navbar">

            <div className='container__navbar-header'>
                <img className='container__navbar-header--img' src="https://i.pinimg.com/originals/d4/95/46/d49546b1b2e76cf604c009a84b47d259.gif" alt="" />
                <Link to='/' className='container__navbar-header--title'>Fireside Study</Link>
                <img className='container__navbar-header--img' src="https://i.pinimg.com/originals/d4/95/46/d49546b1b2e76cf604c009a84b47d259.gif" alt="" />
            </div>

            <div className="container__navbar-buttons">

                <Link to='/home' className='button__navbar button__navbar--home'>Home</Link>

                <div className="button__navbar button__navbar--my-posts">My Post</div>
                <div className="button__navbar button__navbar--favorites">Favorites</div>
                <div className="button__navbar button__navbar--new-post">New Post</div>
                <div className="button__navbar button__navbar--profile">Profile</div>
                <div className="button__navbar button__navbar--logout">Logout</div>
            </div>

        </div>
    )

}