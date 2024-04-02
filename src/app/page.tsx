import { inter, mali } from "@/utils/fonts";

export default function Home() {
  return (
    <>
      {/* start of hero section */}
      <div
        className="hero h-[78vh] bg-cover"
        style={{
          backgroundImage: "url(/assets/images/farm2.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-screen-lg text-white">
            <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
              Making farming fashionable <br /> & profitable for youth
            </h1>
            <p className={`mb-5 w-1/2 ${inter.className}`}>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* end of hero section */}

      {/* why choose us section */}
      <div className="py-28 bg-[#fefdf3]">
        <h1 className={`text-center text-5xl ${mali.className}`}>
          Why Are We Better <br /> Than Others?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-y-5 mt-10 gap-x-8">
          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center">
                <img
                  className="mask mask-circle w-32"
                  src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                />
                <p className={`${mali.className} mt-5 text-lg`}>
                  Quality Organic Food Store
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center">
                <img
                  className="mask mask-circle w-32"
                  src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                />
                <p className={`${mali.className} mt-5 text-lg`}>
                  Quality Standards Services
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center">
                <img
                  className="mask mask-circle w-32"
                  src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                />
                <p className={`${mali.className} mt-5 text-lg`}>
                  Organic Food Straight
                  <br />
                  From The Farmer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of why choose us section */}

      {/* services section  */}
      <div className="py-32 bg-[#173d25]">
        <h1 className={`text-center text-5xl text-white ${mali.className}`}>
          We Offers Agriculture <br /> Eco Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mt-10 px-20">
          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <h3 className={`${mali.className} text-white text-lg`}>
                Agricultural Products
              </h3>

              <p className="text-[#81af93] mt-3">
                Welcome to Dosner Organic Farms.We are a direct distributor of
                100% Organic herbs produce.
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <h3 className={`${mali.className} text-white text-lg`}>
                Fresh Vegetables
              </h3>

              <p className="text-[#81af93] mt-3">
                Welcome to Dosner Organic Farms.We are a direct distributor of
                100% Organic herbs produce.
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <h3 className={`${mali.className} text-white text-lg`}>
                ADairy Products
              </h3>

              <p className="text-[#81af93] mt-3">
                Welcome to Dosner Organic Farms.We are a direct distributor of
                100% Organic herbs produce.
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <h3 className={`${mali.className} text-white text-lg`}>
                Organic Corn
              </h3>

              <p className="text-[#81af93] mt-3">
                Welcome to Dosner Organic Farms.We are a direct distributor of
                100% Organic herbs produce.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of services section  */}

      {/* benefits section  */}
      <div>
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="basis-1 md:basis-1/2 px-5 md:px-20 py-32">
            <h2 className={`${mali.className} text-5xl`}>
              We Are Distributors Of Quality 100% Organic Produce
            </h2>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsum
              quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore quaerat
            </p>
          </div>
          <div className="basis-1 md:basis-1/2 mb-10">
            <div className="bg-[url('/assets/images/farm3.jpg')] h-[60vh] bg-cover"></div>

            <div className="card bg-[#173d25] border-8 border-[#fdd51f] max-w-sm -mt-5 animate-bounce">
              <div className="card-body text-white text-center">
                <div className="stat-value">400+</div>
                <div className={`stat-desc text-lg ${mali.className}`}>
                  Pure Organic Products
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of benefits section */}

      <div className="px-5 md:px-32 bg-[#fdd51f] flex flex-col md:flex-row justify-between gap-x-5 md:gap-x-12 py-12">
        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <div>
            <h3>Helpline and Support</h3>
            <h2 className="font-bold text-xl">+88 013 00 44 51</h2>
          </div>
        </div>

        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <div>
            <h3>Our Address</h3>
            <h2 className="font-bold text-xl">294 Crosby Brook Road</h2>
          </div>
        </div>

        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
          />
          <div>
            <h3>Send an Email</h3>
            <h2 className="font-bold text-xl">Support@gmail.com</h2>
          </div>
        </div>
      </div>
    </>
  );
}
