import Testimonial from "@/components/testimonial";
import { inter, mali } from "@/utils/fonts";

export default function Home() {
  return (
    <>
      {/* start of hero section */}
      <div
        className="hero h-[78vh] bg-cover"
        style={{
          backgroundImage: "url(/assets/images/Farm5.jpg",
        }}
      >
        <div className="hero-overlay bg-opacity-40 bg-black"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-screen-xl text-white">
            <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
              More than Farming...
            </h1>
            <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
              Its your{" "}
              <span className={`${inter.className} font-light italic`}>
                New
              </span>{" "}
              side hustle
            </h1>
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
              Why Wait? Your Farming Dream is Just a Click Away
            </h2>
            <p className="mt-10 text-justify">
              Transform your vision of owning a prosperous farm into reality
              with Farmwise. Our streamlined process, backed by comprehensive
              support, makes farming a seamless, rewarding experience. With
              limited spaces available, now is the moment to act. Visit us at &nbsp;
              <a href="www.farmwise.tz" target="_blank" className="underline">www.farmwise.tz</a>, subscribe, and embark on your farming journey
              today. Embrace the future of farming with Farmwise — a promise of
              success!
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

      {/* start of testimonial */}
      <div className="px-5 md:px-20 py-20 bg-[#fcfaf0]">
        <div className={`${mali.className} text-center text-4xl`}>
          What people say about Farmwise
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-6 mt-10`}
        >
          <Testimonial
            name="Grace Kitali"
            role="Customer service manager"
            description="The thought of getting into agriculture was off for me with zero experience in farming. But Farmwise promises to make it accessible and, dare I say, even exciting. The platform not only demystified the agricultural sector to me but will also give me an opportunity for hassle-free investing in Agriculture beyond my regular job"
          />
          <Testimonial
            description="Nadhani sasa kilimo kinakwenda kuwa na mwanga tofauti! As a businessman I have never dreamt of going into farming, I can not be present and ensure all is going well but I think with what I have seen here please may i be one of the first people you consider to take part in this beautiful project. Aisee farmwise mko juu sana!"
            name="Hemedy Omar"
            role="Business owner Kariakoo"
          />
          <Testimonial
            description="I have always known that farming was profitable, but the odds were too much for me, like the distance, and deception. simply nobody to trust! The risk was too high, now with Framwise, I feel in control and secure. I  cant wait to start. Hongera sana Farmwise"
            name="Dr Amina Maopola"
            role="University Lecturer"
          />
          <Testimonial
            description="Wow, I never knew at some point in my life I would be able to use technology and farming!! Im really excited, this is so huge, a banker and a farmer? … I can't wait for the next season of making money to start!"
            name="Ms Asha Baruti"
            role="Banker in Dar"
          />
          <Testimonial
            description="Kama shamba lina Mifumo ya umwagiliaji nitalima sana tuu, maana tatizo kubwa ilikuwa jinsi ya kupata shamba lililo tayari, gharama ni kubwa sana kwa sisi Vijana. lakini pia kuna wakati hatupati mbegu bora."
            name="Mr. Baraka Mugeta"
            role="Dereva wa bajaji"
          />
          <Testimonial
            description="The exciting thing is that Farmwise is fresh and different. So I am directly responsible for my farm and my fortunes. I can lease from multiple farms and grow different crops without the usual struggles. OMG this is amazing!"
            name="Laitore Massai"
            role="Traffic Police"
          />
        </div>
      </div>
      {/* end of testimonial */}

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
