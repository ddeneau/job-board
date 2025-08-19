const outerStyle = "w-1/2 border border-neutral-700 flex flex-col my-10 py-10 pl-5"
// w-1/4 h-1/2 mx-3 my-3

interface JobCardProps {
    job_title: string;  
    job_description: string;
    job_location: string;
    job_salary: string;
    date: Date;
}

function JobCard({ job_title, job_description, job_location, job_salary, date}: JobCardProps) {
    return (
      <div className={outerStyle}>
      <h2>{job_title}</h2>
      <p>{job_description}</p>
      <span>Location: {job_location}</span>
      <span>Salary: {job_salary}</span>
      <span>Date Posted: {date.toLocaleDateString()}</span>
    </div>
  );
}

export default JobCard;