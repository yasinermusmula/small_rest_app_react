import {React, useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/CommentPost";


export default function Post(props) {
    const {title, text, userId, userName, postId, likes} = props;

    const [expanded, SetExpanded] = useState(false);
    const [commentList, SetCommentList] = useState([])
    const isInitialMount = useRef(true)
    const [likeCount, SetLikeCount] = useState(likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [liked, Setliked] = useState(null)

    const handleExpandedClick = () => {
        SetExpanded(!expanded)
        refreshComments()
    }

    const changeLikeIconCollor = () => {
        setIsLiked(!isLiked)
        if (!isLiked) {
            SetLikeCount(prev => prev + 1)
            saveLike()
        } else {
            SetLikeCount(prevState => prevState - 1)
            deleteLike()
        }
    }

    const refreshComments = () => {
        axios.get("http://localhost:8083/api/comments?postId=" + postId)
            .then((res) => {
                console.log(res.data)
                SetCommentList(res.data)
            }).catch((err) => {
            console.log(err)
        })
    }

    const saveLike = () => {
        const data = {postId: postId, userId: userId}
        console.log(data)
        axios.post("http://localhost:8083/api/likes/", data)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
            console.log(err)
        })
    }

    const deleteLike = () => {
        console.log(liked)
        axios.delete("http://localhost:8083/api/likes/" + liked)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            refreshComments()
        }
    }, []);

    const checkLikes = () => {
        let likeControl = likes.find((like => like.userId === userId))
        if (likeControl != null) {
            Setliked(likeControl.id)
            setIsLiked(true)
        }
    }

    useEffect(() => {

    }, []);

    return (
        <div className="max-w-md m-auto mt-5  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex ">
                <div className="p-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link
                                to={`/users/${userId}`}
                                className="inline-block h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                                {userName.charAt(0).toUpperCase()}
                            </Link>
                            <div className="ml-2">
                                <p className="text-left text-xl text-gray-900 font-medium">{title}</p>

                            </div>
                        </div>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-label="Settings">

                        </button>
                    </div>
                    <p className="mt-4 text-base text-gray-600">
                        {text}
                    </p>
                    <div className="mt-4">
                        <button
                            className="mr-3 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-label="Add to favorites">
                            <svg onClick={changeLikeIconCollor}
                                 className={`h-6 w-6 ${isLiked ? "text-red-500" : "text-gray-600"}`} fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                        {likeCount}
                        <button
                            className="mr-3 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-label="Share">

                        </button>
                        <button
                            className="p-2 ml-32 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            onClick={handleExpandedClick}
                            aria-expanded={expanded ? 'true' : 'false'}
                            aria-label="Show more"
                        >
                            <svg className={`h-6 w-6 transform ${expanded ? 'rotate-180' : 'rotate-0'}`}
                                 fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M19 9.41L17.59 8 12 13.59 6.41 8 5 9.41 12 16z"
                                      clipRule="evenodd"/>
                            </svg>

                        </button>
                    </div>
                    {expanded && (
                        <>
                            {commentList.map(comment => (
                                <Comment key={comment.id} userId={1} userName={"USER"} text={comment.text}/>
                            ))}
                            <CommentForm userId={2} postId={postId} serId={1} userName={"USER"}/>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}