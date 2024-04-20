export const readPostById = (postId) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=user&_expand=topic&_embed=userLikes`).then((res) => res.json())
}

export const readPostWithLikesById = (postId) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_embed=userLikes`).then((res) => res.json())
}

export const readBasePostById = (postId) => {
    return fetch(`http://localhost:8088/posts?id=${postId}`).then((res) => res.json())
}

export const createPost = (postObject) => {
    return fetch(`http://localhost:8088/posts`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(postObject)
    })
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`,{
        method: "DELETE"
    })
}

export const updatePost = (updateObject) => {
    return fetch(`http://localhost:8088/posts/${updateObject.id}`,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateObject)
    })
}