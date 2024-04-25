"use clients"

function Page() {
  return (
    <div>
    <div
      className="hero h-[55vh] bg-cover"
      style={{ backgroundImage: "url(/assets/images/officer.jpg)", backgroundPosition: "center -45px" }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-center text-neutral-content text-white">
        <div className="max-w-7xl">
          <h1 className="mb-5 text-xl md:text-4xl font-bold text-center">
          Farm Goods Supplier: <br/><br/> If you&apos;re a supplier of agricultural goods and interested <br/> in Farmwise, please leave your details below.
          </h1>
        </div>
      </div>
    </div>
    <div className="px-5 md:px-20 py-32 flex flex-row justify-center">
    <p className="text-xl">
    For suppliers, please click this{" "}
        <a
          href="https://forms.gle/PJHHVGnZTacqXer67"
          target="_blank"
          className="underline text-[#277f3b]"
        >
          link
        </a>{" "}
        to register your details.
    </p>
    </div>
  </div>
  )
}

export default Page