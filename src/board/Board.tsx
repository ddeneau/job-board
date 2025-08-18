import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";   
import { generateClient } from "aws-amplify/data";


const client = generateClient<Schema>();

const divClass = "m-2";

let jobid_counter = "0";


function Board() {
    const [jobs, setJobs] = useState<Array<Schema["jobPosting"]["type"]>>([]);

    useEffect(() => {
        client.models.jobPosting.observeQuery().subscribe({
            next: (data) => setJobs([...data.items]),
            });
    }, []);

    function createJob() {
        client.models.jobPosting.create({ job_id: jobid_counter, job_title: window.prompt("Todo content") });
        jobid_counter = (parseInt(jobid_counter) + 1).toString();
    }


    return (
        <main>
            <div className={divClass}>
                <h1 className="font-family-sans">Job Board</h1>
                <button onClick={createJob}>+ new job</button>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.job_id}>{job.job_id}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Board;