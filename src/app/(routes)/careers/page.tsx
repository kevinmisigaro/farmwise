import JobCard from "@/components/JobCard";
import { jobs } from "@/utils/collections";
import React from "react";

function Page() {
  return (
    <div>
      <div
        className="hero h-[40vh]"
        style={{ backgroundImage: "url(/assets/images/tractor-field-min.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-7xl">
            <h1 className="mb-5 text-4xl font-bold text-center">
              Careeer Opportunities
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-20 bg-[#D3D1C6]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {jobs.map((j) => (
            <JobCard job={j} key={j.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
