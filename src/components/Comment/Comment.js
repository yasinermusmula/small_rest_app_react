import {React} from "react";
import {Link} from "react-router-dom";

export default function Comment(props) {

    const {text, userId, userName} = props;

    return (
        <div className="flex items-center">
            <Link
                to={`/users/${userId}`}
                className="inline-block h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                {userName.charAt(0).toUpperCase()}
            </Link>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    value={text}
                    type="text"
                    className="ml-5 block w-full pr-10 sm:text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your title here"
                />
            </div>
        </div>
    )
}
