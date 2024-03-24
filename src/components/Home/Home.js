import Post from "../Post/Post";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [postList, setPostList] = useState([])

    useEffect(() => {
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
    }, []);

    return (
        <>
            {error && (<div>Errorr!</div>)}{!isLoaded && (<div>Loading..</div>)}
            <div>
                {postList.map(post => (
                    <Post userId={post.userId} userName={post.userName} title={post.title} text={post.text}/>
                ))}
            </div>
        </>
    )
}