"use client";

import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import { inter, mali } from "@/utils/fonts";
import { handleClickScroll } from "@/utils/functions";
import Link from "next/link";
import Slider from "react-slick";

function Index() {
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
      <Slider {...settings} className="mb-20 w-full">
        <div className="h-[50vh] md:h-[78vh] relative">
          <div
            className="w-full h-[50vh] md:h-[78vh] bg-cover"
            style={{
              backgroundImage: "url('/assets/images/banners/banner1.jpg')",
            }}
          ></div>
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-30 z-5"></div>
          <div className="text-white absolute inset-0 text-center px-10 md:px-10 h-full">
            <div className="mt-32">
              <h1
                className={`mb-5 text-2xl md:text-5xl font-bold ${mali.className}`}
              >
                More than Farming...
              </h1>
              <h1
                className={`mb-5 text-2xl md:text-5xl font-bold ${mali.className}`}
              >
                It&rsquo;s your{" "}
                <i className={`${inter.className} font-light italic`}>New</i>{" "}
                side hustle
              </h1>

              <div className="flex flex-row justify-center mt-10">
                <div
                  onClick={() => handleClickScroll("dream")}
                  className="px-12 font-bold py-3 rounded-md max-w-fit text-white bg-[#173d25] cursor-pointer"
                >
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[50vh] md:h-[78vh] relative">
          <div
            className="w-full h-[50vh] md:h-[78vh] bg-cover"
            style={{
              backgroundImage: "url('/assets/images/banners/banner6.jpg')",
            }}
          ></div>
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-60 z-5"></div>
          <div className="text-white absolute inset-0 px-10 md:px-32 h-full">
            <div className="mt-32">
              <h1
                className={`mb-5 text-2xl md:text-5xl text-center font-bold ${mali.className}`}
              >
                Monitor and track <br /> your farm remotely
              </h1>
            </div>
          </div>
        </div>

        <div className="h-[50vh] md:h-[78vh] relative">
          <div
            className="w-full h-[50vh] md:h-[78vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/banners/banner3.jpg')",
            }}
          ></div>
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-60 z-5"></div>
          <div className="text-white absolute inset-0 px-10 md:px-32 h-full">
            <div className="mt-40 md:mt-[17rem]">
              <h1
                className={`mb-5 text-2xl md:text-5xl text-center font-bold ${mali.className}`}
              >
                We make farming possible <br /> and profitable for everyone
              </h1>
            </div>
          </div>
        </div>
      </Slider>

      {/* benefits section  */}
      <div id="dream">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="basis-1 md:basis-1/2 px-5 md:px-20 py-10">
            <h2 className={`${mali.className} text-3xl md:text-5xl`}>
              Morogoro Maize Farm Project
            </h2>
            <p className="mt-10 text-justify mb-10">
              Exciting news! Farmwise has secured 10,000 acres in
              Tanzania&apos;s fertile Morogoro region for our next maize farming
              project. As we prepare the farm for the next planting season, we
              invite you to be part of this sustainable agriculture movement.
              <br />
              <br />
              Whether you are interested in investing, learning, or farming as a
              side hustle, our Morogo farm project offers a unique opportunity
              to reap the benefit of farming with a difference. Register now to
              become part of our community.{" "}
              <span className="font-bold">Come grow with us</span>. Register
              your interest now!
            </p>

            <Link
              href={"/contact"}
              className="px-12 py-3 rounded-md max-w-fit text-white bg-[#173d25] cursor-pointer"
            >
              Register Now
            </Link>
          </div>
          <div className="basis-1 md:basis-1/2 mb-10">
            <div className="bg-[url('/assets/images/cta-2.jpg')] h-[60vh] bg-cover"></div>

            <div className="card bg-[#173d25] border-8 border-[#fdd51f] max-w-sm -mt-5 animate-bounce">
              <div className="card-body text-white text-center">
                <div className="stat-value">100+</div>
                <div className={`stat-desc text-lg ${mali.className}`}>
                  Subscribed Users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of benefits section */}

      <div className="py-10 md:py-28 bg-[#fefdf3]" id="services">
        <h1 className={`text-center text-5xl ${mali.className}`}>
          Our services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-y-5 mt-10 gap-x-8">
          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center">
                <img className="w-20" src="/assets/icons/services/F9.png" />
                <p className={`${mali.className} mt-5 text-lg`}>
                  Short-term Farm Rental <br /> Opportunity Nationwide
                </p>
                <p className="h-[20vh]">
                  Offers flexible, short-term leases on a wide range of farms
                  across the country, allowing investors and even non-farmers to
                  embark on agricultural projects instantly without long-term
                  commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="w-20" src="/assets/icons/services/F8.png" />
                <p className={`${mali.className} mt-5 text-lg`}>
                  Land Preparation and Management <br />
                  <br />
                </p>
                <p className="h-[20vh]">
                  Provides comprehensive farm services including soil testing
                  and treatment, plowing, and irrigation setup (where
                  applicable) to ensure land is fertile and ready for planting,
                  optimizing crop yield potential.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="w-20" src="/assets/icons/services/F1.png" />
                <p className={`${mali.className} mt-5 text-lg text-center`}>
                  Quality Agricultural Input <br />
                  <br />
                </p>
                <p className="h-[20vh]">
                  Supplies top-tier seeds, fertilizers, and pesticides, ensuring
                  that farmers have access to the best inputs for their crops,
                  leading to healthier plants and increased yields.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="w-20" src="/assets/icons/services/F6.png" />
                <p className={`${mali.className} mt-5 text-lg text-center`}>
                  Farming as a Service (FaaS)
                  <br />
                  <br />
                </p>
                <p className="h-[20vh]">
                  Our mobile app delivers end-to-end farm management for remote
                  farm management for transparency and accountability. You can
                  select from our list of certified and dedicated Farm Officers
                  from accredited Agricultural institutions to manage your farm
                  covering all aspects from planting to harvesting.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="w-20" src="/assets/icons/services/F4.png" />
                <p className={`${mali.className} mt-5 text-lg text-center`}>
                  Agricultural Financial Services
                  <br />
                  <br />
                </p>
                <p className="h-[20vh]">
                  We partner with agricultural-centric banks to offer tailored
                  financial solutions, including loans, insurance cover, and
                  investment opportunities, aimed to support agro-investments
                  for guaranteed returns.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="w-20" src="/assets/icons/services/F3.png" />
                <p className={`${mali.className} mt-5 text-lg text-center`}>
                  Ready Market Access
                  <br />
                  <br />
                </p>
                <p className="h-[20vh]">
                  At Farmwise, we facilitate connections between farmers and
                  buyers, ensuring that produce is fairly priced, and reaches
                  the market efficiently and profitably, reducing the risk of
                  post-harvest losses for our platform investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services section  */}
      <div className="py-12 md:py-32 bg-[#173d25]" id="works">
        <h1
          className={`text-center text-2xl md:text-5xl text-white ${mali.className}`}
        >
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mt-10 px-5 md:px-20">
          <div className="card w-full bg-[#00200d] shadow-xl">
            <div className="card-body p-12">
              <div className="flex flex-row items-center gap-x-5">
                <img src="/assets/icons/add-user.png" className="w-8" />
                <h3 className={`${mali.className} text-white text-lg`}>
                  Select and customize your Farm.
                </h3>
              </div>

              <p className="text-[#81af93] mt-3">
                Start your journey by subscribing to our online services. Browse
                through our extensive list of mechanized and irrigated farms
                across the country and select the one that speaks to your
                agricultural aspirations. Decide on the acreage that fits your
                goals, whether it&apos;s a modest plot or an expansive field.
                Farmwise is equipped to bring your farming vision to life
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
          backgroundImage: "url(/assets/images/tractor-field-min.jpg",
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
      <div className="px-5 pt-[25rem] md:mt-1 md:px-20 py-12 md:py-20 bg-[#fcfaf0]">
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
            <h2 className="font-bold text-lg">+255-713444448</h2>
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
            <h2 className="font-bold text-lg">
              patricia.kakorozya@farmwise.tz
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Index;
