const outerStyle = "flex flex-col p-3 border-2 border-black w-fill"


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