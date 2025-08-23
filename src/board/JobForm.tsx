import React, { useState } from 'react';
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const submitStyle = "text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4 transition-all duration-200";
const inputStyle = "border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
const labelStyle = "block text-gray-700 text-sm font-bold mb-2";

const client = generateClient<Schema>()

function JobForm() {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    async function createJob(title: string) {
        setIsSubmitting(true);
        setMessage('');

        try {
            await client.models.jobPosting.create({
                job_id: "",
                job_title: title,
                job_description: jobDescription,
            });
            setMessage("Job created successfully!");
            setJobTitle(''); // Clear the input after successful submission
        } catch (error) {
            console.error("Error creating job:", error);
            setMessage("Error creating job. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (jobTitle.trim()) {
            createJob(jobTitle);
        } else {
            setMessage("Please enter a job title");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobTitle(e.target.value);

    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobDescription(e.target.value);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg border border-black rounded">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Job Posting</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className={labelStyle}>
                        Job Title:
                    </label>
                    <input
                        className={inputStyle}
                        value={jobTitle}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter job title"
                        disabled={isSubmitting}
                    />
                    <label className={labelStyle}>
                        Job Description:
                    </label>
                    <input
                        className={inputStyle}
                        value={jobDescription}
                        onChange={handleDescriptionChange}
                        type="text"
                        placeholder="Enter job description"
                        disabled={isSubmitting}
                    />
                </div>


                <div className="flex justify-center">
                    <button
                        className={`${submitStyle} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Job'}
                    </button>
                </div>

                {message && (
                    <div className={`mt-4 p-2 rounded text-center ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}

export default JobForm;