import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";
import FlipMove from 'react-flip-move';



function Posts() {

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        });
    }, [db]);

    return (
        <div>
            <FlipMove>
                {
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            username={post.data().username}
                            img={post.data().image}
                            userImg={post.data().profileImg}
                            caption={post.data().caption}
                        />
                    ))
                }
            </FlipMove>
        </div>
    )
}

export default Posts
