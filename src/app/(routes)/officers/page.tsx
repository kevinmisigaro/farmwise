"use client";

function Page() {
  return (
    <div>
      <div
        className="hero h-[55vh] bg-cover"
        style={{ backgroundImage: "url(/assets/images/officer.jpg)", backgroundPosition: "center -45px" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-7xl">
            <h1 className="mb-5 text-xl md:text-2xl font-bold text-center">
            Farm Officer: <br/><br/> If you&apos;re an agricultural graduate from an accredited college and interested in Farmwise, please leave your details below.
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-32 flex flex-row justify-center">
     <p className="text-xl">
     For farm officers, please click this{" "}
          <a
            href="https://forms.gle/YR8nYLuxnC9qmS38A"
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
