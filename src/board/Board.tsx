import { Link, Outlet } from "react-router-dom";



function Board() {


 
    return (
        <main>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl font-bold mb-4">Jobs</h1>
                <p className="text-gray-600">This is the Jobs page.</p>
                <Link to="/newjob">New</Link><Outlet/>
                <ul>

                </ul>
            </div>
            );
        </main>
    );
}

export default Board;