import Post from "./Post";

const posts = [
    {
        id: '123',
        username: "sonny",
        userImg:"https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "This is Post blah blah"
    },
    {
        id: '345',
        username: "qazi",
        userImg:"https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "That is Post blah blah"
    }
]

function Posts() {
    return (
        <div>
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        img={post.img}
                        userImg={post.userImg}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
