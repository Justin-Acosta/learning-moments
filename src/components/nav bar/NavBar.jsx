import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <div className="container__navbar">

            <div className='container__navbar-header'>
                <img className='container__navbar-header--img' src="https://i.pinimg.com/originals/d4/95/46/d49546b1b2e76cf604c009a84b47d259.gif" alt="" />
                <Link to='/' className='container__navbar-header--title'>Fireside Study</Link>
                <img className='container__navbar-header--img' src="https://i.pinimg.com/originals/d4/95/46/d49546b1b2e76cf604c009a84b47d259.gif" alt="" />
            </div>

            <div className="container__navbar-buttons">

                <Link to='/home' className='button__navbar button__navbar--home'>
                    <div>Home</div>
                </Link>

                <Link to='/my-posts' className='button__navbar button__navbar--my-posts'>
                    <div>My Posts</div>
                </Link>

                <Link to='/favorites' className='button__navbar button__navbar--new-favorites'>
                    <div>Favorites</div>
                </Link>

                <Link to='/new-post' className='button__navbar button__navbar--new-post'>
                    <div>New Post</div>
                </Link>

                <Link to='/edit-profile' className='button__navbar button__navbar--new-post'>
                    <div>Profile</div>
                </Link>

                <Link to='' className="button__navbar button__navbar--logout" onClick={() => {
                    localStorage.removeItem('learning_user')
                    navigate('/', { replace: true })
                }}>
                    <div>Logout</div>
                </Link>
            </div>

        </div>
    )

}