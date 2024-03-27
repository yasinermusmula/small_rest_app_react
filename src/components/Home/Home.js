import Post from "../Post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import PostForm from "../Post/PostForm";

export default function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [postList, setPostList] = useState([])

    const refreshPosts = () => {
        axios.get("http://localhost:8083/api/posts/")
            .then((res) => {
                setIsLoaded(!isLoaded);
                setPostList(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                setIsLoaded(!isLoaded);
                setError(err.message)
            })
    }

    useEffect(() => {
        refreshPosts()
    }, [])

    return (
        <>
            {error && (<div>Errorr!</div>)}{!isLoaded && (<div>Loading..</div>)}
            <div>
                <PostForm userId={2} userName={"sss"} refreshPosts={refreshPosts}/>
                {postList.map(post => (
                    <Post likes={post.postLikes} postId={post.id} userId={post.userId} userName={post.userName}
                          title={post.title}
                          text={post.text}/>
                ))}
            </div>
        </>
    )
}