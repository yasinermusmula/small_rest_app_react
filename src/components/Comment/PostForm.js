import {Link} from "react-router-dom";
import {React, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";


export default function PostForm(props) {

    const {userName, userId, title, text} = props
    const [textArea, SetTextArea] = useState("")
    const [titleArea, SetTitleArea] = useState("")

    const postClick = (e) => {
        e.preventDefault()
        const data = {title: titleArea, text: textArea, userId}
        console.log(data)
        axios.post("http://localhost:8083/api/posts/", data)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
            console.log(err)
        })
    }
    const handleText = (value) => {
        SetTextArea(value)
    }

    const handleTitle = (value) => {
        SetTitleArea(value)
    }


    return (
        <form onSubmit={postClick}
              className="max-w-md m-auto mt-5  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex ">
                <div className="p-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link
                                to={`/users/${userId}`}
                                className="inline-block h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                                {userName.charAt(0).toUpperCase()}
                            </Link>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    onChange={(e) => handleTitle(e.target.value)}
                                    type="text"
                                    className="ml-5 block w-full pr-10 sm:text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your title here"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            onChange={(e) => handleText(e.target.value)}
                            type="text"
                            className="block h-16 w-full pr-10 sm:text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                            placeholder="Your text here"
                        />
                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 px-3 py-1.5 bg-blue-500 text-white rounded-md"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}