import {React, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

export default function CommentForm(props) {
    const [text, SetText] = useState("")

    const {userId, userName, postId} = props;

    const postClick = (e) => {
        e.preventDefault()
        const data = {userId, postId, text}
        console.log(data)
        axios.post("http://localhost:8083/api/comments/", data)
            .then((res) => {
                console.log(res.data)
                toast.success("Post sent it!")
                SetText("")
            }).catch((err) => {
            console.log(err)
        })
    }

    const handleChange = (e) => {
        SetText(e)
    }

    return (
        <form onSubmit={postClick} className="flex items-center">
            <Link
                to={`/users/${userId}`}
                className="inline-block h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                {userName.charAt(0).toUpperCase()}
            </Link>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    value={text}
                    onChange={(e) => handleChange(e.target.value)}
                    type="text"
                    className="ml-5 block w-full pr-10 sm:text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your comment here"
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-0  bg-blue-500 text-white rounded-md"
                >
                    Comment
                </button>
            </div>
        </form>
    )
}
