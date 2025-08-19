import React from 'react';
import type { Schema } from "../../amplify/data/resource"; 
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>()


function JobForm() {

  

    function createJob(title: string) {
        client.models.jobPosting.create({
			job_id: crypto.randomUUID(), // Generate a unique ID for the job
            job_title: title,
        })
            .then(() => console.log("Job created successfully!"))
            .catch((error) => console.error("Error creating job:", error));
	}

	return (
		<div>
            <form
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        title: { value: string };
                    };

                    createJob(target.title.value); // Create a new job with the title
                }}
            >
                <div>
                    <label>
                        Enter a Job Title:
                        <input type="title" name="job title" />
                    </label>
                </div>
                <div>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
		</div>
	);
}

export default JobForm;