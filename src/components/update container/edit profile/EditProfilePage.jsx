import { useEffect, useState } from 'react'
import './EditProfile.css'
import { useNavigate } from 'react-router-dom'
import { readUserById, updateUser } from '../../../services/userService.jsx'

export const EditProfilePage = ({currentUser}) => {

    const navigate = useNavigate()

    //---Use Params---

    //---Use States---

    const [updatedUser,setUpdatedUser] = useState(
        {
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            image: currentUser.image,
            cohort: currentUser.cohort
        }
    )

    //---Use Effects---
    
    useEffect(() => {
        setUpdatedUser(currentUser)
    },[currentUser])

    //---Functions---

    const editProfile = (event) => {
        event.preventDefault()

        if(updatedUser.name !== '' && updatedUser.email !== '' && updatedUser.image !=='', updatedUser.cohort !== 0) {
            updateUser(updatedUser).then(navigate('/'))
        }
    } 

    //---HTML---

    return (
        <div className='container__edit'>

            <form className="card__edit">

                <div className='container__edit--title'>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ceacff161121941.Y3JvcCw1NDAwLDQyMjMsMCwxMDAy.png" alt="" />
                    <div className="title">Edit Your Profile</div>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ceacff161121941.Y3JvcCw1NDAwLDQyMjMsMCwxMDAy.png" alt="" />
                </div>

                <fieldset className='fieldset__edit'>
                    <p>Name: </p>
                    <input
                        required
                        type="text"
                        value={updatedUser.name}
                        onChange={(event) => setUpdatedUser({ ...updatedUser, name: event.target.value })}
                    />
                </fieldset>

                <fieldset className='fieldset__edit'>
                    <p>Email: </p>
                    <input
                        required
                        type="text"
                        value={updatedUser.email}
                        // onChange={(event) => {
                        //     const copy = { ...updatedPost }
                        //     copy.title = event.target.value
                        //     setUpdatedupdatedPost(copy)
                        // }}
                        onChange={(event) => setUpdatedUser({ ...updatedUser, email: event.target.value })}
                    />
                </fieldset>

                <fieldset className='fieldset__edit'>
                    <p>Image URL: </p>
                    <input
                        required
                        type="text"
                        value={updatedUser.image}
                        // onChange={(event) => {
                        //     const copy = { ...updatedPost }
                        //     copy.title = event.target.value
                        //     setUpdatedupdatedPost(copy)
                        // }}
                        onChange={(event) => setUpdatedUser({ ...updatedUser, image: event.target.value })}
                    />
                </fieldset>

                <fieldset className='fieldset__edit'>
                    <p>Cohort: </p>
                    <input
                        required
                        type="number"
                        value={updatedUser.cohort}
                        // onChange={(event) => {
                        //     const copy = { ...updatedPost }
                        //     copy.title = event.target.value
                        //     setUpdatedupdatedPost(copy)
                        // }}
                        onChange={(event) => setUpdatedUser({ ...updatedUser, cohort: event.target.value })}
                    />
                </fieldset>

                <fieldset>
                    <button onClick={editProfile}>Edit Profile</button>
                </fieldset>

            </form>
        </div>
    )
}