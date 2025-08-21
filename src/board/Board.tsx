import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function Board() {

    const [jobs, setJobs] = useState<Array<Schema["jobPosting"]["type"]>>([]);

    useEffect(() => {
        client.models.jobPosting.observeQuery().subscribe({
            next: (data) => setJobs([...data.items]),
        });
    }, []);

    return (
        <main>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl font-bold mb-4">Jobs</h1>
                <p className="text-gray-600">This is the Jobs page.</p>
                <Link to="/newjob">New</Link><Outlet/>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.job_id}>{job.job_title}</li>
                    ))}
                </ul>
            </div>
            );
        </main>
    );
}

export default Board;