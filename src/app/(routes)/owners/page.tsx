"use client";

function Page() {
  return (
    <div>
      <div
        className="hero h-[60vh]"
        style={{ backgroundImage: "url(/assets/images/banners/development.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-65 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-7xl">
            <h1 className="mb-5 text-xl md:text-2xl font-bold text-center">
              Partner with Us for Farm Excellence:
              <br />
              <br />
              At Farmwise, we specialize in leasing farms and partnering with
              landowners to elevate farmlands to international and sustainable
              standards. Our focus is on enhancing productivity through modern,
              eco-friendly practices, ensuring a win-win arrangement for every
              stakeholder.
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
