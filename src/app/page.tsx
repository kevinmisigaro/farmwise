"use client";

import Testimonial from "@/components/testimonial";
import { inter, mali } from "@/utils/fonts";
import { useRef } from "react";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <>

      <Slider {...settings} className="mb-20">

        <div className="h-[50vh] md:h-[78vh] relative">
          <img src="/assets/images/Farm5.jpg" />
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-60 z-5"></div>
          <div className="text-white absolute inset-0 px-10 md:px-32 h-full">
            <div className="mt-32">
              <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
                More than Farming...
              </h1>
              <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
                It&rsquo;s your{" "}
                <i className={`${inter.className} font-light italic`}>New</i>{" "}
                side hustle
              </h1>

              <div className="px-12 font-bold py-3 rounded-md max-w-fit mt-10 text-white bg-[#173d25] cursor-pointer">
                Join Us
              </div>
            </div>
          </div>
        </div>

        <div className="h-[50vh] md:h-[78vh] relative">
          <img src="/assets/images/farm1.jpg" />
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-60 z-5"></div>
          <div className="text-white absolute inset-0 px-10 md:px-32 h-full">
            <div className="mt-32">
              <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
                Slider 2
              </h1>
              <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>

              <div className="px-12 font-bold py-3 rounded-md max-w-fit mt-10 text-white bg-[#173d25] cursor-pointer">
                Join Us
              </div>
            </div>
          </div>
        </div>


        <div className="h-[50vh] md:h-[78vh] relative">
          <img src="/assets/images/farm2.jpeg" />
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-60 z-5"></div>
          <div className="text-white absolute inset-0 px-10 md:px-32 h-full">
            <div className="mt-32">
              <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
                Slider 3
              </h1>
              <h1 className={`mb-5 text-5xl font-bold ${mali.className}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>

              <div className="px-12 font-bold py-3 rounded-md max-w-fit mt-10 text-white bg-[#173d25] cursor-pointer">
                Join Us
              </div>
            </div>
          </div>
        </div>
      </Slider>

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
              limited spaces available, now is the moment to act. Visit us at
              &nbsp;
              <a href="www.farmwise.tz" target="_blank" className="underline">
                www.farmwise.tz
              </a>
              , subscribe, and embark on your farming journey today. Embrace the
              future of farming with Farmwise — a promise of success!
            </p>

            <div className="px-12 py-3 rounded-md max-w-fit mt-10 text-white bg-[#173d25] cursor-pointer">
              Button
            </div>
          </div>
          <div className="basis-1 md:basis-1/2 mb-10">
            <div className="bg-[url('/assets/images/farm3.jpg')] h-[60vh] bg-cover"></div>

            <div className="card bg-[#173d25] border-8 border-[#fdd51f] max-w-sm -mt-5 animate-bounce">
              <div className="card-body text-white text-center">
                <div className="stat-value">100+</div>
                <div className={`stat-desc text-lg ${mali.className}`}>
                  Registered Users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of benefits section */}

      {/* why choose us section */}
      {/* <div className="py-28 bg-[#fefdf3]">
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
      </div> */}
      {/* end of why choose us section */}

      {/* services section  */}
      <div className="py-32 bg-[#173d25]">
        <h1 className={`text-center text-5xl text-white ${mali.className}`}>
          How Farmwise works:
          <br /> Effortless Farming at your Fingertips
        </h1>

        <div className="px-5 md:px-20 py-10 text-white text-center">
          <p>
            At Farmwise, we&apos;ve streamlined the path to successful farming
            for busy professionals like you. Our innovative online Farm services
            platform is designed to make agriculture accessible, no matter your
            schedule or location. Here&apos;s how you can dive into farming,
            hassle-free:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mt-10 px-20">
          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <div className="flex flex-row items-center gap-x-5">
                <img src="/assets/icons/add-user.png" className="w-8" />
                <h3 className={`${mali.className} text-white text-lg`}>
                  Subscribe and Select
                </h3>
              </div>

              <p className="text-[#81af93] mt-3">
                Start your journey by subscribing to our online services. Browse
                through our extensive list of mechanized and irrigated farms
                across the country and select the one that speaks to your
                agricultural aspirations.
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <div className="flex flex-row items-center gap-x-5">
                <img src="/assets/icons/custom.png" className="w-8" />
                <h3 className={`${mali.className} text-white text-lg`}>
                  Customize Your Farm
                </h3>
              </div>

              <p className="text-[#81af93] mt-3">
                Decide on the acreage that fits your goals. Whether it&apos;s a
                modest plot or an expansive field, Farmwise is equipped to bring
                your farming vision to life.
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <div className="flex flex-row items-center gap-x-5">
                <img src="/assets/icons/relax.png" className="w-8" />
                <h3 className={`${mali.className} text-white text-lg`}>
                  Sit Back, We&apos;ve Got This
                </h3>
              </div>

              <p className="text-[#81af93] mt-3">
                Once you&apos;ve made your choice, Farmwise takes over. We
                provide all necessary quality inputs, including premium seeds,
                environmentally friendly fertilizers, and pesticides. Plus, our
                agronomic extension services are there to ensure your farm
                thrives.
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <div className="flex flex-row items-center gap-x-5">
                <img src="/assets/icons/customer-support.png" className="w-8" />
                <h3 className={`${mali.className} text-white text-lg`}>
                  Expert Care On-Demand
                </h3>
              </div>

              <p className="text-[#81af93] mt-3">
                Understanding your busy lifestyle and the physical distance from
                your farm, we offer the option to hire certified agricultural
                experts directly through our platform. They&apos;ll tend to your
                farm, applying expert knowledge and care, ensuring optimal
                growth and yield.
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <div className="flex flex-row items-center gap-x-5">
                <img
                  src="/assets/icons/combine-harvester.png"
                  className="w-8"
                />
                <h3 className={`${mali.className} text-white text-lg`}>
                  Harvest Your Success
                </h3>
              </div>

              <p className="text-[#81af93] mt-3">
                The fruits of your investment are entirely yours. At harvest,
                you&apos;re free to enjoy the produce, share it, or even sell it
                back to us. Should you choose to sell, we ensure a smooth
                transaction, crediting your proceeds directly to your designated
                bank account.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of services section  */}

      <div
        className="hero h-[85vh] bg-cover"
        style={{
          backgroundImage: "url(/assets/images/tractor-field.jpg",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-black"></div>
        <div className="hero-content text-neutral-content">
          <div className="text-white w-[80vw]">
            <div className={`${mali.className} text-center mb-12 text-3xl`}>
              About Farmwise
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-20">
              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Farm.png"
                    className="text-white max-w-20"
                  />
                  <div className="font-bold text-lg">
                    Mechanized and Irrigated Farmlands
                  </div>
                </div>
                <div className="text-sm text-justify">
                  Our state-of-the-art farms are spread across the country,
                  featuring full mechanization and irrigation systems. You can
                  lease a portion of these lands for each farming season,
                  ensuring your venture into agriculture is as smooth as
                  possible.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Com Sup.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold">Comprehensive Support</div>
                </div>
                <div className="text-sm text-justify">
                  Every farm comes with detailed agronomic studies and extension
                  services, ensuring you&apos;re never left guessing about the
                  best practices for your crops. We prioritize security and
                  offer detailed economics of production, focusing on the most
                  optimized crops for our conditions.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="assets/icons/Recy.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold">
                    Environmentally Friendly Inputs
                  </div>
                </div>
                <div className="text-sm text-justify">
                  We provide fertilizers and pesticides that are not only
                  effective but also environmentally friendly. This commitment
                  to sustainability helps ensure an optimal harvest and
                  contributes to a healthier planet.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Success.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold">Guaranteed Success</div>
                </div>
                <div className="text-sm text-justify">
                  By removing the hurdles traditionally associated with farming,
                  we guarantee success in your agricultural endeavors. Our model
                  is designed to make farming accessible, profitable, and
                  hassle-free for everyone, regardless of their background in
                  agriculture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="px-5 md:px-32 bg-[#173d25] text-white flex flex-col md:flex-row justify-between gap-x-5 md:gap-x-12 py-12">
        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="/assets/icons/icons8-phone-50.png"
          />
          <div>
            <h3>Helpline and Support</h3>
            <h2 className="font-bold text-lg">+88 013 00 44 51</h2>
          </div>
        </div>

        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="/assets/icons/icons8-location-50.png"
          />
          <div>
            <h3>Our Address</h3>
            <h2 className="font-bold text-lg">
              Msasani Tower, Postal code 14111, <br /> Plot number 503/1, P.O.
              Box 38556, <br /> Dar Es Salaam, Tanzania
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="/assets/icons/icons8-telegram-app-50.png"
          />
          <div>
            <h3>Send an Email</h3>
            <h2 className="font-bold text-lg">Support@gmail.com</h2>
          </div>
        </div>
      </div>
    </>
  );
}
