"use client";

function Page() {
  return (
    <div>
      <div
        className="hero h-[40vh]"
        style={{ backgroundImage: "url(/assets/images/farm2.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Farm Officers</h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-10 flex flex-row justify-center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekLGiA52Pxo0LlriUZloh6H8BD3IuRTbSIKUcqrk3X6BLk2Q/viewform?embedded=true" width="1000" height="2000" >Loading…</iframe>
      </div>
    </div>
  );
}

export default Page;
