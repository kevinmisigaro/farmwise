"use client";

function Page() {
  return (
    <div>
      <div
        className="hero h-[40vh]"
        style={{ backgroundImage: "url(/assets/images/tractor-field-min.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl font-bold">
              Unlock the power of your farmland with Farmwise Tanzania! If you
              want to lease or sell your land, we can help make it a part of
              something big and exciting. Join us and see how your farm can help
              feed people and make Tanzania a better place. Get in
              touch to learn more!
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
