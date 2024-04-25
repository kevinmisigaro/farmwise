"use client";

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
              Farmland Owners: <br /> Long lease or sell your asset? Leave your
              details below.
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-32 flex flex-row justify-center">
        <p className="text-lg md:text-xl">
          For farm owners, please click this{" "}
          <a
            href="https://forms.gle/ovWoT3WqEbhWQSw66"
            target="_blank"
            className="underline text-[#277f3b]"
          >
            link
          </a>{" "}
          to register your details.
        </p>
      </div>
    </div>
  );
}

export default Page;
