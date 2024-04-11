

export const getPosts = () => {
    return fetch('http://localhost:8088/posts?_expand=user&_expand=topic&_embed=userLikes').then((res) => res.json())
}