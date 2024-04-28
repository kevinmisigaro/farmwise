"use client";

function Page() {
  return (
    <div>
      <div
        className="hero h-[60vh] bg-cover"
        style={{
          backgroundImage: "url(/assets/images/banners/farmowners2.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-8xl">
            <h1 className="mb-5 text-xl md:text-2xl font-bold text-center">
              Partner with Us for Farm Development:
              <br />
              <br />
              At Farmwise, we are always looking to collaborate with leaders in
              the agricultural industry to enhance our service offerings and
              deliver exceptional value to our clients. If your company
              specializes in providing top-quality seeds, fertilizers,
              pesticides, or offers expert extension and consultancy services,
              Connect with us Today.
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-32 flex flex-row justify-center">
        <p className="text-xl">
          For development partners,{" "}
          <a
            href="https://forms.gle/PJHHVGnZTacqXer67"
            target="_blank"
            className="underline text-[#277f3b]"
          >
            Click Here
          </a>{" "}
          to register your details.
        </p>
      </div>
    </div>
  );
}

export default Page;
