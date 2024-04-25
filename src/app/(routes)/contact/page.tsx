function Index() {
  return (
    <div>
         <div
        className="hero h-[40vh]"
        style={{ backgroundImage: "url(/assets/images/banners/banner7-min.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">
            Be the First to Benefit!
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-32 flex flex-row justify-center">
      <p className="text-xl">
    Please click this{" "}
        <a
          href="https://forms.gle/EDwwi3ck3Kgf6HBs9"
          target="_blank"
          className="underline text-[#277f3b]"
        >
          link
        </a>{" "}
        to register your details and show your expression of interest
    </p>
      </div>
    </div>
  );
}

export default Index;
