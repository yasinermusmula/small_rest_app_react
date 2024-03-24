import {Link} from "react-router-dom";

export default function NavBar() {
    let userId = 5;
    return (
        <div className="flex bg-gray-800">
            <div className="flex items-center container mx-auto">
                <div className="flex items-center h-16">
                    <button className="text-white p-2" aria-label="Menu">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                    </button>
                </div>
                <p className="text-white text-lg">
                    <Link to="/">Home</Link>
                </p>
            </div>
            <div className="m-auto">
                <button className="text-white p-4">Login</button>
                <Link className="text-white" to={`/users/${userId}`}>User </Link>
            </div>
        </div>
    )
}