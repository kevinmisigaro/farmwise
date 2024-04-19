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
            <h1 className="mb-5 text-xl md:text-4xl font-bold text-center">
              Careeer Opportunities
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-20">
        <div>
          <h3><b>Position:</b> Farm Manager 001</h3>
          <h4><b>Location:</b> Morogoro</h4>
          <h4><b>Job Type:</b> Full-time</h4>
          <p>
            <b>Introduction:</b> We are looking for a dedicated Farm Manager to oversee
            our farm operations. The ideal candidate will have a strong passion
            for agriculture, extensive experience in farm management, and a
            proven track record of leading a team effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
