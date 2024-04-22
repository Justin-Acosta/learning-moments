import { useEffect } from 'react'
import './WelcomePage.css'
import { readUserById } from '../../../services/userService.jsx'

export const WelcomePage = ({currentUser,setCurrentUser}) => {

    //---Use Params---
    
    //---Use States---

    //---Use Effects---

    useEffect(() => {
        const learningUser = JSON.parse(localStorage.getItem('learning_user'))
        readUserById(learningUser.id).then((res) => setCurrentUser(res))
    }, [])
 
    //---Functions---

    //---HTML---
    
    return (
        <div className='container__welcome'>

            <section className="card__welcome-posts">
                <img src="https://i.pinimg.com/originals/ec/45/80/ec4580d525dfafcd8c22a5a8f4d26033.png" alt="" />
                <div>
                    <div className="title">{`Welcome ${currentUser.name}`}</div>
                    <p className='paragraph'>Grab a torch, unroll a friend's scroll, and unlock the deep wells of magic within yourself.</p>
                </div>
            </section>
        </div>
    )
}