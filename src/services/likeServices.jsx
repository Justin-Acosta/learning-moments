

export const createUserLike = (likeObject) => {
    return fetch('http://localhost:8088/userLikes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(likeObject)
    })
} 


export const getAllLikes = () => {
    return fetch('http://localhost:8088/userLikes').then((res) => res.json())
}

export const deleteUserLike = (userLikeId) => {
    return fetch(`http://localhost:8088/userLikes/${userLikeId}`, {
        method: "DELETE"
    })
}