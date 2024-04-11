export const readPostById = (postId) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=user&_expand=topic&_embed=userLikes`).then((res) => res.json())
}