"use client";

function Page() {
  return (
    <div>
      <div
        className="hero h-[40vh]"
        style={{ backgroundImage: "url(/assets/images/banners/banner3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Farm Officers</h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-10 flex flex-row justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbGR7-tpjo8LkzGSuIwNwOWO0yTTsj7nf5K-oyybSr6wZY0w/viewform?embedded=true"
          width="1000"
          height="1100"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Page;
