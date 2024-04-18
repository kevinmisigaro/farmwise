"use client";

function Page() {
  return (
    <div>
      <div
        className="hero h-[55vh] bg-cover bg-top"
        style={{ backgroundImage: "url(/assets/images/officer.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-7xl">
            <h1 className="mb-5 text-xl md:text-4xl font-bold text-center">
            Farm Officer: <br/><br/> If you&apos;re an agricultural graduate from an accredited college and interested in Farmwise, , please leave your details below.
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-10 flex flex-row justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSekLGiA52Pxo0LlriUZloh6H8BD3IuRTbSIKUcqrk3X6BLk2Q/viewform?embedded=true"
          width="1000"
          height="2000"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Page;
