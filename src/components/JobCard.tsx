import { Job } from "@/utils/interfaces";
import Link from "next/link";

function JobCard({ job }: { job: Job }) {
  return (
    <Link href={`/careers/${job.id}`}>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body  p-0  rounded-md  bg-white">
          <h2 className="card-title font-bold bg-[#173d25] 0 py-2 px-3 text-white">
            {job.position}
          </h2>
          <p className="px-4 py-4 ">
            <b>Position:</b> {job.jobType} <br />
            <b>Location:</b> {job.location}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
