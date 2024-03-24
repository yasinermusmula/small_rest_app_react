import {React, useState, useEffect} from "react";
import {Link} from "react-router-dom";


export default function Post(props) {

    const [expanded, SetExpanded] = useState(false);

    const handleExpandedClick = () => {
        SetExpanded(!expanded)
    }

    const {title, text, userId, userName} = props;
    return (
        <div className="max-w-md m-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
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
                            <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
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

                </div>
            </div>
        </div>
    )
}