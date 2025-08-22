const outerStyle = "w-1/2 border border-neutral-700 flex flex-col my-10 py-10"
// w-1/4 h-1/2 mx-3 my-3

interface JobCardProps {
    job_title: string;  
    job_description: string;
}

function JobCard({ job_title, job_description}: JobCardProps) {
    return (
      <div className={outerStyle}>
      <h2>{job_title}</h2>
      <p>{job_description}</p>
    </div>
  );
}

export default JobCard;