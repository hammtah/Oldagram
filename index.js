const posts = [{
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21 + "," +
            492,
        class: "top"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12 + "," + 502,
        class: ""
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15 + "," + 137,
        class: ""
    }
]


const post_content = document.querySelector(".post-content");
for (let i = 0; i < posts.length; i++) {
    post_content.innerHTML += `
        <div class="user-info ${posts[i].class}">
            <div class="user-image">
                <img src="${posts[i].avatar}" alt="">
            </div>
            <div class="name-location">
                <p class="username bold">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>
        <div class="post">
            <img src="${posts[i].post}" alt="">
        </div>
        <div class="user-body">
            <div class="icons">
                <div class="icon-heart">
                    <img src="images/icon-heart.png" alt="">
                </div>
                <div class="icon-comment">
                    <img src="images/icon-comment.png" alt="">
                </div>
                <div class="icon-dm">
                    <img src="images/icon-dm.png" alt="">
                </div>


            </div>
            <p class="likes bold">${posts[i].likes} likes</p>
            <p class="comment"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
`
}